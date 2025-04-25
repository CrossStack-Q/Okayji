const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  userId: { type: String, unique: true },
  password: String,
  userType: String
});
module.exports = mongoose.model('User', userSchema);
