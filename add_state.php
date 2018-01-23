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
    $sql = 'INSERT INTO state (name, region, prfxState) 
            VALUES ("'.$record->state.'", (SELECT id from region WHERE name = "'.$record->region.'"), (SELECT id from prfxState WHERE name = "'.$record->prfxState.'"))';
    echo $base->putData ($sql);
}
?>
