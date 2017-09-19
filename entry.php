
<!DOCTYPE html>

<head>
	<title>Вход</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<link rel="stylesheet" href="entry.css" />

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
<?php
class User{
	public $name;
	public $login;
	public $password;

	function __construct ($n, $l, $p){
		$this->name = $n;
		$this->login = $l;
		$this->password = $p;

	}
	function showInfo (){
		echo "<p>Name:".$this->name."</p><br>";
		echo "<p>Login:".$this->login."</p><br>";
		echo "<p>Password:".$this->password."</p>";
		
	}
}
$user1 = new User ("John Smith", "john", "1234");
$user1->showInfo();
$user2 = new User ("Mike Doe", "mike", "5678");
$user2->showInfo();
$user3 = new User ("Fedya Pupkin", "fedya", "7890");
$user3->showInfo();

?>