# Sadaqa Frontend

This is the frontend for the Sadaqa project. It is built using Next.js and TypeScript.

## Getting Started

### Pre-requisites

First, you need to have `docker` and `docker-compose` installed on your machine. 
Refer to the [download page](https://docs.docker.com/get-docker/) to get them.

Also you will need `node` and `npm` installed on your machine.
Refer to the [download page](https://nodejs.org/en/download/) to get them.
make sure you install the version specified in the `.nvmrc` file

### Running the project locally

To run the development server, you have two options:

#### 1. Use Docker only (recommended)

This is the recommended way to run the project locally. It will run the project in a container, and you will not need to install any dependencies on your machine.
Docker will pull and setup the backend, and run the frontend in a container.

To run the project in docker, run the following command (this will take a few minutes the first time you run it):

```bash
npm run docker:dev
````

Then open your browser and go to [http://localhost:3000](http://localhost:3000).


#### 2. Use Docker for the backend and run the frontend locally

In case you wanna run the frontend locally, and use docker only for the backend, follow those steps:

1 - start the backend:

```bash
npm run docker:dev:min
````

2 - install the dependencies:

```bash
npm install
````

3 - run the frontend:

```bash
npm run dev
````

Then open your browser and go to [http://localhost:3000](http://localhost:3000).

### Staying up to date with the latest version of the backend

Docker will cash the backend image locally, and will not pull it everytime you start the project.
To make sure you are using the latest version of the backend, you need to pull the new image from time to time.

To do so, run the following command:
```bash
npm run docker:backend:pull
````

### Testing the production build locally

To test the production build locally, run the following command:

```bash
npm run docker:prod
````

Then open your browser and go to [http://localhost:3000](http://localhost:3000).

