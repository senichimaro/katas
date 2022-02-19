const mongoose = require('mongoose');

const BlogPost = mongoose.Schema({
  title:{type:String, required:true},
  paragraph:{type:String, required:true},
  imgUrl:{type:String},
  tags:[{type:String}],
  keywords:[{type:String}],
})

BlogPost.methods.setImgUrl = function setImgUrl( url, filename ){
  this.imgUrl = `${url}/public/${filename}`
}

module.exports = mongoose.model( 'BlogPost', BlogPost )
