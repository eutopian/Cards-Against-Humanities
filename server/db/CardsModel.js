const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let newcardsSchema = new Schema({
    field1: {type: String, required: true},
    CardType: {type: String, required: true},
    CardInfo: {type: String, required: true},
    ResponseType: {type: String},
    Index: {type: String, required: true},
})

const newcards = mongoose.model('newcards', newcardsSchema);

module.exports = newcards;