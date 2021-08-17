const Slider = require('../models/slider');
const sliderCtrl = {}

//Obtener todos los slider
sliderCtrl.getSliders = async (req, res) => {
  var sliders = await Slider.find();
  res.json(sliders);
}

//Obtener slider por ID
sliderCtrl.getSlider = async (req, res) => {
  const slider = await Slider.findById(req.params.id);
  res.json(slider);
}

//Alta de slider
sliderCtrl.addSlider = async (req, res) => {
  var slider = new Slider(req.body);
  try {
    await slider.save();
    res.json({
      'status': '1',
      'msg': 'Slider AGREGADO'
    })
  } catch (error) {
    res.json({
      'status': '0',
      'msg': 'Error guardando slider.'
    })
  }
}

//Baja de slider
sliderCtrl.deleteSlider = async (req, res) => {
  try {
    await Slider.deleteOne({ _id: req.params.id });
    res.json({
      status: '1',
      msg: 'Slider ELIMINADO'
    })
  } catch (error) {
    res.json({
      'status': '0',
      'msg': 'Error eliminando el slider'
    })
  }
}

//Modificacion de slider
sliderCtrl.editSlider = async (req, res) => {
  const vSlider = new Slider(req.body);
  try {
    await Slider.updateOne({ _id: req.body._id }, vSlider);
    res.json({
      'status': '1',
      'msg': 'Slider ACTUALIZADO'
    })
  } catch (error) {
    res.json({
      'status': '0',
      'msg': 'Error actualizando el slider'
    })
  }
}


module.exports = sliderCtrl;