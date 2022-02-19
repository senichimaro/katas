# MERN Proyect
This is the first kata about a MERN CRUD without login & authorization. It consist of one page web app where to create, read, update and delete products. It will use Bulma React Framework to a plaine UI/UX.

# Packages
* MongoDB interfaced by Mongoose
* Express Web Server Framework
* React Framework
* NodeJs based
* Bulma


# Proyect Structure
~~~
/project
|
|_/back-end/
|   |__/controllers
|   |   |_productControllers.js
|   |__/db
|   |   |_mongodb.js
|   |__/libs
|   |   |_storage.js
|   |__/models
|   |   |_Products.js
|   |__/routes
|   |   |_products.js
|   |__/storage
|   |   |_/images
|   |
|   |_app.js
|   |_config.js
|   |_server.js
|   |_.env
|   |_package.json
|

~~~




# 1. Server with Express
Let's isolate all our Back-End configuration in a folder called `/backEnd`. We'll initiate npm (`npm init -y` > `package.json`) to registered our dependencies.

Let's create a `server.js` where to build our server, a `.env` file to save our port, and a `config.js`.

This file will be an object and will be our first module to export, keeping all our config variables together to use their properties when necesary.

## Packages
* express : server framework
* standard : tests
* nodemon : hot reload
* dotenv : .dontenv accessible



# 2. Mongoose to interface MongoDB
Let's isolate all our database configuration in a folder called `/db`, and `mongodb.js` file to connect with MongoDB.

The connection will be an async function a module to export that extract the data it needs from an database object.

The operational model will be configured in their own `Products.js` file where we set the Schema for this project that it will be an exportable module.

###### Important
In our connection to MongoDB we use the Default Port (27017), this is not recommended in Production because its a well known default port that expose our database to a vulnerability.

## Error Handling
* connection errors:

Let's define an async function to initialize our server and enclose our database connection and server initialization intro a try/catch block.

The connections made into this function shall not take thier parameters from global scope, because if we test our function alone it will fail. To solve this, those global parameters are introduced like function parameters, and then transfered to connections when we called.
~~~
async function initApp(appConfig, dbConfig){
  try {
    connectDb(dbConfig);
    app.listen( appConfig.port, ()=>console.log(`listen on: ${appConfig.port}`))
  }
  catch(err){
    console.error(`error in connection : ${err}`);
    process.exit(0)
  }
}
initApp(appConfig,dbConfig)
~~~


## Packages
* mongoose : MongoDB framework





# 3. Enpoints Routes
Endpoints targets CRUD actions against database, we will register our routes. We gonna create a folder `/routes` and a file called `products.js` to isolate endpoints.

This isolation drive server initialization isolation, where we setup our server calling express and app instantiation, now we will isolate this part in a `app.js` file in root folder to gather routes endpoints together for a single purpose principle. This let us handle app initialization and routes configuration in a so much cleaner and simple design.

We will use the `Router` class from express to set a modular endpoint. This allow us to endpoint isolation, setting all the required endpoints for an URL, keeping it our design clean, easy to understand and exportable.

~~~
/v1
|  |_/ (/v1)
|  |_/create (/v1/create)
|  |_/read (/v1/read)
|  |_/put (/v1/update)
|  |_/delete (/v1/delete)
~~~


###### From Express Documentation - express.Router :
Use the [express.Router](https://expressjs.com/en/guide/routing.html) class **to create modular, mountable route handlers**. A Router instance is a complete middleware and routing system; for this reason, **it is often referred to as a "mini-app"**.

The following example creates a router as a module, loads a middleware function in it, defines some routes, and mounts the router module on a path in the main app.

Create a router file named birds.js in the app directory, with the following content:

~~~
var express = require('express')
var router = express.Router()

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/', function (req, res) {
  res.send('Birds home page')
})
// define the about route
router.get('/about', function (req, res) {
  res.send('About birds')
})

module.exports = router
Then, load the router module in the app:

var birds = require('./birds')

// ...

app.use('/birds', birds)
~~~

The app will now be able to handle requests to /birds and /birds/about, as well as call the timeLog middleware function that is specific to the route.



## Controllers
We'll create a `productControllers.js` to isolate all the functions that will handle the request & response cycle, getting a clear and cleaner modularization of our route middlewares.

This module will export an object carring all our defined functions.





## Packages
* body-parser : Parse incoming body & params request from fields forms




# Images : Uploading Locally
Each product will have an image, this images will be save locally in a `./storage/images` folder. The handler will upload and keep their path in our project and transform this into a valid url to the image be displayed.

This process is made by Multer: an image uploader. Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files.

Library functionality will be isolated in their own `/libs` folder, and multer storage functionality in their own `storage.js` file.

This functionality will be called from our routes file, because images like any other field will come within a request & response cycle.

#### Mongoose
Meanwhile Multer provide logic uploading, mongoose provide the option to set our custom methods to save image path and urls into database. This way we'll have an object that carries all the data need to render a product.

#### App config
This images will be accesible from `/public` path with `app.use('/public',express.static(${__dirname}/storage/imgs))`



## Packages
* Multer : Image Upload handler






# Back-End resume
Back-End development follows a simple configuration:
* create the server
* set the endpoints
* connect DB and set the Model
* define response functions

Main difference is the isolation for single purpose. This way the server has just the initialization logic. Config for app has the express instantiation and the Router that modularize all the route endpoints isolately. Endpoints routes initialize Router and hang from its urls and methods that controls responses. Into each of these response controller functions is defined the logic needed to resolve each of the petitions.

* server.js
* app.js
* products.js (/routes)
* productControllers.js (/controllers)


Around this main logic there are database connection and model, image uploader logic and library plus the storage folder, .env and config files.

* ./db/mongodb.js
* ./models/Product.js
* ./lib/storage.js
* ./storage/images
* .env
* config.js








# 1. React : The Front-End
We'll use `create-react-app` to fast development.


# Packages
* cors : allow to request resources from a different origin or port















































//
