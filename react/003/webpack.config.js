const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlWebpackPlugin({
  'template':'./src/views/index.html',
  'filename':'./index.html'
})

module.exports = {
  entry:'./src/index.js',
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'index_bundle.js',
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
