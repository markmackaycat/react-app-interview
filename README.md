# Getting Started with Checkatrade React Interview App

Before performing the following, please make sure you've read [the brief](./BRIEF.md) for the interview exercise.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Install packages

Run `npm install` in the project directory


## Available Scripts

There are two ways you can run the react application:

1) Run from the command prompt
2) Spin up the React application within a docker container (you'll need to have [Docker installed](https://www.docker.com/))

**NOTE: If you wish to use a PostgreSQL database for the data on the backend, you will need to use Option 2**


## React application (from command prompt)

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
The app should automatically open in your default browser, if not, open [http://localhost:3001](http://localhost:3001) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


## React application (within a docker container)

In the project directory, you can run:

### `docker-compose up`

This will spin up a docker container `react-app-interview`.

Within this container are 3 images:

1) **postgres** - A [PostgreSQL](https://www.postgresql.org/) database
2) **pgadmin** - An instance of [pgAdmin](https://www.pgadmin.org/) for browsing and manipulating the database
3) **react_app** - The React application 

The react application can be accessed at [http://localhost:3001](http://localhost:3001)

The pgAdmin instance can be accessed at [http://localhost:3002](http://localhost:3002)

For pgAdmin, uou will need the login details:

| Property        | Value          |
|-----------------|----------------|
| username        | admin@test.com |
| password        | password       |

When setting up the connection to the PostgreSql database (either from pgAdmin or within the React application) you will need the following credentials:

| Property        | Value      |
|-----------------|------------|
| host            | postgres   |
| port            | 5432       |
| database name   | booksdb    |
| username        | dbuser     |
| password        | password   |
