const mysql = require('mysql2/promise');
require('dotenv').config();

const connection = mysql.createPool({
  // informações para acessar o banco de dados
  // usamos variaveis de ambiente para nao ficar exposto no git
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
});

module.exports = connection;