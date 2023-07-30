const Produto = require("../models/Produto");

const findProdutoService = async () => {
  return await Produto.find();
};

const findProdutoByIdService = async (id) => {
  return await Produto.findById(id);
};

const createProdutoService = async (body) => {
  return await Produto.create(body);
};

const updateProdutoService = async (id, body) => {
  return await Produto.findByIdAndUpdate({ where: id }, body, { returnDocument: "after" });
};

const deleteProdutoService = async (id) => {
  return await Produto.findByIdAndRemove(id);
};

const addCategoriaProdutoService = (id,categoria) =>
  Produto.findOneAndUpdate(
    {
      _id: id,
    },
    {
      $push: {
        categoria:{
          _id: categoria._id,
          createdAt: categoria.createdAt
        }
      },
    },
    {
      rawResult: true,
    }
  );

const removeCategoriaProdutoService = (categoria) =>
  Produto.findOneAndUpdate(
    {
      _id: categoria.id,
    },
    {
      $pull: {
        categoria: {
          _id: categoria.idCategoria,
        },
      },
    },
    {
      rawResult: true,
    }
  );

module.exports = {
  findProdutoService,
  findProdutoByIdService,
  createProdutoService,
  updateProdutoService,
  deleteProdutoService,
  addCategoriaProdutoService,
  removeCategoriaProdutoService
};
