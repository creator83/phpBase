<?php

?>
<!DOCTYPE html>
<head>
	<title>Данные</title>
	<meta charset="utf-8">
	<link rel="stylesheet" href="substrate.css" />
	<link rel="stylesheet" href="data.css" />
    <!-- <script src="lists.class.js"></script> -->
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
    <!--  -->
    <ul class="major-menu">
        <li class="elements-style major-menu__elements">
            <a href="#">ту</a>
            <ul class="sub-menu-container-header">
                <li class="elements-style major-menu-header"><a href="#">создание ту</a></li>
                <li class="elements-style major-menu-header"><a href="#">просмотр ту</a></li>
            </ul>
        </li>
        <li class="elements-style major-menu__elements"><a href="#">письма</a></li>
        <li class="elements-style major-menu__elements"><a href="#">объекты</a></li>
        <li class="elements-style major-menu__elements"><a href="#">отчёты</a></li>
    </ul>
    <div id="body-container">
        <!-- основное окно ввода ТУ -->
         <div id="create-tu">
                <!-- первая строка -->
                <div class="create-tu__line-container create-tu__first-line-container">
                    <div class="create-tu__first-line-container__element create-tu__first-line-container__element_sur-name">
                        <div class="create-tu__label data__label_sur-name">Фамилия:</div>
                        <input type="text" class="create-tu__data create-tu__data_sur-name" name="sur-name">
                    </div>  
                    <div class="create-tu__first-line-container__element create-tu__first-line-container__element_first-name">                  
                        <div class="create-tu__label data__label_first-name">Имя:</div>
                        <input type="text" class="create-tu__data create-tu__data_first-name" name="first-name">
                    </div>
                    <div class="create-tu__first-line-container__element create-tu__first-line-container__element_mid-name">
                        <div class="create-tu__label data__label_mid-name">Отчество:</div>                    
                        <input type="text" class="create-tu__data create-tu__data_mid-name" name="mid-name">
                   </div> 
                </div>
                <!-- вторая строка -->
                <div class="create-tu__line-container create-tu__second-line-container">
                    <!-- блок регионы -->
                    <div class="create-tu__second-line-container__element create-tu__second-line-container__element_region">
                        <div class="create-tu__label data__label_region">Регион:</div>
                        <!-- выпадающий список регионы -->
                        <div class="combobox-wrapper combobox-wrapper_region">
                            <input type="text" class="create-tu__data create-tu__data_region" name="region">
                            <div class="button-rotate elements-style"><a href="" class="arrow">&gt;</a></div>
                            <ul class="list list_region">
                            </ul>
                        </div>
                        <!-- контейнер формы добавления региона -->
                        <div class="add-form__wrapper add-form__wrapper_region">
                            <!-- кнопка открытия -->
                            <div class="button elements-style button_open"><a href="" class="button_open-form">+</a></div>
                            <!-- затемнение -->
                            <div class="black-wrapper"></div>
                                <!-- форма добавления региона -->
                                <div class="add-form add-form_region">
                                    <div class="add-form__header">добавление региона</div>
                                    <div class="button button_exit"></div>
                                    <div class="create-tu-add-menu_second-line">
                                        <input type="text" class="data-field data-field_add-region" name="add-region">
                                        <ul class="button__container button-container_add-region">
                                            <li class="button add-region__button-add"><a href="#" class="elements-style">Добавить</a></li>
                                            <li class="button add-region__button-reset"><a href="#" class="elements-style">Очистить</a></li>
                                        </ul>
                                    </div>
                                </div>
                        </div>
                    </div>    
                    <!-- блок населенный пункт -->
                    <div class="create-tu__second-line-container__element create-tu__second-line-container__element_state">
                        <div class="create-tu__label data__label_state">Нас. пункт:</div>
                        <!-- выпадающий список населённый пункт -->
                        <div class="combobox-wrapper combobox-wrapper_state">
                        <input type="text" class="create-tu__data create-tu__data_state" name="state">
                            <div class="button-rotate elements-style"><a href="" class="arrow">&gt;</a></div>
                            <ul class="list list_state">
                            </ul>
                        </div>
                        <!-- контейнер формы добавления населённого пункта -->
                        <div class="add-form__wrapper add-form__wrapper_state">
                            <div class="button button_add__wrapper button_add__wrapper_state">
                                <div class="button_add">+</div>
                            </div>
                            <div class="black-wrapper">
                                <!-- форма добавления населённого пункта -->
                                <div class="add-form create-tu-add-menu create-tu-add-menu_state">
                                <div class="create-tu-add-menu__header create-tu-add-menu__header_state">Населённый пункт</div>
                                <div class="button_exit"></div>
                                <div class="create-tu-add-menu_second-line">
                                    <input type="text" disabled class="create-tu__data create-tu__data_const-region" name="const-region">
                                    <div class="combobox-wrapper combobox-wrapper_prfx-state">
                                        <input type="text" class="create-tu__data create-tu__prfx-state" name="prfx-state">
                                        <div class="button-wrapper">
                                            <div class="arrow create-tu__arrow_prfx-state">&gt;</div>
                                        </div>
                                        <div class="list-container list-container_prfx-state">
                                            <ul class="create-tu-list create-tu-list_state">
                                                <li class="list__items">г.</li>
                                                <li class="list__items">с.</li>
                                                <li class="list__items">х.</li>
                                                <li class="list__items">п.</li>
                                                <li class="list__items">ст.</li>
                                                <li class="list__items">д.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <input type="text" class="input-data create-tu-add-menu__input create-tu-add-menu__input_state" name="add-state">
                                    <div class="button__container create-tu-add-menu__button-container_state">
                                        <div class="create-tu-add-menu__button-wrapper create-tu-add-menu__button-wrapper_state">
                                            <div class="header__elements create-tu-add-menu__button create-tu-add-menu__button-add_state">Добавить</div>
                                        </div>
                                        <div class="create-tu-add-menu__button-wrapper create-tu-add-menu__button-wrapper_state">
                                            <div class="header__elements create-tu-add-menu__button create-tu-add-menu__button-reset_state">Очистить</div>
                                        </div>
                                    </div>
                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                <!-- третья строка -->
                <div class="create-tu__line-container create-tu__third-line-container">
                    <div class="create-tu__third-line-container__element create-tu__third-line-container__element_street">
                        <div class="create-tu__label data__label_street">Улица:</div>
                        <!-- combobox улицы-->
                        <div class="combobox-wrapper combobox-wrapper_street">
                            <input type="text" class="create-tu__data create-tu__data_street" name="street">
                            <div class="button-wrapper">
                                <div class="arrow create-tu__arrow_street">&gt;</div>
                            </div>
                            <div class="list-container list-container_street">
                                <ul class="create-tu-list create-tu-list_street">
                                </ul>
                            </div>
                        </div>
                        <!-- кнопка открытия меню добавления улицы -->
                        <div class="button button_add__wrapper button_add__wrapper_street">
                            <div class="button_add">+</div>
                        </div>
                        <!-- форма добавления улицы -->
                        <div class="add-form__wrapper add-form__wrapper_street">
                            <div class="black-wrapper"></div>
                            <div class="add-form create-tu-add-menu create-tu-add-menu_state">
                            <div class="create-tu-add-menu__header create-tu-add-menu__header_street">добавление улицы</div>
                <div class="button_exit"></div>
                <div class="create-tu-add-menu_second-line">
                    <input type="text" disabled class="input-data create-tu-add-menu__input create-tu-add-menu__const_state" name="const-state">
                    <!-- список префикса улиц -->
                    <div class="list-container create-tu-add-menu-list-container_prfx-street">
                        <ul class="create-tu-list create-tu-list_prfx-street">
                            <li class="list__items">ул.</li>
                            <li class="list__items">проезд</li>
                            <li class="list__items">пр-т.</li>
                            <li class="list__items">пер.</li>
                        </ul>
                    </div>
                    <input type="text" class="input-data create-tu-add-menu__input create-tu-add-menu__input_prfx-street" name="add-prfx-street">
                    <div class="arrow-wrapper"><div class="arrow create-tu-add-menu__arrow_prfx-street">&gt;</div></div>
                    <input type="text" class="input-data create-tu-add-menu__input create-tu-add-menu__input_street" name="add-street">
                    <!-- кнопки -->
                    <ul class="button__container button-container_state">
                        <li class="button button__add-street"><a href="#" class="elements-style">Добавить</a></li>
                        <li class="button button__reset-street"><a href="#" class="elements-style">Очистить</a></li>
                    </ul>
                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div class="create-tu__third-line-container__element create-tu__third-line-container__element_house">
                        <div class="create-tu__label data__label_house">Дом:</div>
                        <input type="text" class="create-tu__data create-tu__data_house" name="house">
                    </div>
                    <div class="create-tu__third-line-container__element create-tu__third-line-container__element_corps">
                        <div class="create-tu__label data__label_corps">Корп:</div>
                        <input type="text" class="create-tu__data create-tu__data_corps" name="corps">
                    </div>
                    <div class="create-tu__third-line-container__element create-tu__third-line-container__element_apartment">
                        <div class="create-tu__label data__label_apartment">Кв:</div>
                        <input type="text" class="create-tu__data create-tu__data_apartment" name="apartment">
                    </div>                    
                    <div class="create-tu__third-line-container__element create-tu__third-line-container__element_phone">
                        <div class="create-tu__label data__label_phone">Телефон:</div>
                        <input type="text" class="create-tu__data create-tu__data_prfx-phone" name="prfx-phone">
                        <input type="text" class="create-tu__data create-tu__data_num-phone" name="num-phone">       
                    </div>
                </div>
                <!-- четвёртая строка -->
                <div class="create-tu__line-container create-tu__fourth-line-container">
                    <div class="create-tu__fourth-line-container__element create-tu__fourth-line-container__element_district">
                        <div class="create-tu__label data__label_district">Район:</div>
                        <div class="combobox-wrapper combobox-wrapper_district">
                            <input type="text" class="create-tu__data create-tu__data_district" name="district">
                            <div class="button-wrapper">
                                <div class="arrow create-tu__arrow_district">&gt;</div>
                            </div>
                            <div class="list-container list-container_district">
                                <ul class="create-tu-list create-tu-list_district">
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="create-tu__fourth-line-container__element create-tu__fourth-line-container__element_kadastr">
                        <div class="create-tu__label data__label_kadastr">Кадастровый номер:</div>
                        <div class="create-tu__label data__label_kadastr-prfx">23:47:</div>
                        <input type="text" class="create-tu__data create-tu__data_kadastr-district" name="kadastr-district">
                        <input type="text" class="create-tu__data create-tu__data_kadastr-number" name="kadastr-number">
                    </div>
                    <div class="create-tu__fourth-line-container__element create-tu__fourth-line-container__element_address">
                        <div class="create-tu__label data__label_address">Адрес:</div>
                        <textarea class="create-tu__data create-tu__data_address" name="address" rows="50"></textarea>
                    </div>
                </div>
                <!-- пятая строка -->
                <div class="create-tu__line-container create-tu__five-line-container">
                     <input type="radio" class="create-tu__data create-tu__data_type-tu" name="type-tu" value"with">
                     <div class="create-tu__label create-tu__label_radio">С проектом</div>
                     <input type="radio" class="create-tu__data create-tu__data_type-tu" name="type-tu" value"without" checked>
                     <div class="create-tu__label create-tu__label_radio">Без проекта</div>
                </div>
                <!-- кнопки создания ту -->
                <ul class="button__container button-container_create-tu">
                    <li class="button create-tu__button-add"><a href="#" class="elements-style">Добавить</a></li>
                    <li class="button create-tu__button-reset"><a href="#" class="elements-style">Очистить</a></li>
                </ul>
         </div>
         <div id="search-tu">
             
         </div>
    </div>
</section>
</body>