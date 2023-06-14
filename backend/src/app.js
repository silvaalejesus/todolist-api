const express = require('express');
const router = require('./router');

const app = express();

app.use(express.json());
// aqui diz que é pro arquivo app usar sempre o router. Entao toda requisição que aocntecer na aplicação vai cair no router
app.use(router);

module.exports = app;