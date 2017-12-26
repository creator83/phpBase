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
    var createTu__buttons = document.getElementsByClassName('button');
    var createTu__forms =  createTu.getElementsByClassName ('add-form__wrapper');
    var createTu__combobox_list = new ComboboxList ();
    var createTu__function = new ListFunction();
    createTu__function.addFunction(openList);
    for (var i=0;i<createTu__combobox.length;++i){
        var comboElement = new Combobox (createTu__combobox[i],createTu__combobox_list);
        createTu__combobox_list.addElement (comboElement);
    }
    // createTu__combobox_list.fillCombobox ('region');
    // createTu__combobox_list.getItemByName('region').setInputValue('Краснодарский край');
    // createTu__combobox_list.fillCombobox ('district');
    for (var i=0;i<createTu__buttons.length;++i){
        var el = new Button(createTu__buttons[i]);
    }
    for (var i=0;i<createTu__forms.length;++i){
        var el = new Form(createTu__forms[i]);
    }

}