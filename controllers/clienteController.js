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

// actualizar la informacion
exports.actualizarCliente = async (req, res, next) =>{
    try {
        const modificaCliente = await Clientes.findOneAndUpdate(
            {_id: req.params.miId},
            req.body, 
            {new: true});
            res.json(modificaCliente);
    } catch (error) {
        console.log(error);
        next();
    }
}

// eliminando la informacion
exports.borrarCliente = async (req, res, next) =>{
    try {
        await Clientes.findOneAndDelete({_id: req.params.miId});
        res.json({mensaje: 'el cliente ha sido eliminado correctamente de la DB'});
    } catch (error) {
        console.log(error);
        next();
    }
}



/*
C   creamos un registro
R   leemos informacion de la base de datos
U    actualizamos la informacion
D   eliminamos el registro

*/