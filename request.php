<?php
    include "base.php";
    header('Content-type: text/html; charset=utf-8');
if ($_SERVER['REQUEST_METHOD'] == 'POST'){
    if (isset($_POST['region']) and $_POST['region']==''){
        $sql = 'SELECT name FROM region';
        $result = $base->getData ($sql);
        echo implode (',', $result);
    }
    if (isset($_POST['region']) and $_POST['region']!=''){
        $sql = 'SELECT name FROM statereg WHERE region ="'.$_POST['region'].'"';
        $result = $base->getData ($sql);
        echo implode (',', $result);
    }
    if (isset($_POST['state']) and $_POST['state']!=''){
        $sql = 'SELECT name FROM street WHERE stateReg ="'.$_POST['state'].'"';
        $result = $base->getData ($sql);
        echo implode (',', $result);
    }
    if (isset($_POST['district'])){
        $sql = 'SELECT name FROM district';
        $result = $base->getData ($sql);
        echo implode (',', $result);
    }
}
?>
