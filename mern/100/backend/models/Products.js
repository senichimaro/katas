const mongoose = require('mongoose')


const Schema = mongoose.Schema;

const ProductsSchema = Schema({
  name:{type:String},
  size:{type:String},
  unitaryPrice:{type:String},
  imgUrl:{type:String},
  description:{type:String},
},{
  timestamps:true
})

ProductsSchema.methods.setImgUrl = function setImgUrl(url,filename){
  this.imgUrl = `${url}/public/${filename}`
}

module.exports = mongoose.model("Products",ProductsSchema)
