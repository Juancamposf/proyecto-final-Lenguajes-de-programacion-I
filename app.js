const express = require('express');
const app = express();
const port = 3000;

// Configuración del motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Middleware para servir archivos estáticos
app.use(express.static('public'));

const inicioRoute = require('./routes/inicio');
const fraseRoute = require('./routes/frase');

app.use('/', inicioRoute);
app.use('/frase', fraseRoute);

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
