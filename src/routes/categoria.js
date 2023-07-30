const express = require('express');
const router = express.Router();

const categoriaController = require('../controllers/categoria');
const authMiddleware = require("../middlewares/auth");
const {  validaCategoria } = require("../middlewares/validacao");

router.get('/findAll', authMiddleware, categoriaController.findAllCategoriaController);
router.get('/find/:id', authMiddleware, categoriaController.findCategoriaByIdController);
router.post('/create', authMiddleware, validaCategoria, categoriaController.createCategoriaController);
router.put('/update/:id', authMiddleware,  validaCategoria, categoriaController.updateCategoriaController);
router.delete('/delete/:id', authMiddleware, categoriaController.deleteCategoriaController);

module.exports = router;