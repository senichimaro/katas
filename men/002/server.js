const path = require('path');
const colors = require('colors');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

// use body-parser to parse request body data
app.use( bodyParser.json() )
// use express.urlencoded to complement body data into requests
app.use( express.urlencoded({extended:true}) )

/** MongoDB connection
*/
// require model
const UserModel = require('./src/model/user.js');
// connect mongoose to mongod
mongoose.connect(
  'mongodb://localhost/apiCalls',
  {useNewUrlParser:true,useUnifiedTopology:true}
);


app.get('/',(req,res)=>{res.json({"message":"Service Running"})})
/** Set API Endpoints
*/
// require response modular handler
const responseHandler = require('./src/utils/responseHandler.js')
// Create
app.post('/users',(req,res)=>{
  UserModel.create(
    {...req.body.userData},
    (err,data)=>{responseHandler(res,err,data)}
  )
})

// base endpoint
app.route('/users/:id')
// Read
.get((req,res)=>{
  UserModel.findById(
    req.params.id,
    (err,data)=>{responseHandler(res,err,data)}
  )
})

// Update
.put((req,res)=>{
  UserModel.findByIdAndUpdate(
    req.params.id,
    {...req.body.userData},
    {
      new:true
    },
    (err,data)=>{responseHandler(res,err,data)}
  )
})

// Delete
.delete((req,res)=>{
  UserModel.findByIdAndDelete(
    req.params.id,
    (err,data)=>{responseHandler(res,err,data)}
  )
})



























const port = 8080;
app.listen(port,()=>{console.log(`Server Running at:${port}`.magenta);});
