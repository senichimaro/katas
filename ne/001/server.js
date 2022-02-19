const express = require('express');
const app = express();

const colors = require('colors');
const path = require('path');

// express.urlencoded to access request values
app.use( express.urlencoded({extended:true}) );

// provide static assets
app.use( express.static(path.join(__dirname,'src')) );

// set 'view engine' and views path
app.set('view engine', 'ejs');
app.set('views', path.join('src', 'views') );


// let user_form_names = {
//   "user"
//   "host"
//   "email"
//   "pass"
//   "lang"
//   "stack"
//   "frame"
// }

// root
app.get(
  '/',
  (req,res)=>{
    res.render('index',{
      "route": req.url
    })
  }
)

// profile
app.post(
  '/profile',
  (req,res)=>{
    res.render('profile',{"route":req.url,...req.body})
  }
)


const port = 8080;
app.listen(
  port,
  console.log(`Server OK running at port: ${port}`.magenta)
);
