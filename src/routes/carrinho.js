const express = require('express');
const router = express.Router();

const carrinhoController = require('../controllers/carrinho');
const authMiddleware = require("../middlewares/auth");

const {  validaCarrinho } = require("../middlewares/validacao");

router.get('/findAll', authMiddleware, carrinhoController.findAllCarrinhoController);
router.get('/find/:id', authMiddleware, carrinhoController.findCarrinhoByIdController);
router.post('/create', authMiddleware, validaCarrinho, carrinhoController.createCarrinhoController);
router.put('/update/:id', authMiddleware, validaCarrinho, carrinhoController.updateCarrinhoController);
router.delete('/delete/:id', authMiddleware, carrinhoController.deleteCarrinhoController);

module.exports = router;