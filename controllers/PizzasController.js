const pizzas = require('../database/pizzas.json');
// console.log(pizzas)
module.exports = {
  index: (req, res) => {
    res.render('index', { pizzas });
  },
  show: (req, res) => {
    const { id } = req.params
    const pizza = pizzas.find(pizza => pizza.id == id);
    return pizza ? res.render('pizza', { pizza }) : res.render('error', { id });
  },
  showByName: (req, res) => {
    const { busca } = req.query;
    const pizza = pizzas.find(pizza => pizza.nome.toLowerCase().indexOf(busca.toLowerCase()) !== -1);
    return pizza ? res.render('pizza', { pizza }) : res.render('error', { id });
  }
}

