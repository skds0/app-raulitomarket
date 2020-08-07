const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    nombre:{
        type: String,
        trim: true
    },
    apellidos:{
        type: String,
        trim: true
    },
    correo:{
        type: String,
        trim: true,
        unique: true,
        lowercase: true
    },
    direccion:{
        type: String,
        trim: true
    },
    telefono: {
        type: String,
        trim: true
    }
});

module.exports = mongoose.model('Usuarios', usuarioSchema);