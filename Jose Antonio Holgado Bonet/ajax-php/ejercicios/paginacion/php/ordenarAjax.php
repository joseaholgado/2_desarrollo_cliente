<?php

define("HOSTNAME", "localhost");
define("USERNAME", "root");
define("PASSWORD", "");
define("DATABASE", "DATOS"); // utf8_spanish2_ci

$conexion = mysqli_connect(HOSTNAME, USERNAME, PASSWORD, DATABASE);

// ESTOY ORDENANDO DATOS

$consulta = "SELECT valorX, SUM(valorY1), SUM(valorY2) FROM valores GROUP BY valorX ORDER BY valorX";
$registros = mysqli_query($conexion, $consulta) or die(mysqli_error($conexion));
mysqli_close($conexion);

$datos = [];
$valorX = [];
$valorY1 = [];
$valorY2 = [];
while ($fila = mysqli_fetch_array($registros)) { // transforma el resultado de la consulta en un json
    array_push($valorX, $fila[0]);
    array_push($valorY1, $fila[1]);
    array_push($valorY2, $fila[2]);
}
$datos = [$valorX, $valorY1, $valorY2];
echo json_encode($datos);

?>