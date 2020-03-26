/**
 * Rota / Recurso
 */

/**
  * Métodos HTTP:
  * 
  * GET: Busca uma informação do Back-end.
  * Post: Cria uma informação no Back-end.
  * PUT: Alterar uma informação do Back-end.
  * DELETE: Deletar uma informação do Back-end.
  */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota após "?" Filtros/Paginação
  * Route Params: Parâmetros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

/**
   * SQL: MySQL, [SQLite], PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL (Node): [MongoDB], CouchDB, etc.
   */

/**
 * Abordagens de uso do Banco de Dados:
 *  Driver: SELECT * FROM users
 *  Query Builder: table('users).select('*').where()
 * 
 * Usaremos o modo Query Builder (modelo de programação javascript) pois será
 * mais fácil migrar do SQLit para outras SQL sem necessitar alterações.
 */


const express = require('express'); // '' importar pacote
const cors = require('cors');
const routes = require('./routes'); // './' importar arquivo

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes); // Importante este comando acontecer depois do app.use(express.json());

app.listen(3333); 
