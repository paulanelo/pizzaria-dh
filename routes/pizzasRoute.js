const express = require('express');
const router = express.Router();
const PizzasController = require('../controllers/PizzasController');

router.get('/', PizzasController.index);

router.get('/:id', PizzasController.show)

module.exports = router;