const express = require('express');
const app = express();
const cors = require('cors');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Configuración de CORS
app.use(cors());
app.use(cors({
  origin: '*'
}))


// Rutas
const tipoProyecto = require('./routes/tipoProyecto');
const cliente = require('./routes/cliente');
const universidad = require('./routes/universidad');
const etapaProyecto = require('./routes/etapaProyecto');


app.use('/api/tipoProyectos', tipoProyecto);
app.use('/api/clientes', cliente);
app.use('/api/universidades', universidad);
app.use('/api/etapaProyectos', etapaProyecto);


// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Error interno del servidor');
});

module.exports = app;
