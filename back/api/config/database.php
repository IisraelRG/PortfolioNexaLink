<?php 
    //Configuracion de la base de datos
    $host = '193.203.166.106';
    $db = 'u363698658_NexaLinkPro';
    $user = 'u363698658_NexaIlab';
    $pass = 'Mejorandoelmundo123.';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db;charset=utf8mb4", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Conexión exitosa";
} catch (PDOException $e) {
    die("Could not connect to the database $db :" . $e->getMessage());
}
?>