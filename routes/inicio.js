// routes/home.js
const express = require('express');
const router = express.Router();

let visitCount = 0;

router.get('/', (req, res) => {
    visitCount++;
    
    // Mensaje de bienvenida según la hora
    const hora = new Date().getHours();
    let mensajeBienvenida;

    if (hora < 12) {
        mensajeBienvenida = '¡Buenos días!';
    } else if (hora < 18) {
        mensajeBienvenida = '¡Buenas tardes!';
    } else {
        mensajeBienvenida = '¡Buenas noches!';
    }

    res.render('index', { nombre: 'Juan', visitas: visitCount, mensajeBienvenida });
});

module.exports = router;
