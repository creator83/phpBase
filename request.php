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
        $sql = 'SELECT name FROM region ORDER BY name';
        $result = $base->getData ($sql);
        echo implode (',', $result);
    }
    if (isset($_POST['region']) and $_POST['region']!=''){
        $sql = 'SELECT p.name, s.name FROM state AS s 
        INNER JOIN region r ON r.id = s.region
        INNER JOIN prfxState p ON p.id = s.prfxState
        WHERE r.name = "'.$_POST['region'].'" ORDER BY s.name';
        echo implode (',', splitArray ($base->getData ($sql, 2)));
    }
    if (isset($_POST['state']) and $_POST['state']!=''){
        $state = explode (" ", $_POST['state']);
        $sql = 	'SELECT p.name, st.name FROM street AS st
        INNER JOIN state s ON s.id = st.state
        INNER JOIN prfxStreet p ON p.id = st.prfxStreet
        WHERE s.name = "'.$state[1].'" ORDER BY st.name';
        echo implode (',', splitArray ($base->getData ($sql, 2)));
    }
    if (isset($_POST['district'])){
        $sql = 'SELECT name FROM district ORDER BY name';
        $result = $base->getData ($sql);
        echo implode (',', $result);
    }
    if (isset($_POST['prfx-state'])){
        $sql = 'SELECT name FROM prfxstate';
        $result = $base->getData ($sql);
        echo implode (',', $result);
    }
    if (isset($_POST['prfx-street'])){
        $sql = 'SELECT name FROM prfxstreet';
        $result = $base->getData ($sql);
        echo implode (',', $result);
    }
}
?>
