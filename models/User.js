var mongoose = require('mongoose');
var  User = mongoose.model('User',{
  name:String,
  email:String
});

module.exports = User;


