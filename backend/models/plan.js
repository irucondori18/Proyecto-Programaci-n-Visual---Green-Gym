const mongoose = require('mongoose');
const {Schema} = mongoose;
const PlanSchema = new Schema({
  tipo: {type: String, required: true},
  costo: {type: Number, required: true},
  frecuencia: {type: String, required:true}
})
module.exports = mongoose.models.Plan || mongoose.model('Plan', PlanSchema);