<?php
$sureName = $_POST['sureName'];
$firstName = $_POST['firstName'];
$middleName = $_POST['middleName'];
$phoneNumber;
$region;
$state;

function checkName ($name) {
	$name = trim ($name);
	echo "$name <br />";
	$name = strtolower($name);
	echo "$name <br />";
	$name = ucfirst ($name);
	echo "$name <br />";
	return $name;
}

function fillCombobox ($array) {
	echo "<select>";
	foreach ($array as $index=>$value) {
		echo "<option value=$index>$value</option>";
	}
	echo "</select>";
}

/*$database = new mysqli ("localhost", "root", "pass", "workSpace");
if ($database->connect_erno) {
	echo "не удалось подключится к базе";
}
$sql = "";
*/

echo "Youre surename: ".$sureName."<br />";
echo "Youre firstname: ".$firstName."<br />";
echo "Youre middlename: ".$middleName."<br />";
fillCombobox ($_POST);



?>