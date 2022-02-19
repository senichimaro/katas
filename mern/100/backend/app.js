const express = require('express');
const bodyParser = require('body-parser')
const productRoutes = require('./routes/products')

const app = express();

const cors = require('cors')
// const allowedOrigins = ['http://localhost:3000'];
const allowedOrigins = ['http://localhost:3000','http://localhost:3010'];
const options = cors.CorsOptions = {
  origin: allowedOrigins
};
app.use(cors(options));


app.use( bodyParser.urlencoded({extended:false}) )
app.use( bodyParser.json() )

app.use('/public', express.static(`${__dirname}/storage/images`))

app.use('/v1', productRoutes)

module.exports = app
