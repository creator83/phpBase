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
var addMenuForm = [];
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
function init (){
    var createTu = document.getElementById('create-tu');
    var createTu__combobox = createTu.getElementsByClassName ('combobox-wrapper');
    var createTu__buttons = document.getElementsByClassName('button');
    var createTu__forms =  createTu.getElementsByClassName ('add-form');
    
    var createTu__function = new ListFunction();
    var selectItem = new ListFunction();
    createTu__function.addFunction(autoCloseList);
    selectItem.addFunction(updateFormCombo);
    for (var i=0;i<createTu__combobox.length;++i){
        var comboElement = new Combobox (createTu__combobox[i],createTu__combobox_list);
        createTu__combobox_list.addElement (comboElement);
        comboElement.setBtnClickFunc(createTu__function);
        comboElement.setItemSelectFunc(selectItem);
    }
    console.log (createTu__combobox_list.list.length);
    // заполнение списков регионы, районы
    fillCombobox(createTu__combobox_list.getItemByName('region'),'Краснодарский край', 'region');
    fillCombobox(createTu__combobox_list.getItemByName('district'), '','district');
    for (var i=0;i<createTu__buttons.length;++i){
        var el = new Button(createTu__buttons[i]);
    }
    // for (var i=0;i<createTu__forms.length;++i){
    //     var el = new Form(createTu__forms[i]);
    // }

}