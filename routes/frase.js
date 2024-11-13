// routes/about.js
const express = require('express');
const router = express.Router();

// Lista de frases divertidas e inspiradoras
const frases = [
    "¡La creatividad es contagiosa, pásala!",
    "Si puedes soñarlo, ¡puedes programarlo!",
    "La única forma de hacer un gran trabajo es amar lo que haces.",
    "¡El código perfecto no existe, así que sigue mejorando!",
    "¿Error 404? No te preocupes, todos cometemos errores.",
    "La programación es como el arte... y el depurador es tu pincel.",
    "La paciencia es una virtud... sobre todo al compilar.",
    "¡Hoy es un buen día para aprender algo nuevo!",
    "Si algo no funciona, prueba con reiniciar... ¡a veces también aplica en la vida!"
];

// Ruta de About con frase aleatoria
router.get('/', (req, res) => {
    // Selecciona una frase aleatoria de la lista
    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    res.render('frase', { frase: fraseAleatoria });
});

module.exports = router;
