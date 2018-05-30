const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var CarroSchema   = new Schema({
    nome: String,
    nota: Number,
});

module.exports = mongoose.model('Carro', CarroSchema);