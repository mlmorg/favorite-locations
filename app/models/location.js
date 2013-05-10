var mongoose = require('mongoose');

var Schema = mongoose.Schema({
  name: { type: String, default: '', trim: true },
  address: { type: String, trim: true, required: true },
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Location', Schema);
