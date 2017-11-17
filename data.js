

window.addEventListener ("DOMContentLoaded", init);

/*
function selectItem(value, parent, valueOn, valueOff){
for (var i=0;i<parent.length;++i){
    if (parent[i].textContent == value){
        parent[i].style.background = valueOn;
    }
    else {
        parent[i].style.background = valueOff;
    }
}
}*/
function selectItem(value, parent, valueOn, valueOff){
    for (var i=0;i<parent.length;++i){
        if (parent[i].textContent == value){
            parent[i].style.background = valueOn;
        }
        else {
            parent[i].style.background = valueOff;
        }
    }
}

var getArrowObjCreateTu = function(name){
    var arrow = document.getElementsByClassName('create-tu__arrow_'+name);
    return arrow;
}

var createTuList = [];
var createTuAddStateMenu = [];

function fillList (list, header, value){
    if (value == undefined){
        value = '';
    }
    var request= new HttpRequest ("POST", "request.php");
    request.setRequest (header, value);
    request.sendRequest();
    request.receiveRequest (list);
}

function openCombobox (comboArray, name){
    for (var i=0;i<comboArray.length;++i){
        if (comboArray[i].name == name){
            if (comboArray[i].flag == false){
                comboArray[i].showList();
            }
            else{
                comboArray[i].hideList();
            }
        }
        else {
            comboArray[i].hideList();
        }
    }
}



function init (){
    var createTuBtn = document.getElementsByClassName ("create-tu__button");
    var mainMenu = document.getElementsByClassName ('major-menu-header');
    var createTuAddBtn = document.getElementsByClassName('button_add__wrapper');
    var blackWrapper = document.getElementById('black-wrapper');
    var createTu__lists = document.getElementById('create-tu__all-lists');
    var createTu = document.getElementById('create-tu');
    var createTu__arrow = blackWrapper.getElementsByClassName ('arrow-wrapper');
    var createTuAddMenu__arrow = createTu.getElementsByClassName ('arrow-wrapper');
    var createTuAddMenu__combobox = blackWrapper.getElementsByClassName ('create-tu-list-container');
    var createTu__combobox = createTu__lists.getElementsByClassName('create-tu-list-container');

    // наполнение списков
    // for (var i=0;i<combobox.length;++i){
    //     var nWords = combobox[i].getAttribute ('class');
    //     if (nWords.split ('-').length>7) {
    //         var el = new listS (combobox[i], createTuSubMenuList, getArrowObjCreateTu);
    //         createTuSubMenuList.push (el);
    //     }
    //     else {
    //         var el = new listS (combobox[i], createTuList, getArrowObjCreateTu);
    //         createTuList.push (el);
    //     }
    // }

    for (var i=0;i<createTu__combobox.length;++i){
            var el = new CreateMenuList (createTuList, createTu__combobox[i], createTu__arrow[i], );
            createTuList.push (el);
    }
    console.log (createTuList);
    fillList (createTuList[0], "region");
    createTuList[0].setInputValue('Краснодарский край');
    fillList (createTuList[1], "region", 'Краснодарский край');
    fillList (createTuList[3], "district");
    // createTuList[0].hideList();
    // openCombobox (createTuList, "district");
    // нажатие на главное меню
    for (var i=0;i< mainMenu.length;++i){
        mainMenu[i].addEventListener ("click", function(){
            selectItem (this.textContent, mainMenu, "rgba(0,0,0,.9)", "linear-gradient(#FE5D4C, #97253D)");
        });
    }

    // нажатие на кнопки формы ТУ
    for (var i=0;i< createTuBtn.length;++i){
        createTuBtn[i].addEventListener ("mousedown", function(){
            this.style.background = "linear-gradient(#97253D, #FE5D4C)";
        });
    }
    // отжатие на кнопки формы ТУ
    for (var i=0;i< createTuBtn.length;++i){
        createTuBtn[i].addEventListener ("mouseup", function(){
            this.style.background = "linear-gradient(#FE5D4C, #97253D)";
        });
    }

        // нажатие на кнопки открытия дополнительных форм формы ТУ
        for (var i=0;i< createTuAddBtn.length;++i){
            createTuAddBtn[i].addEventListener ("mousedown", function(){
                this.style.background = "linear-gradient(#97253D, #FE5D4C)";
            });
        }
        // отжатие на кнопки открытия дополнительных форм формы ТУ
        for (var i=0;i< createTuAddBtn.length;++i){
            createTuAddBtn[i].addEventListener ("mouseup", function(){
                this.style.background = "linear-gradient(#FE5D4C, #97253D)";
            });
        }

        // открытие меню добавления региона
         // нажатие на кнопки открытия дополнительных форм формы ТУ
         for (var i=0;i< createTuAddBtn.length;++i){
            createTuAddBtn[i].addEventListener ("click", function(){
                blackWrapper.style.display = 'block';
                blackWrapper.style.zIndex = '1';

            });
        }

}