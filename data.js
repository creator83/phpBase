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
var buttons =  new listObject (); 
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
function addState(objPtr){
    var regionF = objPtr.formWrapper.getElementsByTagName ('input')[0];
    var prfxStateF = objPtr.formWrapper.getElementsByTagName ('input')[1];
    var stateF = objPtr.formWrapper.getElementsByTagName ('input')[2];
    if (regionF.value!=''&&prfxStateF.value!=''&&stateF.value!=''){
        var req = new XMLHttpRequest();
        var data = JSON.stringify({
            region: regionF.value,
            prfxState: prfxStateF.value,
            state: stateF.value
        });
        req.onreadystatechange = function(){
            if (req.readyState != 4) return;
            var result = req.responseText;
            console.log(result);
            
        }
        // метод POST
        req.open("POST", "add_state.php",true);
        
        // Установка заголовков
        req.setRequestHeader('Content-Type', 'text/plain');
       
        // Отправка данных
        req.send(data);	
        objPtr.closeForm();
    }
}
function addStreet(objPtr){
    var stateF = objPtr.formWrapper.getElementsByTagName ('input')[0];
    var prfxStreetF = objPtr.formWrapper.getElementsByTagName ('input')[1];
    var streetF = objPtr.formWrapper.getElementsByTagName ('input')[2];
    if (stateF.value!=''&&prfxStreetF.value!=''&&streetF.value!=''){
        var req = new XMLHttpRequest();
        var data = JSON.stringify({
            state: stateF.value,
            prfxStreet: prfxStreetF.value,
            street: streetF.value
        });
        req.onreadystatechange = function(){
            if (req.readyState != 4) return;
            var result = req.responseText;
            console.log(result);
        }
        // метод POST
        req.open("POST", "add_street.php",true);
        
        // Установка заголовков
        req.setRequestHeader('Content-Type', 'text/plain');
       
        // Отправка данных
        req.send(data);	
        objPtr.closeForm();
    }
}
function addTu(objPtr){
    var sureNameF = document.getElementsByClassName ('data-field_sur-name')[0].value;
    var firstNameF = document.getElementsByClassName ('data-field_first-name')[0].value;
    var middleNameF = document.getElementsByClassName ('data-field_mid-name')[0].value;
    var streetF = document.getElementsByClassName ('data-field_street')[0].value;
    var houseF = document.getElementsByClassName ('data-field_house')[0].value;
    var korpF = document.getElementsByClassName ('data-field_corps')[0].value;
    var apF = document.getElementsByClassName ('data-field_apartment')[0].value;
    var phoneF1 = document.getElementsByClassName ('data-field_prfx-phone')[0].value;
    var phoneF2 = document.getElementsByClassName ('data-field_num-phone')[0].value;
    var districtF = document.getElementsByClassName ('data-field_district')[0].value;
    var kadastrF1 = document.getElementsByClassName ('data-field_kadastr-district')[0].value;
    var kadastrF2 = document.getElementsByClassName ('data-field_kadastr-number')[0].value;
    var addressF = document.getElementsByClassName ('data-field_address')[0].value;
    var typeTuF = document.getElementsByClassName ('data-field_type-tu')[0].value;
    var additionalF = document.getElementsByClassName ('data-field_additional')[0].checked;

    if (sureNameF!=''&&firstNameF!=''&&middleNameF!=''&&streetF!=''&&houseF!=''
    &&phoneF1!=''&&phoneF2!=''&&districtF!=''&&kadastrF1!=''&&kadastrF2!=''&&typeTuF!=''){
    
        var req = new XMLHttpRequest();
        var data = JSON.stringify({
            sureName: sureNameF,
            firstName: firstNameF,
            midName: middleNameF,
            street: streetF,
            house: houseF,
            korp: korpF,
            ap: apF,
            phone: phoneF1+phoneF2,
            district: districtF,
            kadastr: kadastrF1+kadastrF2,
            address: addressF,
            typetu: typeTuF,
            additional: additionalF==true?1:0
        });
        req.onreadystatechange = function(){
            if (req.readyState != 4) return;
            var result = req.responseText;
            console.log(result);

        }
        // метод POST
        req.open("POST", "add_tu.php",true);
        
        // Установка заголовков
        req.setRequestHeader('Content-Type', 'text/plain');
        
        // Отправка данных
        req.send(data);	
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
    // var btnSubmit = document.getElementsByClassName('create-tu__button-add')[0].getElementsByTagName('div');
    //===функции формы добавления населённого пункта===//
    // нажатие кнопки open
    var addStateOpen = new ListFunction();
    addStateOpen.addFunction(openFormAddState);
    // нажатие кнопки submit
    var addStateSubmit = new ListFunction();
    addStateSubmit.addFunction(addState);

    //===функции формы добавления населённого пункта===//
    // нажатие кнопки open
    var addStreetOpen = new ListFunction();
    addStreetOpen.addFunction(openFormAddStreet);

    // нажатие кнопки submit
    var addStreetSubmit = new ListFunction();
    addStreetSubmit.addFunction(addStreet);

    createTu__function.addFunction(autoCloseList);
    selectItem.addFunction(updateFormCombo);
    addRegionForm.addFunction (addRegion);

    // === функции кнопки создания ТУ ===//
    var addTuSubmit = new ListFunction();
    addTuSubmit.addFunction (addTu);

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

    // заполнение префиксов населённых пунктов и улиц
    fillCombobox(addFormsCombo.getItemByName('prfx-state'), '','prfx-state');
    fillCombobox(addFormsCombo.getItemByName('prfx-street'), '','prfx-street');

    fillCombobox(createTu__combobox_list.getItemByName('type-tu'), 'без проекта','type-tu');
    console.log(createTu__buttons);
    for (var i=0;i<createTu__buttons.length;++i){
        var el = new Button(createTu__buttons[i]);
        buttons.addElement(el);
    }
    buttons.list[12].setBtnClickFunc (addTuSubmit);

    for (var i=0;i<createTu__forms.length;++i){
        var form = new Form(createTu__forms[i], btnOpen[i]);
        addForm.addElement (form);
    }
    // Форма добавления региона
    addForm.list[0].setBtnSubmitFunc(addRegionForm);
    // Форма добавление населённого пункта
    addForm.list[1].setBtnOpenFunc (addStateOpen);
    addForm.list[1].setBtnSubmitFunc(addStateSubmit);
    // Форма добавления улицы
    addForm.list[2].setBtnOpenFunc (addStreetOpen);
    addForm.list[2].setBtnSubmitFunc(addStreetSubmit);
}
