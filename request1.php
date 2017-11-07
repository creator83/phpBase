<?php
    include ("mysql.inc.php");
function setState () {
}
$func = array (
    "state"=>setState()
);

$arr = array (
    "one"=>"thisOne",
    "two"=>"thisTwo",
    "three"=>"thisThree"
);
if (isset($_POST['reg']) || isset($_POST['state'])|| isset($_POST['addReg'])){

    $base = new Database ("localhost", "root", "","workbase");
    if (isset($_POST['reg'])) {
        $sql = 'SELECT name FROM statereg WHERE region ="'.$_POST['reg'].'"';
        $result = $base->getData ($sql);
        echo implode (',', $result);
    }
    else if (isset($_POST['state'])){
        $sql = 'SELECT prfxStreet, name FROM street WHERE stateReg ="'.$_POST['state'].'"';
        $result = $base->getData2 ($sql, 2);
        $array1 = array ();
        $array2 = array ();
        $array = array ();
        for ($i=0; $i < count($result) ; $i++) { 
            if ($i % 2 == 0) {
                $array1[] = $result[$i];
            }
            else {
                $array2[] = $result[$i];
            }
        }
        for ($i=0; $i < count ($array1); $i++) { 
            $array [] = $array1[$i]." ".$array2[$i];
        }
        echo implode (',', $array);
    }
    else if (isset($_POST['addReg'])){
        $sql = 'INSERT INTO region (name) VALUE ("'.$_POST['addReg'].'")';
        
        echo $sql;
    }
}
?>
