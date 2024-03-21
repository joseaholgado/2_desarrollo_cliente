<?php

define("HOSTNAME", "localhost");
define("USERNAME", "root");
define("PASSWORD", "");
define("DATABASE", "DATOS"); // utf8_spanish2_ci

$conexion = mysqli_connect(HOSTNAME, USERNAME, PASSWORD, DATABASE);

// ESTOY BORRANDO TODOS LOS DATOS

$consulta = "DELETE FROM valores";
$registros = mysqli_query($conexion, $consulta) or die(mysqli_error($conexion));
mysqli_close($conexion);

$datos = [];
echo json_encode($datos);

?>