
<!DOCTYPE html>
<?php
	include ('combobox.inc.php');
	
?>

<head>
	<title>Регистрация ТУ</title>
	<meta charset="utf-8">
	<link rel="stylesheet" href="create_tu.css" />
	<script src="app.js"></script>
</head>
<body>
	<div id="fon">
		
		<div class="form__add-reg">
			<div class="close-button"></div>
			<input type="text" class="data__addreg" id="addReg" autocomplete="off">
			<div class="form__add-reg_button-wrapper">
				<div class="buttonContainer">
					<div class="button-wrapper" id="addReg-button">
						<div class="buttons_label">Добавить</div>
					</div>
				</div>
				<div class="buttonContainer">
					<div class="button-wrapper" id="clearReg-button">
					<div class="buttons_label">Очистить</div>
				</div>
				</div>	
			</div>
				<!-- <input id="closeReg" type="submit" value="Добавить"  class="add-reg-button">
				<input  type="reset" value="Очистить" class="add-reg-button"> -->
		</div>
	</div>

	<form action="" method="post" >
		<fieldset class="personalData">
			<legend>Данные заявителя</legend>

				<div class="personalData personalData__label">Фамилия:</div>
				<div class="personalData personalData__label">Отчество:</div>
				<div class="personalData personalData__label">Имя:</div>
				<div class="personalData personalData__label personalData__label_phone">Телефон:</div>
	
				<input type="text" class="personalData personalData__fio" name="sureName">
				<input type="text" class="personalData personalData__fio" name="firstName">
				<input type="text" class="personalData personalData__fio" name="middleName">
				<input type="text" class="personalData personalData__phoneCode" maxlength="3", name="phoneCod">
				<input type="text" class="personalData personalData__phoneNumber" maxlength="7", name="phoneNumber">
				
				<div class="personalData personalData__label personalData__label_secondLine personalData__label_region">Регион:</div>
				<div class="personalData personalData__label personalData__label_secondLine personalData__label_state">Населённый пункт:</div>
							
				<div class="personalData personalData__secondLine">
					<select id="reg" name="reg" class="personalData personalData__secondLine personalData__secondLine__region">
						<?php
							$sql = "SELECT * FROM region";
							createCombobox ($sql, "region", "Краснодарский край");
						?>
					</select>
					<input type="button" id="openReg" name="regButton" class="personalData personalData__secondLine personalData__button" value="+">
					<select id="state" name="state" class="personalData personalData__secondLine personalData__secondLine__state">
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
					
				<div class="personalData personalData__thirdLine">
					<select id="street" class="personalData personalData__thirdLine personalData__thirdLine_street ">
					</select>
					<input type="button" class="personalData personalData__button" value="+">
					<input type="text" class="personalData personalData__thirdLine personalData__houseNumber", name="houseNumber">
					<input type="text" class="personalData personalData__thirdLine personalData__corpNumber", name="corpNumber">
					<input type="text" class="personalData personalData__thirdLine personalData__appNumber", name="appNumber">
				</div>
		</fieldset>


		<fieldset class="landData">
			<legend>Информация об участке</legend>
			<div class="landData__wrapp">
				<div class="landData__district__wrapp">
					<div class="landData__label landData__label_district">Район:</div>
					<select class="landData__data__district ">
					<?php
						$sql = "SELECT name FROM district";
						createCombobox ($sql, "state");
					?>
					</select>
				</div>
				<div class="landData__kadastr__wrapp">
					<span class="landData__label landData__label_1stline">Кадастровый номер:</span> 
					<lebel class="landData__label landData__secondline">23:47:</lebel>
					<input type="text" class="landData__secondline landData__label landData__data_quarter" maxlength="7">
					<lebel class="landData__secondline landData__label landData__kadastr_dot">:</lebel>
					<input type="text" class="landData__secondline landData__label landData__data_number" maxlength="4">
	
				</div>
				<div class="landData__address_wrapp">
					<span class="landData__label">Адрес:</span> 
					<textarea rows="3" cols="24" class="landData__address_data"  autocomplete="off"></textarea>
				</div>
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