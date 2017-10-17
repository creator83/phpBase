<?php
    include ("mysql.inc.php");

if (isset($_POST['addReg'])){

    $base = new Database ("localhost", "root", "","workbase");

        $sql = 'INSERT INTO region (name) VALUES ("'.$_POST['addReg'].'")';
        $base->query ($sql);
        echo $sql;
}
?>
