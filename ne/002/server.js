const path = require('path');
const bodyParser = require('body-parser');
const colors = require('colors');
const express = require('express');
const app = express();

// use body parser to parse data into request
app.use( express.urlencoded({extended:true}) )
app.use( bodyParser.json() )
// use express.static to enable static assets
app.use( express.static(path.join('src')) )

// set view engine
app.set('view engine', 'ejs')
app.set('views', path.join('src','views'))

app.get('/',(req,res)=> res.render('index',{"message":"Service Running"}))

app.post('/profile',(req,res)=>{res.render('profile',{...req.body})})


const port = 8080;
app.listen(port,()=>{ console.log(`Server Running at:${port}`.magenta); })
