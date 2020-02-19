const express = require('express');

// Criando o app
const app = express();

// Importando o arquivo de rotas
const pizzasRoutes = require('./routes/pizzasRoute');

// Associando as rotas
app.use('/pizzas', pizzasRoutes)

app.listen(3000);