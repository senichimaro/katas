const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlWebpackPlugin({
  'template':'./src/index.html',
  'filename':'./index.html'
})

// const NodePolyfillWebpackPlugin = require('node-polyfill-webpack-plugin')
// const nodePolyfill = new NodePolyfillWebpackPlugin();
const Dotenv = require('dotenv-webpack');
const newDotenv = new Dotenv()

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
  plugins:[
    htmlPlugin,
    // nodePolyfill,
    newDotenv
  ]
}
