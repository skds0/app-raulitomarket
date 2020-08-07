const Usuarios = require('../models/Usuarios');

exports.nuevoUsuario = async (req, res, next)=>{
    //console.log(req.body);
    const nuevo_cliente = new Usuarios(req.body);

    try {
        // guardar en la DB el registro
        await nuevo_cliente.save();
        res.json({mensaje: 'se ha creado correctamemte el usuario'});
    } catch (error) {
        console.log(error);
        next();
    }
}
