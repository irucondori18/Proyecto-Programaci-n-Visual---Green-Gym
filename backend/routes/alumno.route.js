//defino controlador para el manejo de CRUD
const alumnoCtrl = require('./../controllers/alumno.controller');
const autCtrl = require('./../controllers/auth.controller');

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de alumno

router.get('/', autCtrl.verifyToken, alumnoCtrl.getAlumnos);
router.get('/:id', autCtrl.verifyToken, alumnoCtrl.getAlumno);
router.post('/', autCtrl.verifyToken, alumnoCtrl.createAlumno);
router.put('/:id', autCtrl.verifyToken, alumnoCtrl.editAlumno);
router.delete('/:id', autCtrl.verifyToken, alumnoCtrl.deleteAlumno);

//PARA CREAR USUARIO
router.post('/:id/usuario', autCtrl.verifyToken, alumnoCtrl.createUsuario);
//router.put('/usuario/:id/editaruser', alumnoCtrl.editUsuario);
router.put('/:id/usuario/:idusuario', autCtrl.verifyToken, alumnoCtrl.editUsuario);
router.get('/buscar/:id', autCtrl.verifyToken, alumnoCtrl.getUsuarioPorAlumno);

router.post('/:id/asistencias', autCtrl.verifyToken, alumnoCtrl.addAsistencia);

router.post('/:id/rutinas', autCtrl.verifyToken, alumnoCtrl.addRutina);
router.get('/:id/rutinas/:idrutina', autCtrl.verifyToken, alumnoCtrl.getRutina);
router.delete('/:id/rutinas/:idrutina', autCtrl.verifyToken, alumnoCtrl.deleteRutina);
router.put('/:id/rutinas/:idrutina', autCtrl.verifyToken, alumnoCtrl.editRutina);

router.post('/:id/rutinas/:idrutina/ejercicios', autCtrl.verifyToken, alumnoCtrl.addEjercicioToRutina);
router.get('/:id/rutinas/:idrutina/ejercicios', autCtrl.verifyToken, alumnoCtrl.getEjercicios);
router.get('/:id/rutinas/:idrutina/ejercicios/:idejercicio', autCtrl.verifyToken, alumnoCtrl.getEjercicio);
router.put('/:id/rutinas/:idrutina/ejercicios/:idejercicio', autCtrl.verifyToken, alumnoCtrl.editEjercicio);
router.delete('/:id/rutinas/:idrutina/ejercicios/:idejercicio', autCtrl.verifyToken, alumnoCtrl.deleteEjercicio);

router.post('/:id/pagos', autCtrl.verifyToken, alumnoCtrl.addPago);

router.post('/:id/progresos', autCtrl.verifyToken, alumnoCtrl.addProgreso);
router.get('/:id/progresos/:idprogreso', autCtrl.verifyToken, alumnoCtrl.getProgreso);
router.delete('/:id/progresos/:idprogreso', autCtrl.verifyToken, alumnoCtrl.deleteProgreso);
router.put('/:id/progresos/:idprogreso', autCtrl.verifyToken, alumnoCtrl.editProgreso);

//ESTADISTICAS
router.get('/dni/:dni', autCtrl.verifyToken, alumnoCtrl.getAlumnoPorDNI);
router.get('/fechainicio/:fechainicio', autCtrl.verifyToken, alumnoCtrl.getAlumnosPorFechaInicio);
router.get('/plan/:plan', autCtrl.verifyToken, alumnoCtrl.getAlumnoPorPlan)

//PARA ALUMNOS
router.get('/:id/rutinas', autCtrl.verifyToken, alumnoCtrl.getRutinas);
router.get('/:id/asistencias', autCtrl.verifyToken, alumnoCtrl.getAsistencias);
router.get('/:id/pagos', autCtrl.verifyToken, alumnoCtrl.getPagos);
router.get('/:id/progresos', autCtrl.verifyToken, alumnoCtrl.getProgresos);
router.get('/usuario/:usuario', autCtrl.verifyToken, alumnoCtrl.getAlumnoPorUsuario);

//exportamos el modulo de rutas
module.exports = router;