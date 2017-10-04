<?php
include ('mysql.inc.php');

function createCombobox ($sql, $class="", $val="") {
	$base = new Database ("localhost", "root", "","workbase");
	$base->fillCombobox ($sql, $class, $val);
}

?>