const app = require('./app');
require('dotenv').config;

const PORT = process.env.PORT || 3333;

// define a porta que o servidor ficara escutando (aguardando requisições) e o segundo parametro recebe uma função de callback que sera executada quando o servidor estiver rodando
app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
