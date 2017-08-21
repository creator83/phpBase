<?php

	?>
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ru" lang="ru">
<head>
	<title>Вход</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<style>
		body{
			background:url("back.jpg") fixed no-repeat center;
			background-size:/*contain*/cover;			
			}
		.field{
				float: right;
				margin-right: 20px;
				/*margin-top: 20 px;*/
			}
		.lbl{
			font-weight: bold;
			color: white;
			float: left;	
			margin-left:20px;
			/*margin-top: 20 px;*/
		}
		#pa{
			morgin-top: 0px;
			margin-bottom: 0px;
		}
		
		#lo{
			
			margin-bottom: 0px;
		}
		
		form{
			/*border: 3px solid green;*/
			width:400px;
			margin-right:auto;
			margin-left:auto;
			background: url("rect4136.png") no-repeat;
		}
		.buttons{
			margin-top: 20px;
			/*display: inline-block;*/
		}
		#connect{
			/*float: left;*/
		}
		#clear{
			/*float: right;*/
		}
		#passL{
			margin-top: 5px;
		}
	</style>
</head>
<body>

	<form action="">
		<label class="lbl" id="nameL">Имя пользователя: </label>
		<input id="lo" class="field" type="text" name="login" value=""/><br/>
		<label class="lbl" id="passL">Пароль: </label>
		<input id="pa" class="field" type="password" name="pass"/><br/>
		<input id="connect" class="buttons" type="submit" value="Подключится"/>
		<input id="clear" class="buttons" type="reset" value="очистить"/>
	</form>

	<?php

	?>
</body>
</html>