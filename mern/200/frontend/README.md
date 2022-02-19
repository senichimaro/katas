# React Front-End
This project set a CRUD logic based in javascript over NodeJs Back-End for Server service, React for UI and Front-End logic, Mongoose for interface the MongoDB database Engine.
This app will set two views:
* init view
* form view

## Packages
###### React
For this project will be based in react for it simplicity and fast development.

It uses react (core), react-dom to interact with the DOM and react-router-dom to handle URL navigation.
~~~
npm i react react-dom react-router-dom
~~~

###### Babel
Babel to interpret newest versions of javascript, NodeJs and React JSX.
~~~
npm i @babel/core @babel/preset-env @babel/preset-react
~~~

It uses their own config file called `.babelrc` where their features are set.
~~~
{
  "presets":[
    [
      "@babel/preset-env",
      {
        "targets":{
          "node":"current"
        }
      }
    ],
    "@babel/presets-react"
  ]
}
~~~

###### Webpack
Webpack is responsible to orchestrate and interprete libraries and different kinds of files, like html, stylesheets, images, javascript, jsx, and creates a hot reload development server. From this sources create a single project bundle them.
~~~~
npm i webpack webpack-cli webpack-dev-server html-webpack-plugin style-loader css-loader babel-loader
~~~~

It uses their own config file called `webpack.config.js` where their features are set.
~~~
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlWebpackPlugin({
  'template':'./src/index.html',
  'filename':'./index.html'
})

module.exports = {
  entry:'./src/index.js',
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'bundle_index.js',
    publicPath:'/'
  },
  module:{
    rules:[
      {
        test:/\.js$/,
        exclude:/node_modules/,
        use:['babel-loader']
      },
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
      },
      {
        test:/\.(png|jpe?g|gif|svg)$/i,
        type:'asset/resource'
      }
    ]
  },
  devServer:{
    historyApiFallback:true
  },
  plugins:[htmlPlugin]        
}
~~~


###### dotenv -> dotenv-webpack
**In _from scratch installation_ dotenv doesn't work alone, It require from another packages to work and extra configurations. The simpler way to use _environment variables_ is to use dotenv-webpack package that It only require to be initialized like a plugin in the webpack-config to work.**
Dotenv-webpack package allow us to NOT expose sensible data from hardcoding it, this allow to use .env file from where use url, passwords and other sensible data keeping it out of users scoop where they can't read it into server processes

Data is written into .env and called from process.env.REACT_APP_[VAR_NAME] and its use like a common variable.
~~~
npm i dotenv-webpack
~~~


###### UI
Bootswatch is a bootstrap style themes that provide all core functionalities. It doesn't come with js bootstrap files, to use modals and other components that need bootstrap bundle javascript the core bootstrap package is needed. Even some bootstrap widgets & components require JQuery. Icons will be handle with bootstrap-icons.
~~~
npm i bootswatch bootstrap jquery
~~~

###### AXIOS
Axios allow to properly make http requests
~~~
npm axios
~~~


## init view
This is the base route of the app, the user could visualize a list of objects if there is any or an empty list if there isn't objects.

The logic of this view get the objects from a database endpoint to receive an array of objects. The initial state of the logic is empty, without any object. Then, the get request is send to the endpoint. A loading animation is visible and ends when a respose is received. The result is shown to the user: a list of objects if there is any or a information string message that said there aren't objects.

* Empty
* GET request
* Loading animation
* Results

#### Elements of the view
The view has a section title a button to add objects and a list. Each row display basic info and has two buttons: edit and delete.
* Title
* Add Button
* List
* Each row edit & delete button


## form view
This view is the same for create and edit objects, it sends POST request to create a object and PUT request to edit a object. Receive a response of error & success, show a modal in case of error or success. In case of error show two buttons: edit or discard. In case of success show two buttons: new (add new object) or return (back to init view).

The are two key points in object creation or edition: the URL and object state. Creation and Edition has different URLs, creation receives an object state of null, edition must receive object id to be found their reference into database to be called and shown in the form fields. The object state sends a GET request for an object or not.

* object state : GET or null
* Form
* POST or PUT
* Modal success & error


#### Elements of the view
This view has a section title, a form that is used to add objects or edit them. When submit error & success messages are displayed in a popup modal with two buttons. Success modal: Close (Return to init view) & New (Return to blank form). Error: Edit (Return to form) & Discard (Return to init view).

* Title
* Form
* Modal Success & two buttons: Close & New
* Modal Error & two buttons: Edit & Discard









# Development
Between Back-End and Front-End setup there is a business logic that connects product with services to bring solutions. This logic interpret the user actions and play functionalities respond with data.

1. views
  - init view
  - form view
  - modal

2. http verbs
  - post
  - put

3. data render logic
  - object list
  - http create
  - http edit
  - http delete
  - http succes
  - http error
