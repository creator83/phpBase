
<!DOCTYPE html>
<?php
	include ('combobox.inc.php');
	
?>

<head>
	<title>Регистрация ТУ</title>
	<meta charset="utf-8">
	<link rel="stylesheet" href="create_tu.css" />

</head>
<body>
	<form action="create_tu.php" method="post" >
		<fieldset class="personalData">
			<legend>Данные заявителя</legend>

				<div class="personalData personalData__label">Фамилия:</div>
				<div class="personalData personalData__label">Отчество:</div>
				<div class="personalData personalData__label">Имя:</div>
				<div class="personalData personalData__label personalData__label_phone">Телефон:</div>
	
				<input type="text" class="personalData personalData__fio" name="sureName">
				<input type="text" class="personalData personalData__fio" name="firstName">
				<input type="text" class="personalData personalData__fio" name="middleName">
				<input type="text" class="personalData personalData__phoneCode" maxlength="3">
				<input type="text" class="personalData personalData__phoneNumber" maxlength="7">
				
				<div class="personalData personalData__label personalData__label_secondLine personalData__label_region">Регион:</div>
				<div class="personalData personalData__label personalData__label_secondLine personalData__label_state">Населённый пункт:</div>
							
				<div class="personalData personalData__secondLine">
					<select id="reg" class="personalData personalData__secondLine personalData__secondLine__region" onchange="foo()">
						<?php
							$sql = "SELECT * FROM region";
							createCombobox ($sql, "region", "Краснодарский край");
						?>
					</select>
					<script src="app.js"></script>
					<input type="button" class="personalData personalData__secondLine personalData__button" value="+">
					<select class="personalData personalData__secondLine personalData__secondLine__state">
						<?php
							$sql = "SELECT name FROM statereg WHERE region = 'Краснодарский край'";
							createCombobox ($sql, "state");
						?>
					</select>
					<input type="button" class="personalData personalData__secondLine personalData__button" value="+">
				</div>	

					<div class="personalData personalData__label personalData__label_thirdLine personalData__label_street">Улица:</div>
					<div class="personalData personalData__label personalData__label_thirdLine personalData__label_house">Дом:</div>
					<div class="personalData personalData__label personalData__label_thirdLine personalData__label_corp">Корп:</div>
					<div class="personalData personalData__label personalData__label_thirdLine personalData__label_app">кв:</div>
					
				<div class="personalData personalData__thirdLine personalData__thirdLine">
					<select class="personalData personalData__thirdLine personalData__thirdLine_street ">
						<option value="1">dummy1</option>
						<option value="2">dummy2</option>
					</select>
					<input type="button" class="personalData personalData__button" value="+">
					<input type="text" class="personalData personalData__thirdLine personalData__houseNumber">
					<input type="text" class="personalData personalData__thirdLine personalData__corpNumber">
					<input type="text" class="personalData personalData__thirdLine personalData__appNumber">
				</div>
		</fieldset>


		<fieldset class="landData">
			<legend>Информация об участке</legend>
			<div class="wrap1">
				<div class="landData__label landData__label_state">Район:</div>
				<div class="landData__label landData__label_kadastr">Кадастровый номер:</div>
				
				
				<div class="landData__secondLine">
					<select class="landData__district landData__secondLine">
						<option value="1">dummy1</option>
						<option value="2">dummy2</option>
					</select>
					<lebel class="landData__secondLine landData__kadastr">23:47:</lebel>
					<input type="text" class="landData__secondLine landData_quarter" maxlength="7">
					<lebel class="landData__secondLine landData__kadastr_dot">:</lebel>
					<input type="text" class="landData__secondLine landData_number" maxlength="4">
				</div>	
			</div>
			<div class="wrap2">
				<div class="landData__label landData__label_address">Адрес:</div>
				<textarea rows="3" cols="24" class="landData__secondLine landData__address"></textarea>
			</div>
			
		</fieldset>
			<div class="radio">
				<input type="radio" name="project" value="wProject"><span>С проектом</span><br />
				<input type="radio" name="project" value="woProject" checked><span>Без проекта</span>
			</div>
			<div>
				<input type="submit" value="Создать"  class="main-button">
				<input type="reset" value="Очистить" class="main-button">
			</div>

	</form>
</body>
</html>