const Categoria = require("../models/Categoria");

const findCategoriaService = async () => {
  return await Categoria.find();
};

const findCategoriaByIdService = async (id) => {
  return await Categoria.findById(id);
};

const createCategoriaService = async (body) => {
  return await Categoria.create(body);
};

const updateCategoriaService = async (id, body) => {
  return await Categoria.findByIdAndUpdate(id , body, { returnDocument: "after" });
};

const deleteCategoriaService = async (id) => {
  return await Categoria.findByIdAndRemove(id);
};

module.exports = {
  findCategoriaService,
  findCategoriaByIdService,
  createCategoriaService,
  updateCategoriaService,
  deleteCategoriaService
};
