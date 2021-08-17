const mongoose = require('mongoose');
const {Schema} = mongoose;
const SliderSchema = new Schema({
  img: { type: String, required: true },
  descripcion: { type: String, required: true }
})
module.exports = mongoose.models.Slider || mongoose.model('Slider', SliderSchema);