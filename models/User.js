const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    default: true,
  },
  avatarUrl: {
    type: String,
    default: ''
  },
  role: {
    type: String,
    default: 'member'
  }
});

module.exports = mongoose.model('users', userSchema);