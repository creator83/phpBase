
<!DOCTYPE html>

<head>
	<title>Вход</title>
	<meta charset="utf-8">
	<link rel="stylesheet" href="substrate.css" />
	<link rel="stylesheet" href="main.css" />
	<script src="main.js"></script>
</head>
<body>
<?php
	include "substrate.inc.php";
	include "base.php";
?>
<section>
<div id="substrate"></div>
<form action="" method="post">
	<div class="flex-container">
		<div class="flex-container__part">
			<label>Имя пользователя: </label>
			<label>Пароль: </label>
			<input type="submit" value="Подключится" id="sButton"/>
			
		</div>
		<div class="flex-container__part">
			<input type="text" name="login" value="" autocomplete="off"/>
			<input type="password" name="pass" autocomplete="off"/>
			<input type="reset" value="очистить" id="cButton"/>
		</div>
	</div>
</form>
</section>
<?php
	if ($_SERVER["REQUEST_METHOD"] == "POST"){
		header ("Location: data.php");
	}
	
?>
</body>
</html>
<?php

?>