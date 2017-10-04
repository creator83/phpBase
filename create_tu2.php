<?php
include ('mysql.inc.php');
$base = new Database ("localhost", "root", "","workbase");
$sql = "SELECT * FROM region";
echo "<select>";
$base->fillCombobox ($sql);
echo "</select>";
?>