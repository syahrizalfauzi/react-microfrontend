# React Micro Frontend

This repository contains a React micro frontend project consisting of a host and a module.

## Getting Started

To run the micro frontend, follow these steps:

> [!IMPORTANT]
> module_redux must be served first because it's a dependency of the other modules

1. Start module_redux by running `yarn install`, `yarn build`, then serve the build folder in port 9000
2. Start module_counter by running `yarn install`, `yarn build`, then serve the build folder in port 3001
3. Start module_auth by running `yarn install`, `yarn build`, then serve the build folder in port 3002
4. Start the host by running `yarn install`, then `yarn dev` and the host will run on localhost port 8080

To configure the imported and exported components, take a look at webpack.config.js file, federationConfig variable

