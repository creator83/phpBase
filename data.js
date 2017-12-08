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
function valueToString (coll){
    var str='';
    for (var i=0;i<coll.length-1;++i){
        str += coll[i].value+',';
    }
    str += coll[coll.length-1].value;
    return str;
}

var createTuList = [];
var createTuAddStateMenu = [];
var addMenuForm = [];
var addMenuList = [];

function openList(){
    for (var i=0;i<this.collection.list.length;++i){
        if (this.collection.list[i].name!=name){
            this.collection.list[i].closeList();
        }
    }
}

function init (){
    var createTu = document.getElementById('create-tu');
    var createTu__combobox = createTu.getElementsByClassName ('combobox-wrapper');
    var createTu__combobox_list = new ComboboxList ();
    var createTu__function = new ListFunction();
    createTu__function.addFunction(openList);
    for (var i=0;i<createTu__combobox.length;++i){
        var comboElement = new Combobox (createTu__combobox[i],createTu__combobox_list);
        createTu__combobox_list.addElement (comboElement);
    }
    createTu__combobox_list.fillCombobox ('region');
    createTu__combobox_list.getItemByName('region').setInputValue('Краснодарский край');
    createTu__combobox_list.fillCombobox ('district');
    // var createTuBtn = document.getElementsByClassName ("create-tu__button");
    // var mainMenu = document.getElementsByClassName ('major-menu-header');
    // var createTuAddBtn = document.getElementsByClassName('button_add__wrapper');
    // var blackWrapper = document.getElementById('black-wrapper');
    // var createTu__lists = document.getElementById('create-tu__all-lists');
    // var createTu = document.getElementById('create-tu');
    // var createTuAddMenu__arrow = blackWrapper.getElementsByClassName ('arrow-wrapper');
    // var createTu__arrow= createTu.getElementsByClassName ('arrow-wrapper');
    // var createTuAddMenu__combobox = blackWrapper.getElementsByClassName ('create-tu-list-container');
    // var createTu__combobox = createTu__lists.getElementsByClassName('create-tu-list-container');
    // ===для агрегата Открытие форм ===//
    // обертки подменю доабавление региона, н пункта, улицы
    // var addForm = blackWrapper.getElementsByClassName ('create-tu-add-menu');
    // // кнопки открытия
    // var btnOpen__addForm = createTu.getElementsByClassName ('button_add__wrapper');

    // var btnSubmit__createTu = createTu.getElementsByClassName ('create-tu__button-add')[0];
    // var btnReset__createTu = createTu.getElementsByClassName ('create-tu__button-reset')[0];

    // var inputFields__createTu = createTu.getElementsByTagName ('input');

    // // наполнение списков главной формы создания ТУ
    // for (var i=0;i<createTu__combobox.length;++i){
    //         var el = new CreateMenuList (createTuList, createTu__combobox[i], createTu__arrow[i]);
    //         createTuList.push (el);
    // }
    // fillList (createTuList[0], "region");
    // createTuList[0].setInputValue('Краснодарский край');
    // fillList (createTuList[1], "region", 'Краснодарский край');
    // fillList (createTuList[3], "district");

    // //наполнение списков форм добавления создания ТУ
    // for (var i=0;i<createTuAddMenu__combobox.length;++i){
    //     var item = new CreateMenuList (addMenuList, createTuAddMenu__combobox[i], createTuAddMenu__arrow[i]);
    //     addMenuList.push (item);
    // }

    // for (var i=0;i< mainMenu.length;++i){
    //     mainMenu[i].addEventListener ("click", function(){
    //         selectItem (this.textContent, mainMenu, "rgba(0,0,0,.9)", "linear-gradient(#FE5D4C, #97253D)");
    //     });
    // }

    //     addMenuForm[0] = new SimpleForm (addMenuForm, btnOpen__addForm[0], addForm[0], createTuList[0]);
        
    //     for (var i=1;i<addForm.length;++i){
    //         var item = new AdvanceForm (addMenuForm, btnOpen__addForm[i], addForm[i], createTuList[i-1]);
    //         addMenuForm.push(item);
    //     }
        
    //     //===нажатие кнопок добавить и очистить формы создание ТУ
    //     btnSubmit__createTu.addEventListener ('mousedown', function(){
    //         this.style.background = "linear-gradient(#97253D, #FE5D4C)";  
    //     });
    
    //     btnSubmit__createTu.addEventListener ('mouseup', function(){
    //         this.style.background = "linear-gradient(#FE5D4C, #97253D)";
    //     });
    //     btnReset__createTu.addEventListener ('mousedown', function(){
    //         this.style.background = "linear-gradient(#97253D, #FE5D4C)";  
    //     });
    
    //     btnReset__createTu.addEventListener ('mouseup', function(){
    //         this.style.background = "linear-gradient(#FE5D4C, #97253D)";
    //     });
    //     // console.log (inputFields__createTu);
    //     btnSubmit__createTu.addEventListener ('click', function(){
    //         var request= new HttpRequest ("POST", "request.php");
    //         console.log (valueToString (inputFields__createTu));
    //         /*request.setRequest ('create-tu', valueToString (inputFields__createTu));
    //         request.sendRequest();
    //         // Получение результата операции БД
    //         request.receiveBoolRequest (objPtr);
    //         //Сохранить записать введенное значение в поле регион формы создания ТУ
    //         objPtr.sourceList.setInputValue (objPtr.targetInput.value);*/
    //         // обновить все combobox формы создания ТУ;  
    //     });
}