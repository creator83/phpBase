<?php

?>
<!DOCTYPE html>
<head>
	<title>Данные</title>
	<meta charset="utf-8">
	<link rel="stylesheet" href="substrate.css" />
	<link rel="stylesheet" href="data.css" />
	<script src="data.js"></script>
</head>
<body>
<?php
	include "substrate.inc.php";
?>
<section id="main-container">
    <div class="container-label">
        <div class="container-label__elements majorMenu-label">ТУ</div>
        <div class="container-label__elements majorMenu-label">ПИСЬМА</div>
        <div class="container-label__elements majorMenu-label">ОБЪЕКТЫ</div>
        <div class="container-label__elements majorMenu-label">ОТЧЁТЫ</div>
    </div>
    <div id="body-container">
        <div id="subMenuTU-container">
            <div class="container-label__elements subMenuTU-container__element">Создание ТУ</div>
            <div class="container-label__elements subMenuTU-container__element">Просмотр ТУ</div>
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
                        <input type="text" class="data data_region" name="region">
                        <div class="arrow">&gt;</div>
                    </div>
                    <div class="state">
                        <div class="data__label data__label_state">Нас. пункт:</div>
                        <input type="text" class="data data_state" name="state">
                        <div class="arrow">&gt;</div>
                    </div>
                </div>
                <div id="thirdLineWrapper">
                    <div class="street">
                        <div class="data__label data__label_street">Улица:</div>
                        <input type="text" class="data data_street" name="street">
                        <div class="arrow">&gt;</div>
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
                        <input type="text" class="data data_district" name="district">
                        <div class="arrow">&gt;</div>
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
                    <input type="submit" class="container-label__elements" value="Создать">
                    <input type="reset" class="container-label__elements" value="Очистить">
                </div>


            </form>
         </div>
    </div>
</section>
</body>