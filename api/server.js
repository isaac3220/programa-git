const express = require('express');
const cors = require('cors');
const rutasUsuario = require('./usuarios.routes');  // Importamos las rutas de usuario

const app = express();

// Habilitar CORS para evitar problemas de acceso entre dominios
app.use(cors());

// Middleware para parsear JSON
app.use(express.json());

// Usar las rutas definidas en 'usuarios.routes.js'
app.use('/api/usuarios', rutasUsuario); 

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor ejecutándose en el puerto 3000');
});

