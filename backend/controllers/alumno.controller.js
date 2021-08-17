const Alumno = require('../models/alumno');
const Asistencia = require('../models/asistencia');
const Progreso = require('../models/progreso');
const Rutina = require('../models/rutina');
const Ejercicio = require("../models/ejercicio");
const Pago = require("../models/pago");
const Usuario = require('../models/usuario');
const alumnoCtrl = {}

//Obtener todos los alumnos
alumnoCtrl.getAlumnos = async (req, res) => {
  var alumnos = await Alumno.find().populate("pagos").populate("plan").populate("asistencias");
  res.json(alumnos);
}

//Obtener alumno
alumnoCtrl.getAlumno = async (req, res) => {
  const alumno = await Alumno.findById(req.params.id).populate("asistencias").populate("pagos").populate("usuario");
  res.json(alumno);
}

//Alta de alumno
alumnoCtrl.createAlumno = async (req, res) => {
  var alumno = new Alumno(req.body);
  try {
    await alumno.save();
    res.json({
      'status': '1',
      'msg': 'Alumno GUARDADO'
    })
  } catch (error) {
    res.json({
      'status': '0',
      'msg': 'Error guardando alumno.'
    })
  }
}

//Baja de alumno
alumnoCtrl.deleteAlumno = async (req, res) => {
  try {
    await Alumno.deleteOne({ _id: req.params.id });
    res.json({
      status: '1',
      msg: 'Alumno ELIMINADO'
    })
  } catch (error) {
    res.json({
      'status': '0',
      'msg': 'Error eliminando el alumno'
    })
  }
}


//Modificacion de alumno
alumnoCtrl.editAlumno = async (req, res) => {
  const vAlumno = new Alumno(req.body);
  try {
    await Alumno.updateOne({ _id: req.body._id }, vAlumno);
    res.json({
      'status': '1',
      'msg': 'Alumno ACTUALIZADO'
    })
  } catch (error) {
    res.json({
      'status': '0',
      'msg': 'Error actualizando el alumnos'
    })
  }
}

//Alta de asistencia
alumnoCtrl.addAsistencia = async (req, res) => {
  const asistencia = new Asistencia(req.body);
  const alumno = await Alumno.findById(req.params.id);
  alumno.asistencias.push(asistencia);

  try {
    await asistencia.save();
    await Alumno.updateOne({ _id: req.params.id }, alumno);
    res.json({
      'status': '1',
      'msg': 'Asistencia GUARDADA'
    })
  } catch (error) {
    res.json({
      'status': '0',
      'msg': 'Error guardando la asistencia.'
    })
  }
}


//Alta de progreso
alumnoCtrl.addProgreso = async (req, res) => {
  const progreso = new Progreso(req.body);
  const alumno = await Alumno.findById(req.params.id);
  alumno.progresos.push(progreso);

  try {
    await Alumno.updateOne({ _id: req.params.id }, alumno);
    res.json({
      'status': '1',
      'msg': 'Progreso GUARDADO'
    })
  } catch (error) {
    res.json({
      'status': '0',
      'msg': 'Error guardando el progreso del alumno.'
    })
  }
}

//Obtener progreso
alumnoCtrl.getProgreso = async (req, res) => {
  const alumno = await Alumno.findById(req.params.id);
  let progreso = await alumno.progresos.find(p => p._id == req.params.idprogreso);
  res.json(progreso);
}

//Modificación de progreso
alumnoCtrl.editProgreso = async (req, res) => {
  const alumno = await Alumno.findById(req.params.id);
  let progreso = await alumno.progresos.find(p => p._id == req.params.idprogreso);
  progreso.set(req.body);
  const index = alumno.progresos.findIndex(element => element._id == req.params.idprogreso );
  alumno.progresos.set(index, progreso);
  try {
    await Alumno.updateOne({ _id: req.params.id }, alumno);
    res.json({
      'status': '1',
      'msg': 'Progreso ACTUALIZADO'
    })
  } catch (error) {
    res.json({
      'status': '0',
      'msg': 'Error actualizando el progreso'
    })
  }
}

//Baja de progreso
alumnoCtrl.deleteProgreso = async (req, res) => {
  const alumno = await Alumno.findById(req.params.id);
  const idprogreso = req.params.idprogreso;
  alumno.progresos.pull(idprogreso);
  try {
    await Alumno.updateOne({ _id: req.params.id }, alumno);
    res.json({
      'status': '1',
      'msg': 'Progreso ELIMINADO'
    })
  } catch (error) {
    res.json({
      'status': '0',
      'msg': 'Error eliminando el progreso.'
    })
  }
}


