const mongoose = require('mongoose');

const booksSchema = mongoose.Schema({
  titulo: {
    type: String,
    required: true
  },
  autor: String,
  ano: String,
  genero: String,
  qualidade: { 
    type: Number,
    required: true
  },
  foto: {
    type: String,
  },
  disponibilidade: {
    type: Number,
    required: true
  },
  sinopse: String,
  isAvailable: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('Books', booksSchema);
