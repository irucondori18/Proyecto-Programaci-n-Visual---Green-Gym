const mongoose = require('mongoose');
const {Schema} = mongoose;
const EjercicioSchema = new Schema({
  nombre: {type: String, required: true},
  series: {type: Number, required: true},
  repeticiones: {type: Number, required:true}
})
module.exports = mongoose.models.Ejercicio || mongoose.model('Ejercicio', EjercicioSchema);