# Authentication Boilerplate
![apiBadge](https://img.shields.io/badge/API-graphql-ff69b4)

NodeJS, Graphql, JWT, React Auth Boilerplate

## Usage 
Use this application to bootstrap a fully functional NodeJS/React application that uses JWT for authentication and a Graphql Application



## Installation

Required 
NodeJS
MongoDB

```
git clone {}
```
Create a `nodemon.js` file to store the following enviroment variables :
```
"env":{
    "MONGO_USER":"your-mongo-user-name",
    "MONGO_PASSWORD":"your-mongo-password",
    "MONGO_DB":"your-database-name"
}

```
After setting up
```bash

cd {} && npm install && npm start
cd frontend && npm install && npm start

```

Navigate to `localhost:8000/graphql` to query your database (using graphiql)

Navigate to `localhost:3000` to query the database (login/SignUp) with React


## DOCS
[Graphql](https://graphql.org/)

