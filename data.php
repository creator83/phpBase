<?php

?>
<!DOCTYPE html>
<head>
	<title>Данные</title>
	<meta charset="utf-8">
	<link rel="stylesheet" href="substrate.css" />
	<link rel="stylesheet" href="data.css" />
	<script src="customList.inc.js"></script>
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
        <div id="black-wrapper">
            <div class="create-tu-add-menu create-tu-add-menu_region">
                <div class="create-tu-add-menu__header create-tu-add-menu__header_region">добавление региона</div>
                <div class="button_exit"></div>
                <input type="text" class="data create-tu-add-menu__input create-tu-add-menu__input_region" name="add-region">
                <div class="add_buttonWrapper">
                    <div class="addWindow_b-wrapp">
                        <div class="container-label__elements add_button">Добавить</div>
                    </div>
                    <div class="addWindow_b-wrapp">
                        <div class="container-label__elements add_button">Очистить</div>
                    </div>
                </div>
            </div>
            <div class="create-tu-add-menu create-tu-add-menu_state">
                <div class="create-tu-add-menu__header create-tu-add-menu__header_state">добавление города</div>
                <div class="button_exit"></div>
                <input type="text" disabled class="data add_input data_addState" name="addState_region">
                <div id="sub-state-prfx-list" class="list-container">
                    <ul id="sub_state_list">
                    </ul>
                </div>
                <input type="text" class="data add_input data_statePrfx" name="addState_prfx">
                <div class="wrapp-arrow"><div class="arrow state-window">&gt;</div></div>
                <input type="text" class="data add_input data_stateName" name="addState_name">
                <div class="add_buttonWrapper">
                    <div class="addWindow_b-wrapp">
                        <div class="container-label__elements add_button">Добавить</div>
                    </div>
                    <div class="addWindow_b-wrapp">
                        <div class="container-label__elements add_button">Очистить</div>
                    </div>
                </div>
            </div>
            <div class="create-tu-add-menu create-tu-add-menu_street">
                <div class="header">добавление улицы</div>
                <div class="button-exit"></div>
                <input type="text" class="data add_input data_addStreet" name="addStreet">
                <div class="add_buttonWrapper">
                    <div class="addWindow_b-wrapp">
                        <div class="container-label__elements add_button">Добавить</div>
                    </div>
                    <div class="addWindow_b-wrapp">
                        <div class="container-label__elements add_button">Очистить</div>
                    </div>
                </div>
            </div>
        </div>
         <div id="createTu">
            <form action="" method="post" >
                <div id="firstLineWrapper">
                    <div class="sName">
                        <div class="data__label data__label_sName">Фамилия:</div>
                        <input type="text" class="data data_name" name="sureName">
                    </div>  
                    <div class="fName">                  
                        <div class="data__label">Имя:</div>
                        <input type="text" class="data data_name" name="firstName">
                    </div>
                    <div class="mName">
                        <div class="data__label">Отчество:</div>                    
                        <input type="text" class="data data_name" name="middleName">
                   </div> 
                    </div>
                <div id="secondLineWrapper">
                    <div class="region">
                        <div class="data__label data__label_region">Регион:</div>
                        <input type="text" class="data data_region inputValue" name="region">
                        <div class="wrapp-arrow"><div class="arrow main-window">&gt;</div></div>
                        <div class="add"><div class="plus">+</div></div>
                    </div>
                    <div class="state">
                        <div class="data__label data__label_state">Нас. пункт:</div>
                        <input type="text" class="data data_state inputValue" name="state">
                        <div class="wrapp-arrow"><div class="arrow main-window">&gt;</div></div>
                        <div class="add"><div class="plus">+</div></div>
                    </div>
                </div>
                <div id="thirdLineWrapper">
                    <div class="street">
                        <div class="data__label data__label_street">Улица:</div>
                        <input type="text" class="data data_street inputValue" name="street">
                        <div class="wrapp-arrow"><div class="arrow main-window">&gt;</div></div>
                        <div class="add"><div class="plus">+</div></div>
                    </div>
                    <div class="house">
                        <div class="data__label data__label_house">Дом:</div>
                        <input type="text" class="data data_house" name="house">
                    </div>
                    <div class="korp">
                        <div class="data__label data__label_korp">Корп:</div>
                        <input type="text" class="data data_korp" name="korp">
                    </div>
                    <div class="appartment">
                        <div class="data__label data__label_appartment">Кв:</div>
                        <input type="text" class="data data_apartment" name="apartment">
                    </div>                    
                    <div class="phone">
                        <div class="data__label data__label_phone">Телефон:</div>
                        <input type="text" class="data data_prfx-phone" name="prfxPhone">
                        <input type="text" class="data data_num-phone" name="numPhone">       
                    </div>
                </div>
                <div id="fourthLineWrapper">
                    <div class="district">
                        <div class="data__label data__label_district">Район:</div>
                        <input type="text" class="data data_district inputValue" name="district">
                        <div class="wrapp-arrow"><div class="arrow main-window">&gt;</div></div>
                    </div>
                    <div class="kadastr">
                        <div class="data__label data__label_kadastr">Кадастровый номер:</div>
                        <div class="data__label kadastr_prfx">23:47:</div>
                        <input type="text" class="data data_kadastr-dist" name="kadastr-dist">
                        <input type="text" class="data data_kadastr-num" name="kadastr-num">
                    </div>
                    <div class="address">
                        <div class="data__label data__label_address">Адрес:</div>
                        <textarea class="data data_address" name="address" rows="50"></textarea>
                    </div>

                </div>
                <div id="buttonWrapper">
                    <div class="b-wrapp">
                        <input type="submit" class="container-label__elements tu-buttons tu-button_submit" value="Создать">
                    </div>
                    <div class="b-wrapp">
                        <input type="reset" class="container-label__elements tu-buttons tu-button_reset" value="Очистить">
                    </div>
                </div>


            </form>
         </div>
    </div>
</section>
</body>