<?php

?>
<!DOCTYPE html>
<head>
	<title>Данные</title>
	<meta charset="utf-8">
	<link rel="stylesheet" href="substrate.css" />
	<link rel="stylesheet" href="data.css" />
    <script src="lists.class.js"></script>
    <script src="data.js"></script>
    <script src="httprqust.js"></script>
</head>
<body>
<?php
    include "substrate.inc.php";
    include "base.php";
?>
<section class="main-container">
    <div class="major-menu-container-header">
        <div class="header__elements major-menu-header">ТУ</div>
        <div class="header__elements major-menu-header">ПИСЬМА</div>
        <div class="header__elements major-menu-header">ОБЪЕКТЫ</div>
        <div class="header__elements major-menu-header">ОТЧЁТЫ</div>
    </div>
    <div id="body-container">
        <div id="subMenuTU-container">
            <div class="header__elements create-tu-header">Создание ТУ</div>
            <div class="header__elements create-tu-header">Просмотр ТУ</div>
        </div>
        <div id="create-tu__all-lists">
            <div class="create-tu-list-container create-tu-list-container_region">
                <ul class="create-tu-list create-tu-list_region">
                </ul>
            </div>
            <div class="create-tu-list-container create-tu-list-container_state">
                <ul class="create-tu-list create-tu-list_state">
                </ul>
            </div>
            <div class="create-tu-list-container create-tu-list-container_street">
                <ul class="create-tu-list create-tu-list_street">
                </ul>
            </div>
            <div class="create-tu-list-container create-tu-list-container_district">
                <ul class="create-tu-list create-tu-list_district">
                </ul>
            </div>
        </div>
        <!-- подменю для добавления в создании ТУ-->
        <div id="black-wrapper">
            <!-- подменю добавления региона -->
            <div class="create-tu-add-menu create-tu-add-menu_region">
                <div class="create-tu-add-menu__header create-tu-add-menu__header_region">добавление региона</div>
                <div class="button_exit"></div>
                <div class="create-tu-add-menu_second-line">
                    <input type="text" class="input-data create-tu-add-menu__input create-tu-add-menu__input_region" name="add-region">
                    <div class="button__container create-tu-add-menu__button-container_region">
                        <div class="create-tu-add-menu__button-wrapper create-tu-add-menu__button-wrapper_region">
                            <div class="header__elements create-tu-add-menu__button create-tu-add-menu__button-add_region">Добавить</div>
                        </div>
                        <div class="create-tu-add-menu__button-wrapper create-tu-add-menu__button-wrapper_region">
                            <div class="header__elements create-tu-add-menu__button create-tu-add-menu__button-reset_region">Очистить</div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- подменю добавления населённого пункта -->
            <div class="create-tu-add-menu create-tu-add-menu_state">
                <div class="create-tu-add-menu__header create-tu-add-menu__header_state">Населённый пункт</div>
                <div class="button_exit"></div>
                <div class="create-tu-add-menu_second-line">
                    <input type="text" disabled class="input-data create-tu-add-menu__input create-tu-add-menu__const_region" name="const-region">
                    <div class="create-tu-list-container create-tu-add-menu-list-container_prfx-state">
                        <ul class="create-tu-list create-tu-list_prfx-state">
                        </ul>
                    </div>
                    <input type="text" class="input-data create-tu-add-menu__input create-tu-add-menu__input_prfx-state" name="add-prfx-state">
                    <div class="arrow-wrapper"><div class="arrow create-tu-add-menu__arrow_prfx-state">&gt;</div></div>
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
            <!-- подменю добавления улицы -->
            <div class="create-tu-add-menu create-tu-add-menu_street">
                <div class="create-tu-add-menu__header create-tu-add-menu__header_street">добавление улицы</div>
                <div class="button_exit"></div>
                <div class="create-tu-add-menu_second-line">
                    <input type="text" disabled class="input-data create-tu-add-menu__input create-tu-add-menu__const_state" name="const-state">
                    <!-- список префикса улиц -->
                    <div class="create-tu-list-container create-tu-add-menu-list-container_prfx-street">
                        <ul class="create-tu-list create-tu-list_prfx-street">
                        </ul>
                    </div>
                    <input type="text" class="input-data create-tu-add-menu__input create-tu-add-menu__input_prfx-street" name="add-prfx-street">
                    <div class="arrow-wrapper"><div class="arrow create-tu-add-menu__arrow_prfx-street">&gt;</div></div>
                    <input type="text" class="input-data create-tu-add-menu__input create-tu-add-menu__input_street" name="add-street">
                    <div class="button__container create-tu-add-menu__button-container_state">
                        <div class="create-tu-add-menu__button-wrapper create-tu-add-menu__button-wrapper_street">
                            <div class="header__elements create-tu-add-menu__button create-tu-add-menu__button-add_street">Добавить</div>
                        </div>
                        <div class="create-tu-add-menu__button-wrapper create-tu-add-menu__button-wrapper_street">
                            <div class="header__elements create-tu-add-menu__button create-tu-add-menu__button-reset_street">Очистить</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- основное окно ввода ТУ -->
         <div id="create-tu">
            <form action="" method="post" >
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
                    <div class="create-tu__second-line-container__element create-tu__second-line-container__element_region">
                        <div class="create-tu__label data__label_region">Регион:</div>
                        <input type="text" class="create-tu__data create-tu__data_region" name="region">
                        <div class="arrow-wrapper"><div class="arrow create-tu__arrow_region">&gt;</div></div>
                        <div class="button_add__wrapper"><div class="button_add">+</div></div>
                    </div>
                    <div class="create-tu__second-line-container__element create-tu__second-line-container__element_state">
                        <div class="create-tu__label data__label_state">Нас. пункт:</div>
                        <input type="text" class="create-tu__data create-tu__data_state" name="state">
                        <div class="arrow-wrapper"><div class="arrow create-tu__arrow_state">&gt;</div></div>
                        <div class="button_add__wrapper"><div class="button_add">+</div></div>
                    </div>
                </div>
                <!-- третья строка -->
                <div class="create-tu__line-container create-tu__third-line-container">
                    <div class="create-tu__third-line-container__element create-tu__third-line-container__element_street">
                        <div class="create-tu__label data__label_street">Улица:</div>
                        <input type="text" class="create-tu__data create-tu__data_street" name="street">
                        <div class="arrow-wrapper"><div class="arrow create-tu__arrow_street">&gt;</div></div>
                        <div class="button_add__wrapper"><div class="button_add">+</div></div>
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
                        <input type="text" class="create-tu__data create-tu__data_district" name="district">
                        <div class="arrow-wrapper"><div class="arrow create-tu__arrow_district">&gt;</div></div>
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
                <!-- Кнопки создания и очистка формы -->
                <div class="button__container create-tu__button-container">
                    <div class="create-tu__button-wrapper create-tu__button-wrapper">
                        <div class="header__elements create-tu__button create-tu__button-add">Добавить</div>
                    </div>
                    <div class="create-tu__button-wrapper create-tu__button-wrapper">
                        <div class="header__elements create-tu__button create-tu__button-reset">Очистить</div>
                    </div>
                </div>
            </form>
         </div>
    </div>
</section>
</body>