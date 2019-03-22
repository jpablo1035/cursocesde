'use strict'

//importan bibliotecas para el manejo de peticiones http y archivos json
let express = require('express')
let bodyParse = require('body-parser');
let app = express();
//cargar archivos de rutas
let projectsroutes = require('./routes/projectsroutes');


app.use(express.json());

//ruta
app.use('/api', projectsroutes);
module.exports = app;