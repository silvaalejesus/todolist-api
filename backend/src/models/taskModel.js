// Aqui ficarao todas as função que irao interagir com o banco de dados

const connection = require('./connection');

// Vai listar todas as tasks que estao no banco de dados
const getAll = async () => {
  // a função getAll vai executar uma query la no banco de dados e vai fazer um select de todas as tasks da tabela de tasks e vai salvar na variavel tasks
  const [tasks] = await connection.execute('SELECT * FROM tasks');
  return tasks;
};

const createTask = async (task) => {
  const { title } = task;
  const dateUTC = new Date(Date.now()).toUTCString();
  // essa query cadastra uma task no banco de dados. cada interrogação representa um valor pras tasks
  const query = 'INSERT INTO tasks(title, status, created_at) VALUES (?, ?, ?)';
  const [createdTask] = await connection.execute(query, [title, 'pendente', dateUTC]);

  return { insertId: createdTask.insertId };
};

const deleteTask = async (id) => {
  const removedTask = await connection.execute('DELETE FROM tasks WHERE id = ?', [id]);
  return removedTask;
};

const updateTask = async (id, task) => {
  const { title, status } = task;

  const query = 'UPDATE tasks SET title= ?, status = ? WHERE id = ?';

  const updateTask = await connection.execute(query, [title, status, id]);
  return updateTask;
};

// exposta um objeto pq terao varias funççoes
module.exports = {
  getAll,
  createTask,
  deleteTask,
  updateTask
};