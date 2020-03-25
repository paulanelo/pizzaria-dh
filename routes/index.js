var express = require('express');
// const fetch = require("node-fetch");
var router = express.Router();
const PizzasController = require('../controllers/PizzasController');

// /* GET home page. */
// router.get('/', async function(req, res, next) {
//   // const pizzas = await fetch('http://www.mocky.io/v2/5e78fbc52d00009c7318ba17')
//   //   .then(res => res.json());
//   // console.log(pizzas)
//   res.render('index', { title: 'Express' });
// });

router.get('/', PizzasController.index);
router.get('/pizza/:id', PizzasController.show)
router.get('/pizza', PizzasController.showByName)

module.exports = router;
