const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let playerSchema = new Schema({
  name: { type: String },
  score: { type: Number }
})

module.exports = mongoose.model('Player', playerSchema)
