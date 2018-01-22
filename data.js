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
function fillCombobox (combo, str, header, value){
    if (value == undefined){
        value = '';
    }
    if (str == undefined){
        str = '';
    }
    var request= new HttpRequest ("POST", "request.php");
    request.setRequest (header, value);
    request.sendRequest();
    request.receiveRequestFunc (combo, str);
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
var addForm = [];
var addMenuList = [];

function fillCreateTu(){
    var index = this.getIndexByName (name);
        var request= new HttpRequest ("POST", "request.php");
        request.setRequest (this.list[index].name, this.list[index].inputFieldValue);
        request.sendRequest();
        if (index<2){
            request.receiveRequest (this.list[index+1]);
            for (var i=index+2;i<this.list.length-1;++i){
                this.list[i].clearList ();
            }
        }
}
function autoCloseList(name){
    for (var i=0;i < createTu__combobox_list.list.length;++i){
        if (createTu__combobox_list.list[i].name!=name){
            createTu__combobox_list.list[i].closeList();
        }
    }
}
function updateNextCombo (combo){
    console.log(combo);
    console.log(createTu__combobox_list.next(combo.name));
    console.log(combo.name, combo.inputFieldValue);
    fillCombobox(createTu__combobox_list.next(combo.name), '',combo.name, combo.inputFieldValue);
}
function updateFormCombo(combo){
    var index = createTu__combobox_list.getIndexByName(combo.name);
    if (index>1){
        return;
    }
    else{
        updateNextCombo (combo);
        index++;
        // очистка комбобоксов
        for(var i=index;i<3;++i){
            createTu__combobox_list.list[i].clearList();
        }
    }
}
var createTu__combobox_list = new listObject (); 
var addFormsCombo = new listObject (); 
var addForm =  new listObject (); 
function openFormAddState(name){
    document.getElementsByName ('const-region')[0].value = document.getElementsByName ('region')[0].value;
}
function openFormAddStreet(name){
    document.getElementsByName ('const-state')[0].value = document.getElementsByName ('state')[0].value;
}
function updateRegion(){
    fillCombobox(createTu__combobox_list.getItemByName('region'),'Краснодарский край', 'region');
}
function addRegion(objPtr){
    var input = objPtr.formWrapper.getElementsByTagName ('input')[0];
    if (input.value!=''){
        var req = new XMLHttpRequest();
        var region = JSON.stringify(input.value);
        req.onreadystatechange = function(){
            if (req.readyState != 4) return;
            var result = req.responseText;
            console.log(result);
        }
        // метод POST
        req.open("POST", "add_region.php",true);
        
        // Установка заголовков
        req.setRequestHeader('Content-Type', 'text/plain');
       
        // Отправка данных
        req.send(region);	
        objPtr.closeForm();
    }
}
function init (){
    var createTu = document.getElementById('create-tu');
    var createTu__combobox = createTu.getElementsByClassName ('combobox-wrapper');
    var btnOpen = createTu.getElementsByClassName ('button_open');
    var createTu__buttons = document.getElementsByClassName('button');
    var createTu__forms =  createTu.getElementsByClassName ('add-form__container');
    var createTu__function = new ListFunction();
    var selectItem = new ListFunction();
    var addRegionForm = new ListFunction();
    var addState = new ListFunction();
    var addStreet = new ListFunction();
    createTu__function.addFunction(autoCloseList);
    selectItem.addFunction(updateFormCombo);
    addRegionForm.addFunction (addRegion);
    addState.addFunction(openFormAddState);
    addStreet.addFunction(openFormAddStreet);

    for (var i=0;i<createTu__combobox.length;++i){
        var comboElement = new Combobox (createTu__combobox[i],createTu__combobox_list);
        var name = createTu__combobox[i].getElementsByTagName('input')[0].getAttribute('name');
        if(name =='region'||name =='state'||name =='street'||name =='district'){   
            createTu__combobox_list.addElement (comboElement);
            comboElement.setBtnClickFunc(createTu__function);
            comboElement.setItemSelectFunc(selectItem);
        }
        else{
            addFormsCombo.addElement (comboElement);
        }
    }

    
    // заполнение списков регионы, районы
    fillCombobox(createTu__combobox_list.getItemByName('region'),'Краснодарский край', 'region');
    fillCombobox(createTu__combobox_list.getItemByName('state'), '','region', 'Краснодарский край');
    fillCombobox(createTu__combobox_list.getItemByName('district'), '','district');
    console.log(createTu__buttons);
    for (var i=0;i<createTu__buttons.length;++i){
        var el = new Button(createTu__buttons[i]);
    }
    for (var i=0;i<createTu__forms.length;++i){
        var form = new Form(createTu__forms[i], btnOpen[i]);
        addForm.addElement (form);
    }
    // Форма добавления региона
    addForm.list[0].setBtnSubmitFunc(addRegionForm);
    // Форма добавление населённого пункта
    addForm.list[1].setBtnOpenFunc (addState);
    // Форма добавления улицы
    addForm.list[2].setBtnOpenFunc (addStreet);
}