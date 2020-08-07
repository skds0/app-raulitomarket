// importamos o requerimos los modulos o paquetes a usar en la aplicacion
const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');



mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/raulito', {
    useNewUrlParser: true
});


// creando el servidor
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// mis rutas
app.use('/', routes());


// puerto donde se ejecuta mi servidor
app.listen(9000);

