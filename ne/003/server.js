const colors = require('colors');
const bodyParser = require('body-parser');
const path = require('path')
const express = require('express');
const app = express();

// use express.urlencoded to parse incoming data from request
app.use( express.urlencoded({extended:true}) );
// use body-parser to parse incoming data from request
app.use( bodyParser.json() );

// use static files
app.use( express.static( path.resolve(__dirname,'src','assets') ) );

// set view engine to ejs
app.set('view engine','ejs');
// set views path
app.set('views',path.join('src','views'))

// index
app.get('/',(req,res)=> res.render('index') );
// endpoint post : /profile
app.post('/profile',(req,res)=>{
  res.render('profile',{...req.body})
})

const port = 8080;
app.listen(port,()=>{console.log(`Server Running at:${port}`.magenta)});
