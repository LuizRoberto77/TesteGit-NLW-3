import express from 'express';
import 'express-async-errors';
import '../src/database/connection';
import routes from './routes';

import cors from 'cors';

import path from 'path'
import errorhandler from './errors/handler'


const app = express();

app.use(cors());

app.use(express .json());

app.use(routes);


app.use('/uploads',express.static(path.join(__dirname,'..','uploads')));
app.use(errorhandler);

app.listen(3333);
//Rota = conjunto
//Recurso = usuário

//Métodos HTTP = GET , POST, PUT, DELETE
//Parâmetros 

//GET = buscar Informação(Lista ,item)
//POST = criando Informação
//PUT = Editar Informação
//DELETE = deletar Informação

//Query Params:http:/localhost:3333/users?search=Roberto
//Route Params:http:/localhost:3333/users/1 (Identificar um recurso)    
//Body :http:/localhost:3333/users (Identificar um recurso)    




//Drive nativo, Query builder, ORM