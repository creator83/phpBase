<?php

?>
<!DOCTYPE html>
<head>
	<title>Поиск ТУ</title>
	<meta charset="utf-8">
	<link rel="stylesheet" href="substrate.css" />
	<link rel="stylesheet" href="search_tu.css" />
    <script src="search_tu.js"></script>
    <script src="httprqust.js"></script>
    <script src="elements.class.js"></script>
</head>
<body>
<?php
    include "substrate.inc.php";
?>

<section class="main-container">
   <!-- Основное меню -->
   <?php
        include "main_menu.php";
    ?>
    <div id="body-container">
        <!-- основное окно ввода ТУ -->
         <div id="search-tu">
                <!-- первая строка -->
                <div class="create-tu__first-line-container">
                    <div class="label label_name">
                        <div class="label_sur-name">Фамилия:</div>
                        <div class="label_first-name">Имя:</div>
                        <div class="label_mid-name">Отчество:</div>
                    </div>
                    <div class="data data_name">
                        <input type="text" class="data-field data-field_sur-name" name="sur-name">
                        <input type="text" class="data-field data-field_first-name" name="first-name">
                        <input type="text" class="data-field data-field_mid-name" name="mid-name">
                    </div>  
                </div>
                <!-- вторая строка -->
                <div class="create-tu__fourth-line-container">
                    <div class="create-tu__fourth-line-container__element create-tu__fourth-line-container__element_district">
                        <div class="create-tu__label data__label_district">Район:</div>
                        <!-- выпадающий список районы-->
                        <div class="combobox-wrapper combobox-wrapper_district">
                            <input type="text" class="data-field data-field_district" name="district">
                            <div class="button-rotate elements-style"><div class="arrow">&gt;</div></div>
                            <ul class="list list_district">
                            </ul>
                        </div>
                    </div>
                    <!-- блок кадастровый номер -->
                    <div class="create-tu__fourth-line-container__element create-tu__fourth-line-container__element_kadastr">
                        <div class="create-tu__label data__label_kadastr">Кадастровый номер:</div>
                        <div class="create-tu__label data__label_kadastr-prfx">23:47:</div>
                        <input type="text" class="data-field data-field_kadastr-district" name="kadastr-district">
                        <input type="text" class="data-field data-field_kadastr-number" name="kadastr-number">
                    </div>
                </div>
                <!-- кнопки создания ту -->
                <ul class="button__container create-tu__button-container">
                    <li class="button create-tu__button-add"><div class="elements-style">Поиск</div></li>
                    <li class="button create-tu__button-reset"><div class="elements-style">Очистить</div></li>
                </ul>
         </div>
         <div class="separate">
         <div class="button elements-style button__separate"><div class="button-character">^</div></div> 
         </div>
         <div class="output-data">
             
         </div>
    </div>
</section>
</body>