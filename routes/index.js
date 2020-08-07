const express = require('express');
const router = express.Router();

const clienteController = require('../controllers/clienteController');

module.exports = function(){
    /*
    router.get('/', (req, res)=>{
        res.send('Pagina de inicio');
    });

    router.get('/clientes/nuevo-cliente', (req, res) =>{
        res.send('pagina de nuevo clinete');
    });

    router.get('/contactos', (req, res) =>{
        res.send('aqui estan mis contactos');
    });
    */
    
   router.post('/clientes', clienteController.nuevoCliente);

   // obteniendo informacion de la DB
   router.get('/mostrar-clientes',clienteController.obtenerClientes);

   // obteniendo un solo cliente
   router.get('/mostrar-cliente/:miId', clienteController.mostrarUnCliente);




    return router;
}