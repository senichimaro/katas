# React & React Router Dom
This kata setup React environment and use URL navigation through React Router Dom.

Uses 7 modules of webpack to interpret and bundle js,jsx,css, images linking to html and make all necesary bundles to be render by the browser. Uses 3 modules of Babel to interact and parse js and node javascript to webpack. And uses three react modules to handle URL, the DOM and react itself.

## Webpack
It needs `webpack.config.js` to properly render and make the correct bundle. Even React Router Dom needs some configs to enable their rendering (entry, output and devServer objects).

#### Packages
~~~
npm i webpack webpack-cli webpack-dev-server html-webpack-plugin style-loader css-loader babel-loader
~~~

#### `webpack.config.js`
It's required two files to be created and prperly placed before this configurations run to prenvet fatal error.
* `./src/index.js` : there must be an index placed into src folder (a folder placed at root level)
* `./index.html` : index.html have to be placed in the location setted by 'htmlPlugin'

~~~
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlWebpackPlugin({
  'template':'./src/views/index.html'
  'filename':'./index.html'
})

module.exports = {
  entry:'index.js'
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'index_bundle.js',
    publicPath:'/'
  }
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



## Babel
Babel use 3 packages to handle react and nodejs javascript code and jsx from react, make it readable and let webpack parse it properly. It require it own config file too, called `.babelrc`

#### Packages
~~~
npm i @babel/core @babel/preset-env @babel/preset-react
~~~

#### `.babelrc`
This file is wrote in JSON format
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
    "@babel/preset-react"
  ]
}
~~~



# React & React Router Dom
React uses React Dom package to ease interact with the DOM, and use React Router Dom to handle navigation from URLs.

#### Packages
~~~
npm i react react-dom react-router-dom
~~~






# Bootstrap
  * Bootswatch
  * bootstrap-icons

~~~
// Import Bootstrap Icons
import "bootstrap-icons/font/bootstrap-icons.css";
// Import Bootswatch Stylesheet
import 'bootswatch/dist/lux/bootstrap.min.css';
// Import Bootstrap Bundle Js
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
~~~













//
