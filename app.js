const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const mongoose = require('mongoose');

// Middleware if needed to secure routes
const isAuth = require('./middleware/authenticator');

const app = express();
app.use(bodyParser.json())

// Graphql Schema and Resolvers
const graphqlSchema = require('./graphql/schema/index');
const graphqlResolver = require('./graphql/resolvers/index');

// Add headers to incoming req/res (CORS)
app.use((req,res, next) =>{
    // Allow Connection from Client
    res.setHeader("Access-Control-Allow-Origin", "*");
    // Allowed Requests
    res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
    // Allowed Headers
    res.setHeader("Access-Control-Allow-Headers","Content-Type, Authorization")

    // Handle default Options Request from browser
    if(req.method == "OPTIONS"){
        return res.sendStatus(200)
    }
    next();
})

// Use Middleware (if needed)
// app.use(isAuth)

app.use('/graphql', graphqlHttp({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true
}))


mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@nkosihypdev-itqdi.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`).then(() => {
    app.listen(8000);
}).catch(err => {
    console.log(err)
});
