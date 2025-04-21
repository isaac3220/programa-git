<?php 
//crear parametros
$host = "localhost";
$user = "root";
$pass = "";
$bd = "proyecto_api";
//obtener parametros para crear conexion 
$coon =new mysqli($host,$user,$pass,$bd);
//verificar conexion 
if ($coon->connect_error) {
    die("error de conexion: " .$coon->connect_error);
}else{
    echo "conectado";
}

?>