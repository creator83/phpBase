

window.addEventListener ("DOMContentLoaded", init);


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
createTuList = [];
createTuSubMenuList = [];
function fillList (list, header, value){
    if (value == undefined){
        value = '';
    }
    var request= new HttpRequest ("POST", "request.php");
    request.setRequest (header, value);
    request.sendRequest();
    request.receiveRequest (list);
}

function init (){
    var createTuBtn = document.getElementsByClassName ("create-tu__button");
    var combobox = document.getElementsByClassName ('create-tu-list-container');
    var mainMenu = document.getElementsByClassName ('major-menu-header');

    // наполнение списков
    for (var i=0;i<combobox.length;++i){
        var nWords = combobox[i].getAttribute ('class');
        if (nWords.split ('-').length>7) {
            var el = new listS (combobox[i], combobox, getArrowObjCreateTu);
            createTuSubMenuList.push (el);
        }
        else {
            var el = new listS (combobox[i], combobox, getArrowObjCreateTu);
            createTuList.push (el);
        }
    }

    
    fillList (createTuList[0], "region");
    createTuList[0].showList();
    createTuList[0].hideList();
    
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
}