<?php

    include "base.php";
    header('Content-type: text/html; charset=utf-8');
    function splitArray($arr){
        $temp = array_chunk ($arr, 2);
        $res = array();
        foreach ($temp as $index){
            $str="";
            foreach ($index as $value){
                $str .= $value." ";
            }
            $res[] = $str;
        }
        return $res;
    }
    define ('SUR_NAME',0);
    define ('FIRST_NAME',1);
    define ('MID_NAME',2);
    define ('REGION',3);
    define ('STATE',4);
    define ('STREET',5);
    define ('HOUSE',6);
    define ('CORP',7);
    define ('APP',8);
    define ('PRFX_PHONE',9);
    define ('NUM_PHONE',10);
    define ('DISTRICT',11);
    define ('DISTRICT_KADASTR',12);
    define ('NUM_KADASTR',13);
    define ('ADDRESS',14);


if ($_SERVER['REQUEST_METHOD'] == 'POST'){
    if (isset($_POST['region']) and $_POST['region']==''){
        $sql = 'SELECT name FROM region';
        $result = $base->getData ($sql);
        echo implode (',', $result);
    }
    if (isset($_POST['region']) and $_POST['region']!=''){
        $sql = 'SELECT prfx, name FROM stateReg WHERE region ="'.$_POST['region'].'"';
        echo implode (',', splitArray ($base->getData ($sql, 2)));
    }
    if (isset($_POST['state']) and $_POST['state']!=''){
        $state = explode (" ", $_POST['state']);
        $sql = 'SELECT prfxStreet, name FROM street WHERE stateReg ="'.$state[1].'"';
        echo implode (',', splitArray ($base->getData ($sql, 2)));
    }
    if (isset($_POST['district'])){
        $sql = 'SELECT name FROM district';
        $result = $base->getData ($sql);
        echo implode (',', $result);
    }
    if (isset($_POST['add-region'])){
        $sql = 'INSERT INTO region (name) VALUES ("'.$_POST['add-region'].'")';
        $result = $base->putData ($sql);
        echo $result;
    }
    if (isset($_POST['add-state'])){
        $arr = explode (',', $_POST['add-state']);
        $sql = 'INSERT INTO stateReg (name, region, prfx) VALUES ("'.$arr[0].'","'.$arr[1].'","'.$arr[2].'")';
        $result = $base->putData ($sql);
        echo $result;
    }
    if (isset($_POST['add-street'])){
        $arr = explode (',', $_POST['add-street']);
        $arr[1] = trim($arr[1]);
        $state = explode (' ', $arr[1]);
        $str='';
        for ($i=1;$i<count($state);++$i){
            $str .= $state[$i]." ";
        }
        $str = trim($str);
        $sql = 'INSERT INTO street (name, stateReg, prfxStreet) VALUES ("'.$arr[0].'","'.$str.'","'.$arr[2].'")';
        $result = $base->putData ($sql);
        echo $result;
    }
    if (isset($_POST['create-tu'])){
        $data = explode (',', $_POST['create-tu']);
        $numPhone = $data[PRFX_PHONE].$data[NUM_PHONE];
        $numKadastr = $data[DISTRICT_KADASTR].$data[NUM_KADASTR];
        /*$sql = 'INSERT INTO tu (nDate, firstName, midleName, sureName, numHouse, numAp, numPhone, reg, address, numKadastr, fileplace, typeTu, street) VALUES
                                ("'.$data[FIRST_NAME].'","'.$data[MID_NAME].'","'.$data[SUR_NAME].
                                '","'.$data[HOUSE].'","'.$data[APP].'","'.$numPhone.'","'.;
                                $data[DISTRICT].'","'.$data[ADDRESS].'","'.*/
    }
}
?>
