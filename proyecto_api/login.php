<?php

require 'conexion.php';//incluir la conexion de la base de datos

//obtener datos desde metodo post
$usuario = $_POST['usuario'] ?? '';
$contrasena = $_POST['contrasena'] ?? '';

//validar datos recibidos
if (empty($usuario) || empty($contrasena)) {
    echo json_encode(["estado" => "error", "mensaje" => "Datos incompletos"]);
    exit;
}

//buscar usuario que coincida con los usuarios registrados y guardados
$sql = "SELECT contrasena FROM usuarios WHERE usuario = ?";
$stmt = $coon->prepare($sql);
$stmt->bind_param("s", $usuario);
$stmt->execute();
$stmt->store_result();

//verificar si se encontro el usuario
if ($stmt->num_rows > 0) {
    $stmt->bind_result($hash_bd);
    $stmt->fetch();
    //verificar la contraseña registrada
    if (password_verify($contrasena, $hash_bd)) {
        echo json_encode(["estado" => "ok", "mensaje" => "Autenticación satisfactoria"]);
    } else {
        echo json_encode(["estado" => "error", "mensaje" => "Contraseña incorrecta"]);
    }
} else {
    echo json_encode(["estado" => "error", "mensaje" => "Usuario no encontrado"]);
}

$stmt->close();//cerrar consulta
$coon->close();//cerrar conexion
?>
