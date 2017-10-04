<?php
class Database extends mysqli{
	private $login;
	private $password;
	private $host;
	private $base;
	function __construct ($h, $l, $p, $b) {
		$this->login = $l;
		$this->password = $p;
		$this->host = $h;
		$this->base = $b;
		parent::__construct ($h, $l, $p, $b);
		if ($this->connect_errno) {
			echo "не удалось подключится к базе";
			exit();
		}
		/* изменение набора символов на utf8 */
		if (!$this->set_charset("utf8")) {
			printf("Ошибка при загрузке набора символов utf8: %s\n", $mysqli->error);
			exit();
		}
		/*else {
			printf("Текущий набор символов: %s\n", $this->character_set_name());
		}*/
	}
	function open () {
		$this->__construct($this->host, $this->login, $this->password, $this->base);
		//parent::real_connect($host, $login, $password, $base);
	}
	function getData ($sql) {
		$buffer = array ();
		$this->open();
		$this->begin_transaction(MYSQLI_TRANS_START_READ_ONLY);
		if ($result = $this->query($sql)) {
				while ($row = $result->fetch_row()) {
					$buffer[] = $row[0];
				}
				$result->close();
			}
		$this->commit();
		$this->close();
		return $buffer;
	}

	function fillCombobox ($sql, $class="", $val="") {
		$arr = $this->getData ($sql);
		// echo "<select>";
		foreach ($arr as $index=>$value) {
			if ($val == ""){
				echo "<option class=$class value=$index>$value</option>";
			}
			else {
				if ($value == $val) {
					echo "<option class=$class value=$index selected>$value</option>";
				}
				else {
					echo "<option class=$class value=$index>$value</option>";
				}
			}
		}
		// echo "</select>";
	}

}

?>