var express = require('express');
var app = express();
const {mongoose} = require('./database')

const cors = require('cors');
//middlewares
app.use(express.json({limit: '50mb'}));
app.use(cors({origin: 'http://localhost:4200'}));

//Cargamos el modulo de direccionamiento de rutas para puntos
app.use('/api/alumno', require('./routes/alumno.route'));
app.use('/api/plan', require('./routes/plan.route'));
app.use('/api/pago', require('./routes/pago.route'));
app.use('/api/asistencia', require('./routes/asistencia.route'));
app.use('/api/slider', require('./routes/slider.route'));
app.use('/api/usuarios', require('./routes/usuario.route'));

//setting
app.set('port', process.env.PORT || 3000);
//starting the server
app.listen(app.get('port'), () => {
 console.log(`Server started on port`, app.get('port'));
});