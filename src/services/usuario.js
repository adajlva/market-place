const Usuario = require("../models/Usuario");

const findUsuarioService = () => {
  return Usuario.find();
};

const findUsuarioByIdService = (id) => {
  return Usuario.findById(id);
};

const createUsuarioService = async (body) => {
  return await Usuario.create(body);
};

const updateUsuarioService = async (id, body) => {
  const corpo =  await Usuario.findByIdAndUpdate(id, body, { returnDocument: "after" });
  //arrumar senha
  return corpo;
};

const deleteUsuarioService = async (id) => {
  return Usuario.findByIdAndRemove(id);
};

const addUserEnderecoService = (id, endereco) =>
  Usuario.findOneAndUpdate(
    {
      _id: id,
    },
    {
      $push: {
        enderecos: endereco,
      },
    },
    {
      rawResult: true,
    }
  );

const removeUserEnderecoService = (id, idEndereco) =>
  Usuario.findOneAndUpdate(
    {
      _id: id,
    },
    {
      $pull: {
        enderecos: {
          _id: idEndereco,
        },
      },
    },
    {
      rawResult: true,
    }
  );

const addUserFavProdutoService = (id,produto) =>
  Usuario.findOneAndUpdate(
    {
      _id: id,
    },
    {
      $push: {
        produtos_fav:{
          _id: produto._id,
          createdAt: produto.createdAt
        }
      },
    },
    {
      rawResult: true,
    }
  );

const removeUserFavProdutoService = (produto) =>
  Usuario.findOneAndUpdate(
    {
      _id: produto.id,
    },
    {
      $pull: {
        produtos_fav: {
          _id: produto.idProduto,
        },
      },
    },
    {
      rawResult: true,
    }
  );

module.exports = {
  findUsuarioService,
  findUsuarioByIdService,
  createUsuarioService,
  updateUsuarioService,
  deleteUsuarioService,
  addUserEnderecoService,
  removeUserEnderecoService,
  addUserFavProdutoService,
  removeUserFavProdutoService
};
