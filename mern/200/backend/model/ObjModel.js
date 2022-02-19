const mongoose = require('mongoose')

const ObjModel = mongoose.Schema({
  title:{type:String},
  textarea:{type:String},
})


module.exports = mongoose.model('ObjModel', ObjModel)
