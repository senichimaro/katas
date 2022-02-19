const bodyParser = require('body-parser')
const express = require('express')
const apiEndpoints = require('./routes/reoutes')
const app = express()


const cors = require('cors')
const allowedOrigins = ['http://localhost:8080']
const options = cors.CorsOptions = {
  origin: allowedOrigins
}
app.use( cors(options) )


// app.use( bodyParser.urlencoded({extended:false}) )
app.use( express.urlencoded({extended:true}) )
app.use( bodyParser.json() )


app.use( apiEndpoints )



module.exports = app
