<?php
/*
** Скрипт добавляет записи в технические условия
*/
header('Content-type: text/plain; charset=utf-8');
header('Cache-Control: no-store, no-cache');
include "base.php";
require 'vendor/autoload.php';

// Читаем данные, переданные в POST
$rawPost = file_get_contents('php://input');

// Заголовки ответа
$template = array(
    'без проекта'=>'without.docx',
    'с проектом'=>'with.docx');

// Если данные были переданы...
if ($rawPost){
	// Разбор пакета JSON
    $record = json_decode($rawPost);
    
    $street1 = explode('.', $record->street);
    $district = $base->getData ('SELECT id from district WHERE name = "'.$record->district.'"');
    $typetu = $base->getData ('SELECT id from typeTu WHERE name = "'.$record->typetu.'"');
    $street = $base->getData('SELECT id from street WHERE name = "'.trim($street1[1]).'"');
    $location = $base->getData('SELECT p.name, s.name, r.name FROM state AS s
	INNER JOIN region r ON r.id = s.region
	INNER JOIN prfxState p ON p.id = s.prfxState
	INNER JOIN street ON street.state = s.id
    WHERE street.id = '.$street[0], 3);

    $document = new \PhpOffice\PhpWord\TemplateProcessor($template[$record->typetu]);
    $filePlace = 'D:\\\\Технические условия\\\\'.$record->district.'\\\\';

    $sql = 'INSERT INTO tu (nDate, firstname, middleName, sureName, street, numKorp, numHouse, 
                numAp, numPhone, district, address, numKadastr, filePlace, typeTu, additional) 
            VALUES (CURDATE(), "'.$record->firstName.'", "'.$record->midName.'",
            "'.$record->sureName.'",'.$street[0].',"'.$record->korp.'", "'.$record->house.'", "'.$record->ap.'", "'.$record->phone.'",'
            .$district[0].", '".$record->address."', '".$record->kadastr."', '".$filePlace."',
             ".$typetu[0].', '.$record->additional.')';
    $result = $base->putData ($sql);
    // ФИО
    $document->setValue('name1', $record->sureName.' '.mb_substr($record->firstName, 0, 1, "UTF-8").'.'.mb_substr($record->midName, 0, 1, "UTF-8").'.'); 

    $document->setValue('state', $location[0].' '.$location[1].','); //дата договора
    // улица
     $address=$record->street.', д.'.$record->house;
    if ($record->korp!=''){
        $address .= ', корп. '.$record->korp;
    }
    if ($record->ap!=''){
        $address .= ', кв. '.$record->ap;
    }
    $document->setValue('street', $address);
    
    $document->setValue('address1', $location[2].', '.$location[0].' '.$location[1].', '.$address.'.'); //дата договора
    
    if ($record->district == 'Новороссийск'||$record->district == 'Восточный район'||
    $record->district == 'Центральный район'|| $record->district == 'Южный район'||
    $record->district == 'Приморский район') {
        $document->setValue('address2', 'г. Новороссийск, '.$record->address);
    }
    else{
        $document->setValue('address2', 'г. Новороссийск, '.$record->district.', '.$record->address);
    }
    $today = date('_d_m_y');
    $document->setValue('kadastr', mb_substr($record->kadastr, 0,7,"UTF-8").':'.mb_substr($record->kadastr, 7, iconv_strlen($record->kadastr)-1,"UTF-8"));
    $document->saveAs($filePlace.$record->sureName.$today.'.docx');
    echo $result;

}
?>