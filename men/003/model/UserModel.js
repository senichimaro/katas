const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  user:{type:String},
  email:{type:String},
  password:{type:String}
});

module.exports = mongoose.model( 'UserModel', UserSchema );
