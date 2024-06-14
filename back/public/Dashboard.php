<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <link rel="stylesheet" href="css/styles.css">
</head>

<body>
    <h1>Dashboard</h1>
    <form action="../api/routes/proyectRoutes.php" method="POST">
        <label for="Titulo">Name:</label>
        <input type="text" id="titulo" name="Titulo" required>
        <br>
        <label for="descripcion">Descripcion:</label>
        <input type="text" id="descripcion" name="Descripcion" required>
        <br>
        <label for="Titulo">Name:</label>
        <input type="text" id="titulo" name="Tag_1" required>
        <br>
        <label for="Titulo">Name:</label>
        <input type="text" id="titulo" name="Tag_2" required>
        <br>
        <label for="Titulo">Name:</label>
        <input type="text" id="titulo" name="Tag_3" required>
        <br>
        <label for="Titulo">Name:</label>
        <input type="text" id="titulo" name="Tag_4" required>
        <br>
        <label for="Titulo">Name:</label>
        <input type="text" id="titulo" name="Img" required>
        <br>
        <button type="submit">Add User</button>
    </form>
    <h2>Users</h2>
    <ul>
        <?php
         require_once '../api/config/database.php';
        require_once '../api/models/Proyects.php';

        $proyectModel = new Proyects($pdo);
        $proyects = $proyectModel->getAllProyects();

        foreach ($proyects as $proyect) {
            echo "<li>{$proyect['Titulo']} ({$proyect['Descripcion']})</li>";
        }
        ?>
    </ul>
</body>

</html>