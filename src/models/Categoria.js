const mongoose = require('mongoose');

const CategoriaSchema = new mongoose.Schema({
  nome: { type: String, unique: true, required: true },
});

const Categoria = mongoose.model('Categorias', CategoriaSchema);

module.exports = Categoria;