<?php

?>
<!DOCTYPE html>
<head>
	<title>Создание ТУ</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="common.css" />
    <link rel="stylesheet" href="main_menu.css" />
    <link rel="stylesheet" href="data.css" />
    <link rel="stylesheet" href="substrate.css" />
    <script src="data.js"></script>
    <script src="httprqust.js"></script>
    <script src="elements.class.js"></script>
</head>
<body>
<?php
    include "substrate.inc.php";
    include "base.php";
?>

<section class="main-container">
    <!-- Основное меню -->
    <?php
        include "main_menu.php";
    ?>
    <div id="body-container">
        <!-- основное окно ввода ТУ -->
         <div id="create-tu">
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
                <div class="create-tu__second-line-container">
                    <!-- блок регионы -->
                    <div class="create-tu__second-line-container__element create-tu__second-line-container__element_region">
                        <div class="create-tu__label data__label_region">Регион:</div>
                        <!-- выпадающий список регионы -->
                        <div class="combobox-wrapper combobox-wrapper_region">
                            <input type="text" class="data-field data-field_region" name="region">
                            <div class="button-rotate elements-style"><div class="arrow">&gt;</div></div>
                            <ul class="list list_region">
                                <li>define_sys</li>
                                <li>adsfadsfasdf</li>
                                <li>dfhghhgh</li>
                                <li>jkjkjk</li>
                                <li>jkjkjk</li>
                            </ul>
                        </div>
                        <!-- кнопка открытия -->
                        <div class="button elements-style button_open"><div class="button_open-form">+</div></div>   
                        <!-- затемнение -->
                        <div class="black-wrapper"></div>
                        <!-- форма добавления региона -->
                        <div class="add-form add-form_region">
                            <div class="add-form__header">добавление региона</div>
                            <div class="button button_exit"></div>
                            <div class="create-tu-add-menu_second-line">
                                <input type="text" class="data-field data-field_add-region" name="add-region">
                                <ul class="button__container button-container_add-region">
                                    <li class="button add-region__button-add"><div class="elements-style">Добавить</div></li>
                                    <li class="button add-region__button-reset"><div class="elements-style">Очистить</div></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- блок населенный пункт -->
                    <div class="create-tu__second-line-container__element create-tu__second-line-container__element_state">
                        <div class="create-tu__label data__label_state">Нас. пункт:</div>
                        <!-- выпадающий список населённый пункт -->
                        <div class="combobox-wrapper combobox-wrapper_state">
                            <input type="text" class="data-field data-field_state" name="state">
                            <div class="button-rotate elements-style"><div class="arrow">&gt;</div></div>
                            <ul class="list list_state">
                            </ul>
                        </div>
                        <!-- кнопка открытия формы-->
                        <div class="button elements-style button_open"><div class="button_open-form">+</div></div>   
                        <!-- затемнение -->
                        <div class="black-wrapper"></div>
                        <!-- форма добавления населённого пункта -->
                        <div class="add-form add-form_state">
                            <div class="add-form__header">добавление населенного пункта</div>
                            <div class="button button_exit"></div>
                            <div class="create-tu-add-menu_second-line">
                                <input type="text" class="data-field data-field_const-region" name="const-region">
                                <!-- выпадающий список префикс населенных пунктов -->
                                <div class="combobox-wrapper combobox-wrapper_prfx-state">
                                    <input type="text" class="data-field data-field_prfx-state" name="prfx-state">
                                    <div class="button-rotate elements-style"><div class="arrow">&gt;</div></div>
                                    <ul class="list list_prfx-state">
                                    <li class="list__items">г.</li>
                                        <li class="list__items">с.</li>
                                        <li class="list__items">х.</li>
                                        <li class="list__items">п.</li>
                                        <li class="list__items">ст.</li>
                                        <li class="list__items">д.</li>
                                    </ul>
                                </div>
                                 <input type="text" class="data-field data-field_add-state" name="add-state">
                            </div>
                            <ul class="button__container button-container_add-region">
                                <li class="button add-state__button-add"><div class="elements-style">Добавить</div></li>
                                <li class="button add-state__button-reset"><div class="elements-style">Очистить</div></li>
                            </ul>
                        </div>      
                    </div>
                </div>    
                <!-- третья строка -->
                <div class="create-tu__third-line-container">
                    <!-- блок улицы -->
                    <div class="create-tu__third-line-container__element create-tu__third-line-container__element_street">
                        <div class="create-tu__label data__label_street">Улица:</div>
                        <!-- выпадающий список улицы-->
                        <div class="combobox-wrapper combobox-wrapper_street">
                            <input type="text" class="data-field data-field_street" name="street">
                            <div class="button-rotate elements-style"><div class="arrow">&gt;</div></div>
                            <ul class="list list_street">
                            </ul>
                        </div>
                        <!-- кнопка открытия формы-->
                        <div class="button elements-style button_open"><div class="button_open-form">+</div></div>   
                        <!-- затемнение -->
                        <div class="black-wrapper"></div>
                        <!-- форма добавления населённого пункта -->
                        <div class="add-form add-form_street">
                            <div class="add-form__header">добавление улицы</div>
                            <div class="button button_exit"></div>
                            <div class="create-tu-add-menu_second-line">
                                <input type="text" class="data-field data-field_const-state" name="const-state">
                                <!-- выпадающий список префикс улиц -->
                                <div class="combobox-wrapper combobox-wrapper_prfx-street">
                                    <input type="text" class="data-field data-field_prfx-street" name="prfx-street">
                                    <div class="button-rotate elements-style"><div class="arrow">&gt;</div></div>
                                    <ul class="list list_prfx-street">
                                        <li class="list__items">ул.</li>
                                        <li class="list__items">проезд</li>
                                        <li class="list__items">пр-т.</li>
                                        <li class="list__items">пер.</li>
                                    </ul>
                                </div>
                                 <input type="text" class="data-field data-field_street" name="add-street">
                            </div>
                            <ul class="button__container button-container_add-street">
                                <li class="button add-street__button-add"><div class="elements-style">Добавить</div></li>
                                <li class="button add-street__button-reset"><div class="elements-style">Очистить</div></li>
                            </ul>
                        </div>
                    </div>
                    <!-- блок номер дома -->
                    <div class="create-tu__third-line-container__element create-tu__third-line-container__element_house">
                        <div class="create-tu__label data__label_house">Дом:</div>
                        <input type="text" class="data-field data-field_house" name="house">
                    </div>
                    <!-- блок корпус -->
                    <div class="create-tu__third-line-container__element create-tu__third-line-container__element_corps">
                        <div class="create-tu__label data__label_corps">Корп:</div>
                        <input type="text" class="data-field data-field_corps" name="corps">
                    </div>
                    <!-- блок номер квартиры -->
                    <div class="create-tu__third-line-container__element create-tu__third-line-container__element_apartment">
                        <div class="create-tu__label data__label_apartment">Кв:</div>
                        <input type="text" class="data-field data-field_apartment" name="apartment">
                    </div>   
                    <!-- блок телефон -->
                    <div class="create-tu__third-line-container__element create-tu__third-line-container__element_phone">
                        <div class="create-tu__label data__label_phone">Телефон:</div>
                        <input type="text" class="data-field data-field_prfx-phone" name="prfx-phone">
                        <input type="text" class="data-field data-field_num-phone" name="num-phone">       
                    </div>
                </div>
                <!-- четвёртая строка -->
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
                    <div class="create-tu__fourth-line-container__element create-tu__fourth-line-container__element_kadastr">
                        <div class="create-tu__label data__label_kadastr">Кадастровый номер:</div>
                        <div class="create-tu__label data__label_kadastr-prfx">23:47:</div>
                        <input type="text" class="data-field data-field_kadastr-district" name="kadastr-district">
                        <input type="text" class="data-field data-field_kadastr-number" name="kadastr-number">
                    </div>
                    <div class="create-tu__fourth-line-container__element create-tu__fourth-line-container__element_address">
                        <div class="create-tu__label data__label_address">Адрес:</div>
                        <textarea class="data-field data-field_address" name="address" rows="10"></textarea>
                    </div>
                </div>
                <!-- пятая строка -->
                <div class="create-tu__five-line-container">
                     <input type="radio" class="data-field data-field_type-tu" name="type-tu" value"with">
                     <div class="create-tu__label create-tu__label_radio">С проектом</div>
                     <input type="radio" class="data-field data-field_type-tu" name="type-tu" value"without" checked>
                     <div class="create-tu__label create-tu__label_radio">Без проекта</div>
                </div>
                <!-- кнопки создания ту -->
                <ul class="button__container create-tu__button-container">
                    <li class="create-tu__button-add"><div class="button elements-style">Добавить</div></li>
                    <li class="create-tu__button-reset"><div class="button elements-style">Очистить</div></li>
                </ul>
         </div>
    </div>
</section>
</body>