const carrinhoService = require('../services/carrinho');

const findAllCarrinhoController = async (req, res) => {
  try{
    res.send(await carrinhoService.findCarrinhoService());
  } catch (err) {
    res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde"});
    console.log(err.message);
  }
};

const findCarrinhoByIdController = async (req, res) => {
  try{
    res.send(await carrinhoService.findCarrinhoByIdService(req.params.id));
  } catch (err) {
    res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde"});
    console.log(err.message);
  }
};

const createCarrinhoController = async (req, res) => {
  try{
    const corpo = {
      ...req.body,
      userId: req.userId,
      createdAt: new Date(),
    }
    console.log(corpo);
    res.send(await carrinhoService.createCarrinhoService(corpo));
  } catch (err) {
    res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde"});
    console.log(err.message);
  }
};

const updateCarrinhoController = async (req, res) => {
  try{
    res.send(await carrinhoService.updateCarrinhoService(req.params.id, req.body));
  } catch (err) {
    res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde"});
    console.log(err.message);
  }
};

const deleteCarrinhoController = async (req, res) => {
  try{
    const del = await carrinhoService.deleteCarrinhoService(req.params.id);

    if(del != null ){
      res.status(200).send({ message: 'deletado com sucesso!' });
    }else{
      res.status(404).send({ message: 'Carrinho não encontrado para deletar' });
    }
  } catch (err) {
    res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde"});
    console.log(err.message);
  }
};

module.exports = {
    findAllCarrinhoController,
    findCarrinhoByIdController,
    createCarrinhoController,
    updateCarrinhoController,
    deleteCarrinhoController
};