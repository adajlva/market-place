const pedidoService = require('../services/pedido');

const findAllPedidoController = async (req, res) => {
  try{
    res.send(await pedidoService.findPedidoService());
  } catch (err) {
    res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde"});
    console.log(err.message);
  }
};

const findPedidoByIdController = async (req, res) => {
  try{
    res.send(await pedidoService.findPedidoByIdService(req.params.id));
  } catch (err) {
    res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde"});
    console.log(err.message);
  }
};

const createPedidoController = async (req, res) => {
  try{
    const corpo = {
      ...req.body,
      userId: req.userId,
      createdAt: new Date(),
    }
    res.send(await pedidoService.createPedidoService(corpo));
  } catch (err) {
    res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde"});
    console.log(err.message);
  }
};

const updatePedidoController = async (req, res) => {
  try{
    res.send(await pedidoService.updatePedidoService(req.params.id, req.body));
  } catch (err) {
    res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde"});
    console.log(err.message);
  }
};

const deletePedidoController = async (req, res) => {
  try{
    const del = await pedidoService.deletePedidoService(req.params.id);

    if(del != null ){
      res.status(200).send({ message: 'deletado com sucesso!' });
    }else{
      res.status(404).send({ message: 'Pedido não encontrado para deletar' });
    }
  } catch (err) {
    res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde"});
    console.log(err.message);
  }
};

module.exports = {
    findAllPedidoController,
    findPedidoByIdController,
    createPedidoController,
    updatePedidoController,
    deletePedidoController
};