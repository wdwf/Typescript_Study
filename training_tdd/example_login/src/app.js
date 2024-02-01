require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

const express = require('express');

/* É dividido as funçoes (executar a aplicação, e ouvir a porta) para que seja possivel 
executar os testes sem precisar alocar a porta 3000 ... é desejado que em quanto estiver
rodando os testes não se alocque porta e que rode os testes direto dentro da aplicação, sem
precisar colocar o servior online.
*/

class AppController {
  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    this.express.use(require('./routes'));
  }
}

module.exports = new AppController().express;
