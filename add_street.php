<?php
/*
** Скрипт добавляет записи в данные регионы
*/
include "base.php";
// Читаем данные, переданные в POST
$rawPost = file_get_contents('php://input');

// Заголовки ответа
header('Content-type: text/plain; charset=utf-8');
header('Cache-Control: no-store, no-cache');

// Если данные были переданы...
if ($rawPost){
	// Разбор пакета JSON
    $record = json_decode($rawPost);
    $state = explode('.', $record->state);

    $sql = 'INSERT INTO street (name, state, prfxStreet) 
            VALUES ("'.$record->street.'", (SELECT id from state WHERE name = "'.trim($state[1]).'"), (SELECT id from prfxStreet WHERE name = "'.$record->prfxStreet.'"))';
    echo $base->putData ($sql);
}
?>
