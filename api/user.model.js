const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for users
let User = new Schema({
  user_name: {
    type: String
  },
  gender_name: {
    type: String
  }
},{
    collection: 'users'
});

module.exports = mongoose.model('User', User);