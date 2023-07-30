const Carrinho = require("../models/Carrinho");

const findCarrinhoService = async () => {
  return await Carrinho.find();
};

const findCarrinhoByIdService = async (id) => {
  return await Carrinho.findById(id);
};

const createCarrinhoService = async (body) => {
  return await Carrinho.create(body);
};

const updateCarrinhoService = async (id, body) => {
  return await Carrinho.findByIdAndUpdate(id, body, { returnDocument: "after" });
};

const deleteCarrinhoService = async (id) => {
  return await Carrinho.findByIdAndRemove(id);
};

module.exports = {
  findCarrinhoService,
  findCarrinhoByIdService,
  createCarrinhoService,
  updateCarrinhoService,
  deleteCarrinhoService
};
