# React Kata
This kata setup a basic react skeleton and setup react-router-dom to use routes.

It's a long configuration that involves 8 modules of webpack and it configuration file (webpack.config.js), 3 modules of babel and it confiration file (.babelrc), and 3 react modules.

## Configuration (13 modules & 2 config files)
Webpack uses 7 modules to render jsx, jsE6, css, and html output.
~~~
npm i webpack webpack-cli webpack-dev-server html-webpack-plugin style-loader css-loader babel-loader
~~~

Babel uses 3 modules to render jsx & jsE6
~~~
npm i @babel/core @babel/preset-env @babel/preset-react
~~~

React uses 3 modules to render jsx, dom elements & routes.
~~~
npm i react react-dom react-router-dom
~~~

#### webpack.config.js
~~~
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlWebpackPlugin({
  template: './src/views/index.html',
  filename: './index.html'
});

{
  modules: {
    entry:'./src/index.js',
    output:{
      path: path.resolve(__dirname,'dist')
      filename:'index_bundle.js',
      publicPath:'/'
      },
    rules: [
      {
        test:/\.js$/,
        exclude:/node_modules/,
        use: ['babel-loader']
      },
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
      },
      {
        test:/\.(png|jpe?g|gif)$/i,
        type:'asset/resource'
      }
    ]
  },
  devServer:{
    historyApiFallback:true
  },
  plugins: [htmlPlugin]
}
~~~

#### Nested Routes
Simple routes like `/contact` needs devServer config. Nested routes needs that and `entry` & `output` config.


#### .babelrc
~~~
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets":{
          "node":"current"
        }
      }
    ]
    "@babel/preset-react"
  ]
}
~~~



## Packages
* Webpack
  * webpack
  * webpack-cli
  * webpack-dev-server
  * html-webpack-plugin
  * style-loader
  * css-loader
  * babel-loader

* Babel
  * @babel/core
  * @babel/preset-env
  * @babel/preset-react

* React
  * react
  * react-dom
  * react-router-dom
