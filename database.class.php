<?php
include "idatabase.class.php";
class Database implements IDatabase{
    const DB_NAME = "workbase";
    protected $_db;
	private $login;
	private $password;
	static private $_instance = null;
	private function __construct ($login, $password) {
        $this->login = $login;
        $this->password = $password;
        $this->_db = new mysqli("localhost", $this->login, $this->password, "workbase");
        if ($this->_db->connect_errno) {
            echo "не удалось подключится к базе";
            exit();
        }
        
    }
    private function __clone(){}
    private function setCharset (){
        /* изменение набора символов на utf8 */
        if (!$this->_db->set_charset("utf8")) {
            printf("Ошибка при загрузке набора символов utf8: %s\n", $mysqli->error);
            exit();
        }    
    }
    static function getInstance($login, $password){
        if(self::$_instance == null){
            self::$_instance = new Database($login, $password);
            
        }
        return self::$_instance;
    }
	private function open () {
        // $this->setCharset();
		// $this->__construct($this->host, $this->login, $this->password, $this->base);
        //parent::real_connect($host, $login, $password, $base);
        $this->_db->real_connect("localhost", $this->login, $this->password, "workbase");
	}
	function getData ($sql, $n=1) {
		$buffer = array ();
		$this->open();
		$this->_db->query("SET NAMES utf8 COLLATE utf8_unicode_ci");
		$this->_db->begin_transaction(MYSQLI_TRANS_START_READ_ONLY);
		if ($result = $this->_db->query($sql)) {
				while ($row = $result->fetch_row()) {
					for ($i=0; $i < $n; $i++) { 
						$buffer[] = $row[$i];
					}		
				}
				$result->close();
			}
		$this->_db->close();
		return $buffer;
	}
	function putData ($sql) {
		$this->open();
		$this->begin_transaction(MYSQLI_TRANS_START_READ_ONLY);
		if ($this->query($sql)===TRUE) {
			$this->commit();
			$this->close();
			return "выпонено";
		}
		$this->commit();
		$this->close();
		return "Ошибка";
	}
	function getData2 ($sql, $num=1) {
		$buffer = array ();
		$this->open();
		$this->begin_transaction(MYSQLI_TRANS_START_READ_ONLY);
		if ($result = $this->query($sql)) {
				while ($row = $result->fetch_row()) {
					$buffer[] = $row[0];
					$buffer[] = $row[1];
					// for ($i=0; $i < $num; $i++) { 
					// 	$buffer[] = $row[i];
					// }
					
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