# Express & NodeJs
This kata set an express server based in nodejs, serve ejs templates and handle forms that target data to HTTP endpoints.

To extract the form fields from body or params request, It's required to be parsed. It's used two methods here, the express method `express.urlencoded({extended:false})` and body-parser method `bodyParser.json()`.

In a regular flow _between forms and http endpoints_, express is enough to parse this data make it available.

In an API flow _directly sending and receiving data in http endpoints_, required parsing can't be done by express methods, It's require to be done with body-parser to make it available.

Declaring both methos together is to opt a bullet-proof desing from the base.

## Packages
* Main Packages
  * Express
  * Ejs
  * body-parser

* Secondary Packages
  * Nodemon
  * Colors
