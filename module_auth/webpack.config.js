require('dotenv').config();
const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { FederatedTypesPlugin } = require('@module-federation/typescript');
const PACKAGE = require('./package.json');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');

const federationConfig = {
    name: PACKAGE.name,
    filename: 'remoteEntry.js',
    remotes: {},
    exposes: {
        './i18n': './src/exposes/i18n',
        './store': './src/exposes/store',
        './LoginButton': './src/exposes/LoginButton',
        './LoginPage': './src/exposes/LoginPage'
    },
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
        filename: `main.${PACKAGE.version}.js`,
        path: path.resolve(__dirname, 'build')
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
        }),
        new ESLintWebpackPlugin({
            extensions: ['js', 'jsx', 'ts', 'tsx']
        })
    ]
};

module.exports = config;
