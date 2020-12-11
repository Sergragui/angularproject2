const express = require('express');

//Crear server express
const app = express();

app.listen(3000, () =>{

    console.log('Servidor corriendo en puerto ' + 3000);

});

app.get( '/', (req, res)=>{

    res.json({
        ok:true,
        msg: 'Hola Mundo'
    });

});

