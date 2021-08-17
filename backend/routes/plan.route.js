//defino controlador para el manejo de CRUD
const planCtrl = require('./../controllers/plan.controller');
const autCtrl = require('./../controllers/auth.controller');

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de alumno

router.get('/', planCtrl.getPlanes);
router.get('/:id', autCtrl.verifyToken, planCtrl.getPlan);
router.post('/', autCtrl.verifyToken, planCtrl.createPlan);
router.get('/:tipo', autCtrl.verifyToken, planCtrl.getIDporTipo);
router.delete('/:id', autCtrl.verifyToken, planCtrl.deletePlan);
router.put('/:id', autCtrl.verifyToken, planCtrl.editPlan);

//exportamos el modulo de rutas
module.exports = router;