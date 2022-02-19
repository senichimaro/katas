const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const path = require('path');
const colors = require('colors');



const mongoose = require('mongoose');

// mongodb connection
const UserModel = require('./model/user.js')
mongoose.connect(
  'mongodb://localhost/userProfile',
  {useNewUrlParser:true,useUnifiedTopology:true}
)

// Parse Body Request to JSON
app.use(bodyParser.json());
// get index route
app.get(
  '/',
  (req,res)=>{
    res.json({"message":"index"})
  }
)


const customResponse = require('./modules/customResponse');
/** # API routes
*/

// Create user
app.post('/user', (req,res)=>{
  UserModel.create(
    {...req.body.newUser},
    (err,data)=>{ customResponse(res,err,data) }
  )
})

/** Set HTTP verbs on base route
*/
// base route
app.route('/user/:id')

// Read user db
.get((req,res)=>{
  UserModel.findById(
    req.params.id,
    (err, data)=>{ customResponse(res,err,data) }
  )
})

// Update user
.put((req,res)=>{
  UserModel.findByIdAndUpdate(
    req.params.id,
    {...req.body.newUser},
    {
      new:true
    },
    (err,data)=>{ customResponse(res,err,data) }
  );
})

// Delete user
.delete((req,res)=>{
  UserModel.findByIdAndDelete(
    req.params.id,
    (err,data)=>{ customResponse(res,err,data) }
  )
})

const port = 8080;
app.listen(
  port,
  console.log(`Server Running at port:${port}`.magenta)
);
