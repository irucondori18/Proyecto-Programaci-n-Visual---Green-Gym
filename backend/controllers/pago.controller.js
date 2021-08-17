const Pago = require('../models/pago');
const pagoCtrl = {}

//Recupera todos los pagos realizados
pagoCtrl.getAllPagos = async (req, res) => {
  var pagos = await Pago.find();
  res.json(pagos);
}

//Modificacion de pago
pagoCtrl.editPago = async (req, res) => {
  const vPago = new Pago(req.body);
  try {
    await Pago.updateOne({ _id: req.body._id }, vPago);
    res.json({
      'status': '1',
      'msg': 'Pago ACTUALIZADO'
    })
  } catch (error) {
    res.json({
      'status': '0',
      'msg': 'Error actualizando el pago'
    })
  }
}

//Baja de pago
pagoCtrl.deletePago = async (req, res) => {
  try {
    await Pago.deleteOne({ _id: req.params.idpago });
    res.json({
      status: '1',
      msg: 'Pago ELIMINADO'
    })
  } catch (error) {
    res.json({
      'status': '0',
      'msg': 'Error eliminando el pago'
    })
  }
}

//Obtener asistencia
pagoCtrl.getPago = async (req, res) => {
  const pago = await Pago.findById(req.params.idpago);
  res.json(pago);
}

//ESTADISTICAS
pagoCtrl.getPagosPorFecha = async (req, res) => {
   var pagos = await Pago.find().where("fechapago").equals(req.params.fechapago);
   res.json(pagos);

}



module.exports = pagoCtrl;