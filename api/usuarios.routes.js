const express = require('express');
const router = express.Router();
const usuarioController = require('./usuarios.controller');  // Importamos el controlador de usuario

// Ruta para el registro de usuario
router.post('/registro.js', usuarioController.registrarUsuario);

// Ruta para el login de usuario
router.post('/login.js', usuarioController.loginUsuario);

module.exports = router;  // Exportamos el router para que pueda ser usado en el servidor
