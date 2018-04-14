const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let gameSchema = new Schema({
  players: [{ type: Schema.Types.ObjectId, ref: 'Player' }],
  cards: [{ type: Schema.Types.ObjectId, ref: 'newcards'}]
})

module.exports = mongoose.model('Game', gameSchema)
