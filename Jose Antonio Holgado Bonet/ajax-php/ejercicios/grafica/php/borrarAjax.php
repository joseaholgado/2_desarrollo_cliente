<?php

define("HOSTNAME", "localhost");
define("USERNAME", "root");
define("PASSWORD", "");
define("DATABASE", "DATOS"); // utf8_spanish2_ci

$conexion = mysqli_connect(HOSTNAME, USERNAME, PASSWORD, DATABASE);

// ESTOY BORRANDO

$valorX = $_POST["valorX"];
$consulta = "DELETE FROM valores WHERE valorX='$valorX'";//cambiar la sentencia por update
$registros = mysqli_query($conexion, $consulta) or die(mysqli_error($conexion));

$datos = [];
echo json_encode($datos);

mysqli_close($conexion);

?>