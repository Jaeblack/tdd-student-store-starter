// YOUR CODE HERE
const express = require('express')
const morgan = require('morgan');
const bodyParser = require('body-parser')
const { NotFoundError} = require('./utils/errors')

const app = express()

app.use(bodyParser.json());
app.use(morgan('tiny'));

app.get('/', (req, res)=>{
    res.status(200).send({ "ping": "pongg" })
})


app.use((req, res, next)=>{
    console.log('Nooooo')
    next((new NotFoundError()));
});

app.use((error, req, res, next)=>{
    const { status , message} = error;

    const errorObject = {
        status : status || 500,
        message : message || "Something went wrong with de application"
    }

    res.status(status).send({ error : (errorObject)});
});

module.exports = app