//Alta de rutina
alumnoCtrl.addRutina = async (req, res) => {
  const rutina = new Rutina(req.body);
  const alumno = await Alumno.findById(req.params.id);
  //var rutinas = await Alumno.find().populate("plan");
  alumno.rutinas.push(rutina);

  try {
    await Alumno.updateOne({ _id: req.params.id }, alumno);
    res.json({
      'status': '1',
      'msg': 'Rutina GUARDADA'
    })
  } catch (error) {
    res.json({
      'status': '0',
      'msg': 'Error guardando la rutina del alumno.'
    })
  }
}


//Obtener rutina
alumnoCtrl.getRutina = async (req, res) => {
  const alumno = await Alumno.findById(req.params.id).populate("plan");
  let rutina = await alumno.rutinas.find(r => r._id == req.params.idrutina);
  res.json(rutina);
}

//Modificación de una rutina
alumnoCtrl.editRutina = async (req, res) => {
  const alumno = await Alumno.findById(req.params.id);
  let rutina = await alumno.rutinas.find(r => r._id == req.params.idrutina);
  rutina.set(req.body);
  const index = alumno.rutinas.findIndex(element => element._id == req.params.idrutina );
  alumno.rutinas.set(index, rutina);
  try {
    await Alumno.updateOne({ _id: req.params.id }, alumno);
    res.json({
      'status': '1',
      'msg': 'Rutina ACTUALIZADA'
    })
  } catch (error) {
    res.json({
      'status': '0',
      'msg': 'Error actualizando la rutina'
    })
  }
}

//Baja de rutina
alumnoCtrl.deleteRutina = async (req, res) => {
  const alumno = await Alumno.findById(req.params.id);
  const idrutina = req.params.idrutina;
  alumno.rutinas.pull(idrutina);
  try {
    await Alumno.updateOne({ _id: req.params.id }, alumno);
    res.json({
      'status': '1',
      'msg': 'Rutina ELIMINADA'
    })
  } catch (error) {
    res.json({
      'status': '0',
      'msg': 'Error eliminando la rutina.'
    })
  }
}

//Alta de ejercicio a una rutina
alumnoCtrl.addEjercicioToRutina = async (req, res) => {

  const ejercicio = new Ejercicio(req.body);
  const alumno = await Alumno.findById(req.params.id);
  const rutina = await alumno.rutinas.find(r => r._id == req.params.idrutina);
  rutina.ejercicios.push(ejercicio);

  try {

    await Rutina.updateOne({ _id: req.params.idrutina }, rutina);
    await Alumno.updateOne({ _id: req.params.id }, alumno);
    res.json({
      'status': '1',
      'msg': 'Ejercicio GUARDADO'
    })
  } catch (error) {
    res.json({
      'status': '0',
      'msg': 'Error guardando el ejercicio.'
    })
  }

}

// Obtener ejercicios
alumnoCtrl.getEjercicios = async (req, res) => {
  const alumno = await Alumno.findById(req.params.id).populate("rutinas");
  let rutina = await alumno.rutinas.find(r => r._id == req.params.idrutina);
  res.json(rutina.ejercicios);
}


//Obtener ejercicio
alumnoCtrl.getEjercicio = async (req, res) => {
  const alumno = await Alumno.findById(req.params.id).populate("plan");
  let rutina = await alumno.rutinas.find(r => r._id == req.params.idrutina);
  let ejercicio = await rutina.ejercicios.find(e => e._id == req.params.idejercicio);
  res.json(ejercicio);
}

//Moficicación de ejercicio
alumnoCtrl.editEjercicio = async (req, res) => {
  const alumno = await Alumno.findById(req.params.id);
  const rutina = await alumno.rutinas.find(r => r._id == req.params.idrutina);
  let ejercicio = await rutina.ejercicios.find(e => e._id == req.params.idejercicio);
  ejercicio.set(req.body);
  const index = rutina.ejercicios.findIndex(element => element._id == req.params.idejercicio );
  const indexB = alumno.rutinas.findIndex(element => element._id == req.params.idrutina);
  rutina.ejercicios.set(index, ejercicio);
  alumno.rutinas.set(indexB, rutina);
  try {
    await Rutina.updateOne({ _id:req.params.idrutina}, rutina);
    await Alumno.updateOne({ _id: req.params.id }, alumno);
    res.json({
      'status': '1',
      'msg': 'Ejercicio ACTUALIZADO'
    })
  } catch (error) {
    res.json({
      'status': '0',
      'msg': 'Error actualizando el ejercicio'
    })
  }
}


//Baja de ejercicio
alumnoCtrl.deleteEjercicio = async (req, res) => {
  const alumno = await Alumno.findById(req.params.id);
  const rutina = await alumno.rutinas.find(r => r._id == req.params.idrutina);
  let ejercicio = await rutina.ejercicios.find(e => e._id == req.params.idejercicio);
  rutina.ejercicios.pull(ejercicio);
  try {
    await Rutina.updateOne({ _id:req.params.idrutina}, rutina);
    await Alumno.updateOne({ _id: req.params.id }, alumno);
    res.json({
      'status': '1',
      'msg': 'Ejercicio ELIMINADO'
    })
  } catch (error) {
    res.json({
      'status': '0',
      'msg': 'Error eliminando el ejercicio'
    })
  }
}

