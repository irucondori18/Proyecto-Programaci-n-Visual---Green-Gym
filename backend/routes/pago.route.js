//defino controlador para el manejo de CRUD
const pagoCtrl = require('./../controllers/pago.controller');
const autCtrl = require('./../controllers/auth.controller');

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de alumno

router.get('/', autCtrl.verifyToken, pagoCtrl.getAllPagos);
router.get('/:fechapago', autCtrl.verifyToken, pagoCtrl.getPagosPorFecha)
router.get('/pagos/:idpago', autCtrl.verifyToken, pagoCtrl.getPago);
router.put('/pagos/:idpago', autCtrl.verifyToken, pagoCtrl.editPago);
router.delete('/:idpago', autCtrl.verifyToken, pagoCtrl.deletePago);

//exportamos el modulo de rutas
module.exports = router;