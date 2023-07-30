const express = require('express');
const router = express.Router();

const pedidoController = require('../controllers/pedido');
const authMiddleware = require("../middlewares/auth");
const { validaPedido } = require("../middlewares/validacao");

router.get('/findAll', authMiddleware, pedidoController.findAllPedidoController);
router.get('/find/:id', authMiddleware, pedidoController.findPedidoByIdController);
router.post('/create', authMiddleware, validaPedido, pedidoController.createPedidoController);
router.put('/update/:id', authMiddleware, validaPedido, pedidoController.updatePedidoController);
router.delete('/delete/:id', authMiddleware, pedidoController.deletePedidoController);

//atualiza status
module.exports = router;