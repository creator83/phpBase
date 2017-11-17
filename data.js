window.addEventListener ("DOMContentLoaded", init);

function fillList (list, header, value){
    if (value == undefined){
        value = '';
    }
    var request= new HttpRequest ("POST", "request.php");
    request.setRequest (header, value);
    request.sendRequest();
    request.receiveRequest (list);
}

var createTuList = [];
var createTuAddStateMenu = [];
var addMenuList = [];

function init (){
    var createTuBtn = document.getElementsByClassName ("create-tu__button");
    var mainMenu = document.getElementsByClassName ('major-menu-header');
    var createTuAddBtn = document.getElementsByClassName('button_add__wrapper');
    var blackWrapper = document.getElementById('black-wrapper');
    var createTu__lists = document.getElementById('create-tu__all-lists');
    var createTu = document.getElementById('create-tu');
    var createTuAddMenu__arrow = blackWrapper.getElementsByClassName ('arrow-wrapper');
    var createTu__arrow= createTu.getElementsByClassName ('arrow-wrapper');
    var createTuAddMenu__combobox = blackWrapper.getElementsByClassName ('create-tu-list-container');
    var createTu__combobox = createTu__lists.getElementsByClassName('create-tu-list-container');
    // ===для агрегата Открытие форм ===//
    // обертки подменю доабавление региона, н пункта, улицы
    var addForm = blackWrapper.getElementsByClassName ('create-tu-add-menu');
    // кнопки открытия
    var btnOpen__addForm = createTu.getElementsByClassName ('button_add__wrapper');

    // наполнение списков
    for (var i=0;i<createTu__combobox.length;++i){
            var el = new CreateMenuList (createTuList, createTu__combobox[i], createTu__arrow[i]);
            createTuList.push (el);
    }

    fillList (createTuList[0], "region");
    createTuList[0].setInputValue('Краснодарский край');
    fillList (createTuList[1], "region", 'Краснодарский край');
    fillList (createTuList[3], "district");

    for (var i=0;i< mainMenu.length;++i){
        mainMenu[i].addEventListener ("click", function(){
            selectItem (this.textContent, mainMenu, "rgba(0,0,0,.9)", "linear-gradient(#FE5D4C, #97253D)");
        });
    }

        for (var i=0;i<addForm.length;++i){
            var item = new Form (addMenuList, btnOpen__addForm[i], addForm[i]);
            addMenuList.push(item);
        }
}