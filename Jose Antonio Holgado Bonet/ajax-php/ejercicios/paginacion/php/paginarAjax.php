<?php

define("HOSTNAME", "localhost");
define("USERNAME", "root");
define("PASSWORD", "");
define("DATABASE", "DATOS"); // NOMBRE DE LA BBDD

$conexion = mysqli_connect(HOSTNAME, USERNAME, PASSWORD, DATABASE); // CONEXIÓN A LA BBDD

// ESTOY PAGINANDO

$pagina = $_POST['pagina'];
$bloque = $_POST['bloque'];
$inicio = $bloque + (($pagina - 1) * 5);

$consulta = "SELECT * FROM valores LIMIT $inicio, 5";
$registros = mysqli_query($conexion, $consulta) or die(mysqli_error($conexion));
mysqli_close($conexion);

$datos = [];
while ($fila = mysqli_fetch_array($registros)) { // transforma el resultado de la consulta en un json
    array_push($datos, $fila); // $datos = {0: valorX; 1: valorY1, 3:valorY2, "valorX": su valorX; "valorY1": su valorY1, "valorY2": su valorY2 }
}
echo json_encode($datos);

?>