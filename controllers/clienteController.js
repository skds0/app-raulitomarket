const Clientes = require('../models/Clientes');

exports.nuevoCliente = async (req, res, next)=>{
    //console.log(req.body);
    const nuevo_cliente = new Clientes(req.body);

    try {
        // guardar en la DB el registro
        await nuevo_cliente.save();
        res.json({mensaje: 'se ha creado correctamemte'});
    } catch (error) {
        console.log(error);
        next();
    }
}


// vamos a mostrar los clientes
exports.obtenerClientes = async (req, res, next)=>{
    try {
        const misClientes = await Clientes.find({});
        res.json(misClientes);

    } catch (error) {
        console.log(error);
        next();
    }
}

// mostrando un solo cliente
exports.mostrarUnCliente = async (req, res, next)=>{

    const unCliente = await Clientes.findById(req.params.miId);

    if(!unCliente){
        res.json({mensaje: 'el cliente que estas buscando no existe'});
        next()
    }
    res.json(unCliente);

}




/*
C   creamos un registro
R   leemos informacion de la base de datos
U    actualizamos la informacion
D   eliminamos el registro

*/