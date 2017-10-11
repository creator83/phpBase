<?php
require 'vendor/autoload.php';

// Перезапрашиваем страницу, чтобы избавиться от информации, переданной через форму
/*header('Location: ' . $_SERVER['PHP_SELF']);
exit;*/
/*
$sureName = $_POST['sureName'];
$firstName = $_POST['firstName'];
$middleName = $_POST['middleName'];
$numPhone = $_POST['phoneCod'].$_POST['phoneNumber'];
$numHouse = $_POST['houseNumber'];
$numCorp = $_POST['corpNumber'];
$numAp = $_POST['appNumber'];
$region;
$state;
$street;
$filePlace;
$typeTu;*/
$data = array (
	/*'sureName'=>'',
	'firstName'=>'',
	'middleName'=>'',
	'phoneCod'=>'',
	'phoneNumber'=>'',
	'numPhone'=>'',
	'numHouse'=>'',
	'numCorp'=>'',
	'numApp'=> '',
	'region'=>'',
	'state'=>'',
	'street'=>'',
	'filePlace'=>'',
	'typeTu'=>''*/
);
foreach ($_POST as $index => $value) {
	if (isset ($_POST[$index])) {
		$data [$index]= $value;
	}
}

define ('TEMPLATE_PATH', "D:\\Технические условия\\");
if (isset ($_POST)) {

}
class tuData {
	private $sureName;
	private $firstName;
	private $middleName;
	private $numPhone;
	private $numHouse;
	private $numCorp;
	private $numAp;
	private $region;
	private $state;
	private $street;
	private $fiePlace;
	private $typeTu;
	public $data = array (
		'sureName'=>'',
		'firstName'=>'',
		'middleName'=>'',
		'phoneCod'=>'',
		'phoneNumber'=>'',
		'numPhone'=>'',
		'numHouse'=>'',
		'numCorp'=>'',
		'numApp'=> '',
		'region'=>'',
		'state'=>'',
		'street'=>'',
		'filePlace'=>'',
		'typeTu'=>''
	);
	public function __construct () {

	}

	function setName ($data, $cont) {
		$cont = $data;
	}

	
}

$data = new tuData();
function checkName ($name) {
	$name = trim ($name);
	echo "$name <br />";
	$name = strtolower($name);
	echo "$name <br />";
	$name = ucfirst ($name);
	echo "$name <br />";
	return $name;
}

class Database {
}

function fillCombobox ($array) {
	echo "<select>";
	foreach ($array as $index=>$value) {
		echo "<option value=$index>$value</option>";
	}
	echo "</select>";
}
//mysql_query("SET NAMES cp1251"); 
$database = new mysqli ("localhost", "root", "","workbase");
if ($database->connect_errno) {
	echo "не удалось подключится к базе";
	exit();
}
$sql = "SELECT * FROM region";

/* изменение набора символов на utf8 */
if (!$database->set_charset("utf8")) {
    printf("Ошибка при загрузке набора символов utf8: %s\n", $mysqli->error);
    exit();
} else {
    printf("Текущий набор символов: %s\n", $database->character_set_name());
}

$res = array ();


function getData ($q, $conn) {
if ($result = $conn->query($q)) {
	$arr = array();
		while ($row = $result->fetch_row()) {
			$arr[] = $row[0];
		}
	
		$result->close();
	}
$conn->close();
}

if ($result = $database->query($sql)) {
	
		while ($row = $result->fetch_row()) {
			$res[] = $row[0];
		}
	
		
		$result->close();

	}



$database->close();


// $array1 = getData ($sql, $database);
// foreach ($array1 as $index => $value) {
// 	echo "index is: $index значение: $value <br />";
// }


fillCombobox ($res);



?>