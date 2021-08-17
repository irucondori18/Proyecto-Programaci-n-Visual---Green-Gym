//defino controlador para el manejo de CRUD
const usuarioCtrl = require('../controllers/usuario.controller');

const express = require("express");
const router = express.Router();

// definiendo rutas
router.post('/', usuarioCtrl.createUsuario);
router.post('/nombre', usuarioCtrl.getUsuario);
router.post('/login', usuarioCtrl.loginUsuario);
router.get('/:id', usuarioCtrl.getUserEspecifico);
router.put('/edit/:id', usuarioCtrl.editUsuario);
router.delete('/:id', usuarioCtrl.deleteUsuario);

//exportacion del modulo de rutas
module.exports = router;