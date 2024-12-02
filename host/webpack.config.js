require('dotenv').config();
const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { FederatedTypesPlugin } = require('@module-federation/typescript');
const PACKAGE = require('./package.json');

const remotes = {
    module_counter: process.env.MODULE_COUNTER_URL,
    module_auth: process.env.MODULE_AUTH_URL
};

const federationConfig = {
    name: PACKAGE.name,
    filename: 'remoteEntry.js',
    remotes: Object.fromEntries(
        Object.entries(remotes).map(([name, url]) => [name, `${name}@${url}/remoteEntry.js`])
    ),
    exposes: {},
    shared: {
        ...PACKAGE.dependencies,
        react: {
            singleton: true,
            requiredVersion: PACKAGE.dependencies.react
        },
        'react-dom': {
            singleton: true,
            requiredVersion: PACKAGE.dependencies['react-dom']
        }
    }
};

const config = {
    mode: process.env.NODE_ENV ?? 'development',
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        plugins: [new TsconfigPathsPlugin()]
    },
    output: {
        filename: `main.${PACKAGE.version}.[hash].js`,
        path: path.resolve(__dirname, 'build')
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            chunks: ['main'],
            template: 'src/index.html',
            inject: 'body'
        }),
        new ModuleFederationPlugin(federationConfig),
        new FederatedTypesPlugin({
            federationConfig
        })
    ]
};

module.exports = config;
