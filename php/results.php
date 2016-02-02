<?php

include 'DBSettings.php';

if(isset($_POST['firstName']) && isset($_POST['surName']) && isset($_POST['jumpHeight'])){
    $statement = $pdo->prepare('INSERT INTO savedresults (firstName, surName, email, tel, sex, jumpHeight)
                                VALUES (?, ?, ?, ?, ?, ?)');
    $statement->execute(array($_POST['firstName'], $_POST['surName'], $_POST['email'], $_POST['tel'], $_POST['sex'], $_POST['jumpHeight']));
}

if(isset($_POST['getResultsAsHTML'])){
    $statement = $pdo->prepare('SELECT * FROM savedresults
                                ORDER BY jumpHeight
                                DESC LIMIT 10');
    $statement->execute();
    $data = $statement->fetchAll();

    $finalDataString = '<div class="list-group">';

    foreach($data as $row){
        $finalDataString = $finalDataString . '<a class="list-group-item"><h4 class="list-group-item-heading">' . $row['jumpHeight'] . '</h4><p class="list-group-item-text">' . $row['firstName'] . ' ' . $row['surName'] . '</p></a>';
    }

    $finalDataString = $finalDataString . '</div>';
    echo $finalDataString;
}

if(isset($_POST['searchWords'])){
    $words = explode(" ", $_POST['searchWords']);
    $finalResults = [];

    foreach($words as $word){
        $statement = $pdo->prepare('SELECT * FROM savedresults
                                    WHERE firstName LIKE "%' . $word . '%"
                                    OR surName LIKE "%' . $word . '%"
                                    OR email LIKE "%' . $word . '%"
                                    OR tel LIKE "%' . $word . '%"');
        $statement->execute();

        $data = $statement->fetchAll();
        foreach($data as $row){
            if(!in_array($row, $finalResults)) {
                $finalResults[] = $row;
            }
        }
    }
    $finalDataString = '<table class="table table-striped"><tr><td><b>Jméno</b></td><td><b>Příjmení</b></td><td><b>Doba v milisekundách</b></td></tr>';

    foreach($finalResults as $row){
        $finalDataString = $finalDataString . '<tr><td>' . $row['firstName'] . '</td><td>' . $row['surName'] . '</td><td>' . $row['jumpHeight'] . '</td></tr>';
    }

    $finalDataString = $finalDataString . '</table>';
    echo $finalDataString;
}