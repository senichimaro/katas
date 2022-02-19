require('dotenv/config')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const endpoints = require('./routes/routes')

app.use( bodyParser.urlencoded({ extended:false }) )
app.use( bodyParser.json() )

const cors = require('cors')
const options = cors.CorsOptions = {
  origin:[ process.env.APP_CORS_ONE ]
}
app.use( cors( options ) )

app.use( endpoints )


module.exports = app
