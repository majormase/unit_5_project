const mongoose = require('mongoose');


const soundsSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
  comment: String
});

const Sounds = mongoose.model('Sounds', soundsSchema);

module.exports = Sounds;
