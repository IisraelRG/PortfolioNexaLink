<?php
// controllers/ProyectController.php
require_once '../config/database.php';
require_once '../models/Proyects.php';

class ProyectController {
    private $proyectModel;

    public function __construct($pdo) {
        $this->proyectModel = new Proyects($pdo);
    }

    public function addProyect($titulo, $descripcion, $tag_1, $tag_2, $tag_3, $tag_4, $img) {
        return $this->proyectModel->insertProyect($titulo, $descripcion, $tag_1, $tag_2, $tag_3, $tag_4, $img);
    }
}
?>