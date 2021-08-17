const Asistencia = require('../models/asistencia');
const asistenciaCtrl = {}

//Recupera todos los pagos realizados
asistenciaCtrl.getAllAsistencias = async (req, res) => {
  var asistencias = await Asistencia.find();
  res.json(asistencias);
}

//Modificacion de asistencia
asistenciaCtrl.editAsistencia = async (req, res) => {
  const vAsistencia = new Asistencia(req.body);
  try {
    await Asistencia.updateOne({ _id: req.body._id }, vAsistencia);
    res.json({
      'status': '1',
      'msg': 'Asistencia ACTUALIZADA'
    })
  } catch (error) {
    res.json({
      'status': '0',
      'msg': 'Error actualizando la asistencia'
    })
  }
}

//Baja de asistencia
asistenciaCtrl.deleteAsistencia = async (req, res) => {
  try {
    await Asistencia.deleteOne({ _id: req.params.idasistencia });
    res.json({
      status: '1',
      msg: 'Asistencia ELIMINADA'
    })
  } catch (error) {
    res.json({
      'status': '0',
      'msg': 'Error eliminando la asistencia'
    })
  }
}

//Obtener asistencia
asistenciaCtrl.getAsistencia = async (req, res) => {
  const asistencia = await Asistencia.findById(req.params.idasistencia);
  res.json(asistencia);
}

//ESTADISTICAS
asistenciaCtrl.getAsistenciasPorFecha = async (req, res) => {
   var asistencias = await Asistencia.find().where("fecha").equals(req.params.fecha);
   res.json(asistencias);

}


module.exports = asistenciaCtrl;