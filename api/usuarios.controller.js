const db = require('./conexionBD');  // Importamos la conexión a la base de datos

// REGISTRO DE USUARIO
exports.registrarUsuario = (req, res) => {
  const { nombre, correo, edad, contrasena } = req.body;

  // Validaciones básicas
  if (!nombre || !correo || !edad || !contrasena) {
    return res.status(400).json({ mensaje: 'Todos los campos son obligatorios' });
  }

  if (edad < 18) {
    return res.status(400).json({ mensaje: 'Debes ser mayor de edad para registrarte' });
  }

  // Consulta SQL para insertar al usuario
  const sql = 'INSERT INTO usuarios (nombre, correo, edad, contrasena) VALUES (?, ?, ?, ?)';
  db.query(sql, [nombre, correo, edad, contrasena], (err, result) => {
    if (err) {
      // Manejo de errores (por ejemplo, si el correo ya está registrado)
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(409).json({ mensaje: 'Correo o contraseña ya registrados' });
      }
      return res.status(500).json({ mensaje: 'Error al registrar el usuario', error: err.message });
    }
    res.status(201).json({ mensaje: 'Usuario registrado correctamente', id: result.insertId });
  });
};

// LOGIN DE USUARIO
exports.loginUsuario = (req, res) => {
  const { correo, contrasena } = req.body;

  // Validación básica
  if (!correo || !contrasena) {
    return res.status(400).json({ mensaje: 'Correo y contraseña son requeridos' });
  }

  // Consulta SQL para verificar las credenciales
  const sql = 'SELECT * FROM usuarios WHERE correo = ? AND contrasena = ?';
  db.query(sql, [correo, contrasena], (err, results) => {
    if (err) return res.status(500).json({ mensaje: 'Error al iniciar sesión', error: err.message });

    if (results.length === 0) {
      return res.status(401).json({ mensaje: 'Credenciales incorrectas' });
    }

    const usuario = results[0];
    res.json({ mensaje: 'Inicio de sesión exitoso', usuario });
  });
};

