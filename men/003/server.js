const colors = require('colors');
const path = require('path');

const bodyParser = require('body-parser');
const mongodb = require('mongodb');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

const UserModel = require('./model/UserModel.js')
mongoose.connect(
  'mongodb://localhost/userAPI',
  {useNewUrlParser:true,useUnifiedTopology:true}
);

// use express.urlencoded to parse incoming body or params request data
app.use( express.urlencoded({extended:true}) )
// use body-parser to parse incoming body or params request data
app.use( bodyParser.json() )

app.get('/',(req,res)=>res.json({"message":"Service Running"}));

/** # HTTP Endpoints / CRUD Actions
*/
const ResponseFunction = require('./utils/ResponseFunction.js');

// Create
app.post('/users',(req,res)=>{
  UserModel.create(
    {...req.body.userData},
    (err,data)=>{ResponseFunction(res,err,data)}
  )
});

/* base endpoint
*/
app.route('/users/:id')

// Read
.get((req,res)=>{
  UserModel.findById(
    req.params.id,
    (err,data)=>{ResponseFunction(res,err,data)}
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
    (err,data)=>{ResponseFunction(res,err,data)}
  )
})

// Delete
.delete((req,res)=>{
  UserModel.findByIdAndDelete(
    req.params.id,
    (err,data)=>{ResponseFunction(res,err,data)}
  )
})


// Get All Users
app.route('/db')
.get( async (req,res)=>{
  await UserModel.find(
    {},
    (err,data)=>{ResponseFunction(res,err,data)}
  )
})


const port = 8080;
app.listen(port,()=>{console.log(`Server Running at:${port}`.magenta)});
