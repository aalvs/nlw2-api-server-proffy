// http://localhost:3333/users - (Rota == 3333), (Recursos == /users)

/* Métodos
   GET: Busca ou lista uma informação
   POST: Cria alguma nova informação
   PUT: Atualiza uma informação existente
   DELETE: Deleta uma informação
*/

/* Parâmetros
   Corpo (Request Body) : Dados para criação ou atualização de um registro
   Route Params: Identifica qual recurso eu quero atualizar ou deletar
   Query Params: Paginação, filtros, ordenação
*/

import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);

