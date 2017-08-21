
<!DOCTYPE html>

<head>
	<title>Вход</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<style>
		body{
			background:url("back.jpg") fixed no-repeat center;
			background-size:/*contain*/cover;			
			}
		form{		
			width:400px;
			height: 170px;
			margin-top: 80px;
			margin-right:auto;
			margin-left:auto;
			background: url("rect4136.png") no-repeat;
			font-weight: bold;
		}
		form label {
			clear:left;
			float: left;
			margin-top: 18px;
			margin-left: 20px;
			font-size: 1.3em;
			color: lightgray;
		}
		form input[type="text"] {
			float:right;
			margin-top: 20px;
			margin-right: 20px;
		}
		form input[type="password"]{
			clear: right;
			float:right;
			margin-right: 20px;
			margin-top: 20px;
		}
		form input[type="reset"]{
			clear: right;
			float:right;
			margin-right: 80px;
			margin-top: 40px;
		}
		form input[type="submit"]{
			clear: left;
			float: left;
			margin-left: 80px;
			margin-top: 40px;
		}

	</style>
</head>
<body>
	<form action="">
		<label>Имя пользователя: </label>
		<input type="text" name="login" value=""/><br/ >
		<label>Пароль: </label>
		<input type="password" name="pass"/><br/>
		<input type="submit" value="Подключится"/>
		<input type="reset" value="очистить"/>
	</form>
</body>
</html>