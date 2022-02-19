require('dotenv').config();
const path = require('path')
const colors = require('colors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const express = require('express')
const app = express();

const UserModel = require('./model/UserModel')
mongoose.connect(
  'mongodb://localhost/userCRUD',
  {useNewUrlParser:true, useUnifiedTopology:true}
)

const DatabaseResponse = require('./utils/DatabaseResponse')

// app.use( bodyParser.urlencoded({extended:true}) )
app.use( express.urlencoded({extended:true}) )
app.use( bodyParser.json() )

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'src','views'))

app.get('/',(req,res)=>res.render('index',{"message":"service run"}))
app.post('/profile',(req,res)=> {
  console.log("req.body",req.body);
  UserModel.create(
    {...req.body},
    (err,data)=>{DatabaseResponse(res,err,data,'profile')}
  )
})

app.get('/users',(req,res)=>{
  UserModel.find(
    {},
    (err,data)=>{DatabaseResponse(res,err,data,'cards')}
    // (err,data)=>{res.json({data:data})}
  )
})

const port = process.env.PORT || 3000;
app.listen(port,()=>console.log(`server run at:${port}`.magenta))
