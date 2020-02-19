const pizzas = [
    {
        nome: 'Pepperoni', ingredientes: [
            'mussarela',
            'pepperoni'
        ]
    },
    {
        nome: 'Marguerita', ingredientes: [
            'mussarela',
            'toma',
            'manjericão'
        ]
    },
]

const PizzasController = {
    index: (req, res) => {
        res.send(pizzas);
    },

    show: (req, res) => {
        const { id } = req.params;
        res.send(pizzas[id] || { error: "404 - Not Found"})
    }
};

module.exports = PizzasController;