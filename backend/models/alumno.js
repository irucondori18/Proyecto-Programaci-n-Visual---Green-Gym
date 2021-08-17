const mongoose = require('mongoose');
const Pago = require('./pago');
const Rutina = require('./rutina');
const Usuario = require('./usuario');
const Asistencia = require('./asistencia');
const Progreso = require('./progreso');
const Plan = require('./plan');

const {Schema} = mongoose;
const AlumnoSchema = new Schema({
  apellido: {type: String, required: true},
  nombre: {type: String, required: true},
  dni: {type: Number, required: true},
  fechanac: {type: String, required: true},
  fechainicio: {type: String, required: true},
  celular: {type: String, required: true},
  domicilio: {type: String, required: true},
  email: {type: String, required: true},
  //hay relacion de agregacion, me refieron con schema object id
  pagos: [{type: Schema.Types.ObjectId, ref: Pago}],
  plan: {type: Schema.Types.ObjectId, ref: Plan, required:true}, //required debe ser true
  asistencias: [{type: Schema.Types.ObjectId, ref: Asistencia}],
  usuario: {type: Schema.Types.ObjectId, ref: Usuario},
  //hay relacion de composicion, me refiero con object schema
  progresos: [{type: Progreso.schema}],
  rutinas: [{type: Rutina.schema}]
})
module.exports = mongoose.models.Alumno || mongoose.model('Alumno', AlumnoSchema);