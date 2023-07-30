const express = require('express');
const router = express.Router();

const usuarioController = require('../controllers/usuario');
const authMiddleware = require("../middlewares/auth");
const { validaUsuario, validaEndereco } = require("../middlewares/validacao");

router.get('/findAll', authMiddleware, usuarioController.findAllUsuarioController);
router.get('/find/:id', authMiddleware, usuarioController.findUsuarioByIdController);

router.post('/create', validaUsuario, usuarioController.createUsuarioController);
router.post('/addEndereco/:id', authMiddleware, validaEndereco, usuarioController.addUserEnderecoController);
router.post('/addProdutoFav/:id', authMiddleware, usuarioController.addUserFavProdutoController);

router.put('/update/:id',authMiddleware, validaEndereco, usuarioController.updateUsuarioController);

router.delete('/delete/:id', authMiddleware, usuarioController.deleteUsuarioController);
router.delete('/removeEndereco/', authMiddleware, usuarioController.removeUserEnderecoController);
router.delete('/removeProdutoFav/', authMiddleware, usuarioController.removeUserFavProdutoController);

module.exports = router;