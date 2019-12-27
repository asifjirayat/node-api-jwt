const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const environment = process.env.NODE_ENV;
const stage = require('./config')[environment];

//Schema
const Schema = mongoose.schema;

const userSchema = new Schema({
  name: {
    type: 'String',
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: 'String',
    required: true,
    trim: true
  }
});

module.exports = {
  mongoose.model('User', userSchema);
}
