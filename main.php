
<!DOCTYPE html>

<head>
	<title>Вход</title>
	<meta charset=utf-8">
	<link rel="stylesheet" href="main.css" />

</head>
<body>
	<section>
		<div class="container">
			<a href="#" class="container_head container_head__ctu" >Создание&nbsp;ТУ</a>
		</div>
		<div class="container">
				<a href="#" class="container_head" >Поиск&nbsp;ТУ</a>
		</div>
		<div class="container">
				<a href="#" class="container_head" >Создание&nbsp;писем</a>
		</div>
		<div class="container dummy">
		</div>
		<div class="wrapper">
			<div class="createTu">
				<p>Создание технических условий</p>
			</div>
			<div class="searchTu">
				<p>Поиск технических условий</p>
			</div>
			<div class="createLetters">
				<p>Создание писем</p>
			</div>
		</div>
	</section>
	<script type="text/javascript">
		document.querySelector('.container_head__ctu') = function () {
			document.getElementsByClassName('wrapper').style.display = "none";
		}
	</script>
</body>
</html>
<?php

?>