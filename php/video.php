<!DOCTYPE html>
<html lang="en">
    <head>
        <!-- META TAGS -->
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- TITLE -->
        <title>Video</title>

        <!-- CSS STYLES -->
        <link href="../css/bootstrap.min.css" rel="stylesheet">
        <link href="../css/style.css" rel="stylesheet">
    </head>
    <body>
        <?php
        include_once 'videoHtml.php';

        $name = htmlspecialchars($_GET['name']);
        $sex = htmlspecialchars($_GET['sex']);

        if($sex == 'Muž'){
            drawMaleVideo();
        } else{
            drawFemaleVideo();
        }

        ?>
        <!-- SCRIPTS -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
        <script src="../js/bootstrap.min.js"></script>
        <script src="../js/videoService.js"></script>
    </body>
</html>