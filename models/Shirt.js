var mongoose = require('mongoose');

var shirtSchema = new mongoose.Schema({
  title: { type: String, unique: true, lowercase: true },
});

module.exports = mongoose.model('Shirt', userSchema);