//Alta de pago
alumnoCtrl.addPago = async (req, res) => {
  const pago = new Pago(req.body);
  const alumno = await Alumno.findById(req.params.id);
  alumno.pagos.push(pago);

  try {
    await pago.save();
    await Alumno.updateOne({ _id: req.params.id }, alumno);
    res.json({
      'status': '1',
      'msg': 'Pago GUARDADO'
    })
  } catch (error) {
    res.json({
      'status': '0',
      'msg': 'Error guardando el pago.'
    })
  }
}

//USUARIO
//Alta de usuario para alumno
alumnoCtrl.createUsuario = async (req, res) => {
  const alumno = await Alumno.findById(req.params.id);
  //en req.body se espera que vengan los datos de usuario a crear
  const usuario = new Usuario(req.body);
  alumno.usuario = usuario;
  try {
    await usuario.save();
    await Alumno.updateOne({ _id: req.params.id }, alumno);
    res.json({
      'status': '1',
      'msg': 'Usuario guardado.'
    })
  } catch (error) {
    res.json({
      'status': '0',
      'msg': 'Error procesando operacion.'
    })
  }
}

alumnoCtrl.editUsuario = async (req, res) => {
  const alumno = await Alumno.findById(req.params.id);
  let usuario = await alumno.usuario.find(p => p._id == req.params.idusuario);
  usuario.set(req.body);
  const index = alumno.usuario.findIndex(element => element._id == req.params.idusuario );
  alumno.usuario.set(index, usuario);
  try {
    await Alumno.updateOne({ _id: req.params.id }, alumno);
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
  /*const vAlumno = await Alumno.findById(req.params.id);
  try {
    if (req.body._id == vAlumno.usuario._id) {
      const vUsuario = new Usuario (req.body);
      await Usuario.updateOne({_id: req.body._id}, vUsuario);
      vAlumno.usuario = vUsuario;
      res.json({
        'status': '1',
        'msg': 'Usuario modificado.'
      })
    }
    else {
      res.json({
        'status': '2',
        'msg': 'Usuario no encontrado.'
      })
    }
  } catch (error) {
    res.json({
      'status': '0',
      'msg': 'Error procesando operacion.'
    })
  }*/
}

//Buscar usuario por alumno
alumnoCtrl.getUsuarioPorAlumno = async (req, res) => {
  const alumno = await Alumno.findById(req.params.id).select('usuario').populate("usuario");
  res.json(alumno);
}

//Buscar alumno por DNI
alumnoCtrl.getAlumnoPorDNI = async (req, res) => {
  var alumnos = await Alumno.find().where("dni").equals(req.params.dni).populate("pagos").populate("plan").populate("asistencias");
  res.json(alumnos);
}

//Buscar alumno por Usuario
alumnoCtrl.getAlumnoPorUsuario = async (req, res) => {
var usuario= await Usuario.find({usuario:req.params.usuario})
var alumno= await Alumno.find({usuario: usuario}).populate("pagos").populate("plan").populate("asistencias").populate("ejercicio").populate("progreso");
  res.json(alumno);
} 


//ESTADISTICAS
alumnoCtrl.getAlumnosPorFechaInicio = async (req, res) => {
  var alumnos = await Alumno.find().where("fechainicio").equals(req.params.fechainicio).populate("pagos").populate("plan").populate("asistencias");
  res.json(alumnos);
}

//ESTADISTICAS
//primero se debe ejecutar el metodo del plan controller para obtener el plan
alumnoCtrl.getAlumnoPorPlan = async (req, res) => {
  try{
    var alumnos = await Alumno.find({plan : req.params.plan}).populate("pagos").populate("plan").populate("asistencias");
  } catch (error) {
    res.json({
      'status': '0',
      'msg': 'El plan ingresado no es válido.'
    })
  }
  res.json(alumnos);
}


//PARA LOS ALUMNOS
//Obtener las rutinas de un alumno
alumnoCtrl.getRutinas = async (req, res) => {
  const alumno = await Alumno.findById(req.params.id).populate("rutinas");
  res.json(alumno.rutinas);
}

//Obtener las asistencias de un alumno
alumnoCtrl.getAsistencias = async (req, res) => {
  const alumno = await Alumno.findById(req.params.id).populate("asistencias");
  res.json(alumno.asistencias);
}

//Obtener los pagos de un alumno
alumnoCtrl.getPagos = async (req, res) => {
  const alumno = await Alumno.findById(req.params.id).populate("pagos");
  res.json(alumno.pagos);
}

//Obtener los progresos de un alumno
alumnoCtrl.getProgresos = async (req, res) => {
  const alumno = await Alumno.findById(req.params.id).populate("progresos");
  res.json(alumno.progresos);
}

module.exports = alumnoCtrl;