const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { 
    type: String, 
    unique: true, 
    required: true,
    minlength: 5,
    maxlength: 255,
  }, 
  password: { 
    type: String, 
    required: true,
    minlength: 5,
    maxlength: 1024,
  }
});


const User = mongoose.model('User', userSchema); 

module.exports = User;

