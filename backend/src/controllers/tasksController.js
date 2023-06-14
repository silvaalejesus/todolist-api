// a camada de controlles vai salvar as funções que serao usadas no router
const tasksModel = require('../models/taskModel');

const getAll = async (_request, response) => {
  // No arquivo model já existe uma função que busca todas as tasks no banco de dados
  // essa varial tasks ira armazenar o retorno da função getAll que fica no model
  const tasks = await tasksModel.getAll();

  // aqui precisa enviar o array com todas as tasks
  // aqui esta sendo enviado a varial tasks como resposta para o client
  return response.status(200).json(tasks);
};

const createTask = async (request, response) => {
  const createdTask = await tasksModel.createTask(request.body);
  return response.status(201).json(createdTask);
};

const deleteTask = async (request, response) => {
  const { id } = request.params;
  await tasksModel.deleteTask(id);

  return response.status(204).json();
};

const updateTask = async (request, response) => {
  const { id } = request.params;

  await tasksModel.updateTask(id, request.body);
  return response.status(204).json();
};

module.exports = { getAll, createTask, deleteTask, updateTask };