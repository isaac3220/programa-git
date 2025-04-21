<?php
// Incluye el archivo de conexión a la base de datos
require 'conexion.php';

// Muestra el contenido del arreglo $_POST (útil para depuración)
var_dump($_POST);
// Obtiene el valor de 'usuario' del formulario, si existe, y le quita espacios al inicio y al final
$usuario = isset($_POST['usuario']) ? trim($_POST['usuario']) : '';
// Obtiene el valor de 'contrasena' del formulario, si existe, y le quita espacios
$contrasena = isset($_POST['contrasena']) ? trim($_POST['contrasena']) : '';
// Verifica si alguno de los campos está vacío
if ($usuario === '' || $contrasena === '') {
    // Retorna una respuesta JSON indicando error por datos incompletos
    echo json_encode([
        "estado" => "error",
        "mensaje" => "Datos incompletos",
        "recibido" => $_POST
    ]);
    exit; // Finaliza la ejecución del script
}
// Hashea la contraseña usando el algoritmo por defecto (actualmente BCRYPT)
$hash = password_hash($contrasena, PASSWORD_DEFAULT);
// Prepara una consulta SQL para insertar el nuevo usuario con la contraseña hasheada
$sql = "INSERT INTO usuarios (usuario, contrasena) VALUES (?, ?)";
// Prepara la consulta en la conexión a la base de datos
$stmt = $coon->prepare($sql);
// Verifica si hubo un error al preparar la consulta
if ($stmt === false) {
    echo json_encode([
        "estado" => "error",
        "mensaje" => "Error en la preparación de la consulta: " . $coon->error
    ]);
    exit;
}

// Asocia los parámetros a la consulta: dos strings ("ss") -> $usuario y $hash
$stmt->bind_param("ss", $usuario, $hash);

// Ejecuta la consulta
if ($stmt->execute()) {
    // Si la ejecución fue exitosa, devuelve una respuesta de éxito
    echo json_encode([
        "estado" => "ok",
        "mensaje" => "Usuario registrado correctamente"
    ]);
} else {
    // Si ocurrió un error al ejecutar, se muestra el error
    echo json_encode([
        "estado" => "error",
        "mensaje" => "Error al registrar usuario: " . $stmt->error
    ]);
}

// Cierra la consulta preparada
$stmt->close();

// Cierra la conexión a la base de datos
$coon->close();
?>
