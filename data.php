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
                        <div class="data__label">Фамилия:</div>
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
                        <div class="data__label">Регион:</div>
                        <input type="text" class="data data_region" name="region">
                        <div class="arrow">&lt;</div>
                    </div>
                    <div class="state">
                        <div class="data__label">Нас. пункт:</div>
                        <input type="text" class="data data_state" name="state">
                    </div>
                </div>
                <div id="thirdLineWrapper">
                    <div class="phone">
                        <div class="data__label">Телефон:</div>
                        <input type="text" class="data data_prfx-phone" name="prfxPhone">
                        <input type="text" class="data data_num-phone" name="numPhone">       
                    </div>
                </div>
            </form>
         </div>
    </div>
</section>
</body>