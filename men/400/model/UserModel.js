const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  user:{type:String},
  host:{type:String},
  email:{type:String},
  pass:{type:String},
  lang:{type:String},
  framework:{type:String},
  stackNodeJs:{type:String},
  stackPython:{type:String},
  stackPHP:{type:String}
})

module.exports = mongoose.model('UserModel', UserSchema)
