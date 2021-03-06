<?php
include "IGbookDB.class.php";
class GbookDB implements IGbookDB{
  const DB_NAME = "gbook.db";
  protected $_db;

  public function __construct () {
    $this->_db = new SQLiteDatabase (self::DB_NAME);
    if (!file_exists(self::DB_NAME)){
      $sql = "CREATE TABLE...";
      $this->_db->query ($sql);
    }
    else{
      
    }
  }
  
  function __destruct () {
    unset ($this->_db);
  }
  function clearData ($data) {
    $data = strip_tags ($data);
    $data = trim ($data);
    return $data;
  }
  function savePost($name, $email, $msg){
    $ip = $_SERVER ["REMOTE_ADDR"];
    $dt = time ();
    $sql = "INSERT INTO ...";
    $this->_db->query ($sql);
  }
	function getAll(){

  }
	function deletePost($id){

  }

}

$gbook = new GbookDB ();

/*
ЗАДАНИЕ 1
- Создайте класс GbookDB наследующий интерфейс IGbookDB
- Создайте константу класса DB_NAME и присвойте ей значение gbook.db - имя базы данных
- Создайте закрытое свойство $_db для хранения объекта соединения с базой данных
- Создайте конструктор, в котором выполняется подключение к базе данных
- Создайте деструктор, в котором выполняется закрытие соединения с базой данных
- Создайте временный объект gbook, экземпляр класса GbookDB
- Для проверки работоспособности кода запустите данный файл в браузере и убедитесь, что файл gbook.db создан
- Удалите файл gbook.db
*/

/*
ЗАДАНИЕ 2
- Измените конструктор так, чтобы в нём выполнялась проверка, существует ли база данных на следующих условиях: 
  Если базы данных не существует, создайте ее и выполните SQL-операторы для добавления таблицы (файл gbook.sql). 
  В противном случае, выполняйте подключение к существующей базе данных
- Для проверки работоспособности кода запустите данный файл в браузере и убедитесь, что файл gbook.db создан  
*/

/*
ЗАДАНИЕ 3
- Опишите метод savePost. Смотрите описание метода в интерфейсе IGbookDB
- Получите данные о текущих дате и времени
- Получите данные об IP адресе пользователя	
- Сформируйте строку запроса на добавление новой записи
- Добавьте новую запись в таблицу msgs	
*/

/*
ЗАДАНИЕ 4
- Опишите метод getAll. Смотрите описание метода в интерфейсе IGbookDB
- Сформируйте строку запроса на выборку всех данных из таблицы msgs в обратном порядке
- Получите и верните результат запроса
*/

/*
ЗАДАНИЕ 5
- Опишите метод deletePost. Смотрите описание метода в интерфейсе IGbookDB
- Сформируйте строку запроса на удаление новой записи
- Удалите запись из таблицы msgs	
*/

/*
ЗАДАНИЕ 6 (Если останется время)
- Опишите в конструкторе, а также в методах getAll, savePost и deletePost блок try-catch
- Создайте исключения на ошибки при выполнении SQL-запросов	
*/
?>