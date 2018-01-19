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
    // var request= new HttpRequest ("POST", "request.php");
    // request.setRequest (combo.name, combo.inputFieldValue);
    // request.sendRequest();
    
    // request.receiveRequest (list);
    // var list=[];
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
var addForm =  new listObject (); 
function openFormAddRegion(name){

}
function init (){
    var createTu = document.getElementById('create-tu');
    var createTu__combobox = createTu.getElementsByClassName ('combobox-wrapper');
    var btnOpen = createTu.getElementsByClassName ('button_open');
    var createTu__buttons = document.getElementsByClassName('button');
    var createTu__forms =  createTu.getElementsByClassName ('add-form__container');
    var createTu__function = new ListFunction();
    var selectItem = new ListFunction();
    createTu__function.addFunction(autoCloseList);
    selectItem.addFunction(updateFormCombo);
    for (var i=0;i<createTu__combobox.length;++i){
        var name = createTu__combobox[i].getElementsByTagName('input')[0].getAttribute('name');
        if(name =='region'||name =='state'||name =='street'||name =='district'){
            var comboElement = new Combobox (createTu__combobox[i],createTu__combobox_list);
            createTu__combobox_list.addElement (comboElement);
            comboElement.setBtnClickFunc(createTu__function);
            comboElement.setItemSelectFunc(selectItem);
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

}