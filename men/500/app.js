const express = require('express');
const bodyParser = require('body-parser')
const endpoints = require('./routes/endpoints')
const app = express();

app.use( bodyParser.urlencoded({extended:false}) )
app.use( bodyParser.json() )

const cors = require('cors')
const options = cors.CosrsOptions = {
  origin:[process.env.FRONTEND_ORIGIN]
}
app.use( cors(options) )

app.use( endpoints )

module.exports = app
