const alumno = require('../models/alumno');
const Usuario = require('../models/usuario')
//importamos el manejador de token
const jwt = require('jsonwebtoken');
const usuarioCtrl = {}

//Create Usuario
usuarioCtrl.createUsuario = async (req, res) => {
  var usuario = new Usuario(req.body);
  try {
    await usuario.save();
    res.json({
      'status': '1',
      'msg': 'Usuario AGREGADO'
    })
  } catch (error) {
    res.json({
      'status': '0',
      'msg': 'Error guardando Usuario.'
    })
  }
}

//Modificacion de usuario
usuarioCtrl.editUsuario = async (req, res) => {
  const usuario = new Usuario(req.body);
  try {
    await Usuario.updateOne({ _id: req.body._id }, usuario);
    res.json({
      'status': '1',
      'msg': 'Usuario ACTUALIZADO'
    })
  } catch (error) {
    res.json({
      'status': '0',
      'msg': 'Error actualizando el usuario'
    })
  }
}

//Baja de usuario
usuarioCtrl.deleteUsuario = async (req, res) => {
  try {
    await Usuario.deleteOne({ _id: req.params.id });
    res.json({
      status: '1',
      msg: 'Usuario ELIMINADO'
    })
  } catch (error) {
    res.json({
      'status': '0',
      'msg': 'Error eliminando el usuario'
    })
  }
}

//Pregunta si ya existe el nombre de usuario
usuarioCtrl.getUsuario = async (req, res) => {
  var usuarios = await Usuario.find({usuario : req.body.usuario});
  if (usuarios != ""){ 
    existe = true;
  }else
  {
    existe = false;
  }
  res.json(existe);
}

usuarioCtrl.getUserEspecifico = async (req, res) => {
  const usuario = await Usuario.findById(req.params.id);
  res.json(usuario);
}

usuarioCtrl.loginUsuario = async (req, res) => {
  //en req.body se espera que vengan las credenciales de login
  //defino los criterios de busqueda en base al username y password recibidos
  const criteria = {
    usuario: req.body.username,
    password: req.body.password
  }
  //el método findOne retorna un objeto que cumpla con los criterios de busqueda
  Usuario.findOne(criteria, function (err, user) {
    //el método findOne retorna un objeto que cumpla con los criterios de busqueda
    if (err) {
      res.json({
        status: 0,
        msg: 'error'
      })
    };
    if (!user) {
      res.json({
        status: 0,
        msg: "not found"
      })
    } else {
      //preparo un token para ser enviado en caso de login correcto
      const unToken = jwt.sign({id: user._id}, "secretkey");
      res.json({
        status: 1,
        msg: "success",
        usuario: user.usuario,
        perfil: user.perfil,
        //algo asi seria pero no se como
        user_id:user._id,
        token: unToken
      });
    }
  })
}
//exportacion del modulo controlador
module.exports = usuarioCtrl;