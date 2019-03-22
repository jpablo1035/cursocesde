'use estrict'
let express = require('express');
//importo el controlador projects
let ProjectController = require('../Controller/ProjectController')
//metodo router express
let router = express.Router();
//se crea una ruta por get ('ruta a crear','motodo del ')
router.get('/home', ProjectController.home);
//se crea una nueva rutas
router.get('/test', ProjectController.test);
//se crea una nueva rutas
router.get('/inicio', ProjectController.test);
router.post('/saveproject', ProjectController.saveProject);

module.exports = router