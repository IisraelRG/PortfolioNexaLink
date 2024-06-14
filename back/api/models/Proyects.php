<?php 
class Proyects {
    private $pdo;

    public function __construct($pdo) {
        $this->pdo = $pdo;
    }

    public function insertProyect($title, $description, $tag_1, $tag_2, $tag_3, $tag_4, $img) {
        try {
            $sql = "INSERT INTO proyectos (Titulo, Descripcion, Tag_1, Tag_2, Tag_3, Tag_4, Img) VALUES (:Titulo, :Descripcion, :Tag_1, :Tag_2, :Tag_3, :Tag_4, :Img)";
            $stmt = $this->pdo->prepare($sql);
            $stmt->bindParam(':Titulo', $title, PDO::PARAM_STR);
            $stmt->bindParam(':Descripcion', $description, PDO::PARAM_STR);
            $stmt->bindParam(':Tag_1', $tag_1, PDO::PARAM_STR);
            $stmt->bindParam(':Tag_2', $tag_2, PDO::PARAM_STR);
            $stmt->bindParam(':Tag_3', $tag_3, PDO::PARAM_STR);
            $stmt->bindParam(':Tag_4', $tag_4, PDO::PARAM_STR);
            $stmt->bindParam(':Img', $img, PDO::PARAM_STR);
            if($stmt->execute()) {
                echo "Inserción exitosa"; // Mensaje de depuración
                return true;
            } else {
                echo "Error en la ejecución de la consulta"; // Mensaje de depuración
                return false;
            }
        } catch(PDOException $e) {
            echo "Error: " . $e->getMessage(); // Mensaje de depuración
            return false;
        }
    } public function getAllProyects() {
        try {
            $stmt = $this->pdo->query("SELECT * FROM proyectos");
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            return [];
        }
    }
}
?>