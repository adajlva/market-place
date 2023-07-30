const categoriaService = require('../services/categoria');

const findAllCategoriaController = async (req, res) => {
  try{
    res.send(await categoriaService.findCategoriaService());
  } catch (err) {
    res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde"});
    console.log(err.message);
  }
};

const findCategoriaByIdController = async (req, res) => {
  try{
    res.send(await categoriaService.findCategoriaByIdService(req.params.id));
  } catch (err) {
    res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde"});
    console.log(err.message);
  }
};

const createCategoriaController = async (req, res) => {
  try{
    const corpo = {
      ...req.body,
      createdAt: new Date(),
    }
    res.send(await categoriaService.createCategoriaService(corpo));
  } catch (err) {
    res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde"});
    console.log(err.message);
  }
};

const updateCategoriaController = async (req, res) => {
  try{
    res.send(await categoriaService.updateCategoriaService(req.params.id, req.body));
  } catch (err) {
    res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde"});
    console.log(err.message);
  }
};

const deleteCategoriaController = async (req, res) => {
  try{
    const del = await categoriaService.deleteCategoriaService(req.params.id);

    if(del != null ){
      res.status(200).send({ message: 'deletado com sucesso!' });
    }else{
      res.status(404).send({ message: 'Categoria não encontrado para deletar' });
    }
  } catch (err) {
    res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde"});
    console.log(err.message);
  }
};

module.exports = {
    findAllCategoriaController,
    findCategoriaByIdController,
    createCategoriaController,
    updateCategoriaController,
    deleteCategoriaController
};