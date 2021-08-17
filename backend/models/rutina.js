const mongoose = require('mongoose');
const Ejercicio = require('./ejercicio');
const {Schema} = mongoose;
const RutinaSchema = new Schema({
  grupomuscular: {type: String, required: true},
  duracion: {type: Number, required: true},
  //hay relacion de composicion, me refiero con object schema
  ejercicios: [{type: Ejercicio.schema}]
})
module.exports = mongoose.models.Rutina || mongoose.model('Rutina', RutinaSchema);