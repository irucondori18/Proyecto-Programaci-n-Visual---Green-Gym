const mongoose = require('mongoose');
const {Schema} = mongoose;
const PagoSchema = new Schema({
  monto: {type: Number, required: true},
  modopago: {type: String, required:true},
  fechapago: {type: String, required: true},
  fechavencimiento: {type: String, required: true},
  completado: {type: Boolean, required: true}
})
module.exports = mongoose.models.Pago || mongoose.model('Pago', PagoSchema);