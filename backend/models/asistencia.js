const mongoose = require('mongoose');
const {Schema} = mongoose;
const AsistenciaSchema = new Schema({
  fecha: {type: String, required: true},
  hora: {type: String, required: true}
})
module.exports = mongoose.models.Asistencia || mongoose.model('Asistencia', AsistenciaSchema);