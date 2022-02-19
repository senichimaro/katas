const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  user: {type: String},
  host: {type: String},
  email: {type: String},
  pass: {type: String}
})

module.exports = mongoose.model( 'UserProfile', UserSchema );
