const express = require('express');
const tasksController = require('./controllers/tasksController');
const tasksMiddleware = require('./middlewares/tasksMiddlewares');
const router = express.Router();

// DEFININDO AS ROTAS DO SERVIDOR
// O primeiro parametro da função get é a rota. o segundo parametro é um middleware que será passado uma função anonima
// a função anonima ira receber um request e um response. response envia uma resposta para o client. 
// router.get('/', (request, response) => response.status(200).send('ola teste'));


router.get('/tasks', tasksController.getAll);
router.post('/tasks', tasksMiddleware.validateFildsTitle, tasksController.createTask);
router.delete('/tasks/:id', tasksController.deleteTask);
router.put('/tasks/:id', tasksMiddleware.validateFildsTitle, tasksMiddleware.validateFildsStatus, tasksController.updateTask);

module.exports = router;

