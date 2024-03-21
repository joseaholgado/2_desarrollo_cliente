<?php

define("HOSTNAME", "localhost");
define("USERNAME", "root");
define("PASSWORD", "");
define("DATABASE", "DATOS"); // utf8_spanish2_ci

$conexion = mysqli_connect(HOSTNAME, USERNAME, PASSWORD, DATABASE);

// ESTOY LEYENDO

$consulta = "SELECT * FROM valores";
$registros = mysqli_query($conexion, $consulta) or die(mysqli_error($conexion));

$datos = [];
while ($fila = mysqli_fetch_array($registros)) { // transforma el resultado de la consulta en un json
    array_push($datos, $fila);
}
echo json_encode($datos);

?>