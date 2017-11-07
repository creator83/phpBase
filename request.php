<?php
    include "base.php";

if ($_SERVER['REQUEST_METHOD'] == 'POST'){
    if (isset($_POST['region'])){
        $sql = 'SELECT name FROM region';
        $result = $base->getData ($sql);
        echo implode (',', $result);
    }
}
?>
