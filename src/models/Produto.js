const mongoose = require("mongoose");

const ProdutoSchema = new mongoose.Schema({
  nome: { type: String, unique: true, required: true },
  descricao: { type: String, required: true },
  precoUni: { type: Number, required: true },
  imagem: { type: String, required: true },
  codigoBarra: { type: Number, required: true },
  categoria: [
    {
      _id:{ type: mongoose.Schema.Types.ObjectId, required: true, unique: true, ref: "categorias"},
      createdAt:{ type: Date, required: true}
    },
  ],
});

const Produto = mongoose.model("Produtos", ProdutoSchema);

module.exports = Produto;
