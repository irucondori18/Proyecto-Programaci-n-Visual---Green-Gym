//defino controlador para el manejo de CRUD
const asistenciaCtrl = require('./../controllers/asistencia.controller');
const autCtrl = require('./../controllers/auth.controller');


//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de alumno

router.get('/', autCtrl.verifyToken, asistenciaCtrl.getAllAsistencias);
router.get('/:fecha', autCtrl.verifyToken, asistenciaCtrl.getAsistenciasPorFecha)
router.get('/asistencias/:idasistencia', autCtrl.verifyToken, asistenciaCtrl.getAsistencia);
router.put('/asistencias/:idasistencia', autCtrl.verifyToken, asistenciaCtrl.editAsistencia);
router.delete('/:idasistencia', autCtrl.verifyToken, asistenciaCtrl.deleteAsistencia);

//exportamos el modulo de rutas
module.exports = router;