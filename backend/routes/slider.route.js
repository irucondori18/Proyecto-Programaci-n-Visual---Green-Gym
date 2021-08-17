//defino controlador para el manejo de CRUD
const sliderCtrl = require('./../controllers/slider.controller');
const autCtrl = require('./../controllers/auth.controller');

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de alumno
router.get('/', sliderCtrl.getSliders);
router.get('/:id', autCtrl.verifyToken, sliderCtrl.getSlider);
router.post('/', autCtrl.verifyToken, sliderCtrl.addSlider);
router.delete('/:id', autCtrl.verifyToken, sliderCtrl.deleteSlider);
router.put('/:id', autCtrl.verifyToken, sliderCtrl.editSlider);

//exportamos el modulo de rutas
module.exports = router;