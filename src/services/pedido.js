const Pedido = require("../models/Pedido");

const findPedidoService = async () => {
  return await Pedido.find();
};

const findPedidoByIdService = async (id) => {
  return await Pedido.findById(id);
};

const createPedidoService = async (body) => {
  return await Pedido.create(body);
};

const updatePedidoService = async (id, body) => {
  return await Pedido.findByIdAndUpdate(id, body, { returnDocument: "after" });
};

const deletePedidoService = async (id) => {
  return await Pedido.findByIdAndRemove(id);
};

module.exports = {
  findPedidoService,
  findPedidoByIdService,
  createPedidoService,
  updatePedidoService,
  deletePedidoService
};
