const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  user_name: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  first_name: {
    type: String,
    require: true
  },
  last_name: {
    type: String,
    require: true
  }
});

module.exports = new mongoose.model('user', userSchema);
