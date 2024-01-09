# React Micro Frontend

This repository contains a React micro frontend project consisting of a host and a module.

## Getting Started

To run the micro frontend, follow these steps:

1. `yarn install`, `yarn build`, then serve the build folder in port 3001
2. `yarn install`, then `yarn dev` and the host will run on localhost port 8080

The module1 will serve it's components in localhost:3001, the host will then fetch it's component to render it on the host

To configure the imported and exported components, take a look at webpack.config.js file, federationConfig variable
