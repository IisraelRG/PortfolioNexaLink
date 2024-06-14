<?php
// routes/proyectRoutes.php
require_once '../controllers/ProyectController.php';
require_once '../config/database.php';
require_once '../models/Proyects.php';

$controller = new ProyectController($pdo);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $titulo = $_POST['Titulo'];
    $descripcion = $_POST['Descripcion'];
    $tag_1 = $_POST['Tag_1'];
    $tag_2 = $_POST['Tag_2'];
    $tag_3 = $_POST['Tag_3'];
    $tag_4 = $_POST['Tag_4'];
    $img = $_POST['Img'];

    echo "Datos recibidos: $titulo, $descripcion, $tag_1, $tag_2, $tag_3, $tag_4, $img"; // Mensaje de depuración

    if ($controller->addProyect($titulo, $descripcion, $tag_1, $tag_2, $tag_3, $tag_4, $img)) {
        header('Location: ../public/dashboard.php');
        exit();
    } else {
        echo "Error al agregar el proyecto.";
    }
}
?>