<?php

// Este script recibe tres valores a través de una petición POST, 
// los utiliza para actualizar una fila en la base de datos y luego envía una respuesta con un mensaje de éxito o error.

// Define las constantes para la conexión a la base de datos
define("HOSTNAME", "localhost"); // El nombre del host donde se encuentra la base de datos
define("USERNAME", "root"); // El nombre de usuario para acceder a la base de datos
define("PASSWORD", ""); // La contraseña para acceder a la base de datos
define("DATABASE", "DATOS"); // El nombre de la base de datos

// Intenta conectar a la base de datos
$conexion = mysqli_connect(HOSTNAME, USERNAME, PASSWORD, DATABASE);

// Verifica si la conexión fue exitosa
if ($conexion->connect_error) {
    // Si hubo un error en la conexión, termina la ejecución del script y muestra un mensaje de error
    die("Conexion fallida: " . $conexion->connect_error);
}

// Recupera los valores actualizados de la petición POST
$dvalorX = $_POST["dvalorX"];
$dvalorY1 = $_POST["dvalorY1"];
$dvalorY2 = $_POST["dvalorY2"];

// Prepara la consulta SQL para actualizar los datos en la base de datos
$consulta = "UPDATE valores SET valorY1='$dvalorY1', valorY2='$dvalorY2' WHERE valorX='$dvalorX'";

// Intenta ejecutar la consulta SQL
if ($conexion->query($consulta) === TRUE) {
    // Si la consulta fue exitosa, envía un mensaje de éxito
    echo json_encode(array("message" => "Datos actualizados correctamente"));
} else {
    // Si hubo un error, envía un mensaje de error
    echo json_encode(array("Error" => "Código de error: " . $conexion->error));
}

// Cierra la conexión a la base de datos
$conexion->close();
