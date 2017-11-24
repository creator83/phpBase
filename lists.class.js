class ListMenu {
    constructor (objArr,list, button){
        this.name;
        this.inputFieldValue;
        this.flag = false;
        this.arrPtr = objArr;
        this.list = list;
        this.liPtr = list.getElementsByTagName ('li');
        this.arrow = button;
        this.inputField = this.arrow.previousElementSibling;
    }
    
    closeAll(){
        for (var i=0;i<this.arrPtr.length;++i){
            this.arrPtr[i].hideList();
        }
    }
    getObject (name){
        for (var i=0;i<this.arrPtr.length;++i){
            if (this.arrPtr[i].name = name){
                return this.arrPtr[i];
            }
        }
        return false;
    }
    getNextObject (){
        for (var i=0;i<this.arrPtr.length;++i){
            if (this.arrPtr[i].name = this.name){
                return this.arrPtr[i+1];
            }
        }
        return false;
    }
    getIndexObject(){
        for (var i=0;i<this.arrPtr.length;++i){
            if (this.arrPtr[i].name = this.name){
                return i;
            }
        }
        return false;
    }
    setInputValue (value) {
        this.inputFieldValue = value;
        this.inputField.value = value;
    }
    subscribeArrow () {
        var objPtr = this;
        this.arrow.addEventListener ('click', function(){
            if (objPtr.flag == false) {
                objPtr.showList();
                objPtr.flag = true;
                for (var i=0;i<objPtr.arrPtr.length;++i){
                    if (objPtr.arrPtr[i].name != objPtr.name){
                        objPtr.arrPtr[i].hideList();
                    }
                }
            }
            else{
                objPtr.hideList();
                objPtr.flag = false;
            }
        });
    }
    setFlag (){
        this.flag = true;
    }
    clearFlag(){
        this.flag = false;
    }
    showList(){
        this.list.style.display = "block";
        this.list.style.transform = "rotateX(0deg)";
        this.list.style.zIndex = '1';
        this.arrow.firstElementChild.style.transform = "rotate(90deg)";
        this.flag = true;
    }

    hideList(){
        this.list.style.transform = "rotateX(90deg)";
        this.list.style.zIndex = '0';
        this.arrow.firstElementChild.style.transform = "rotate(0deg)";
        this.flag = false;
    }
}

class CreateMenuList extends ListMenu {
    constructor (objArr,list, button, inputField){
        super (objArr, list, button, inputField);
        var temp = this.list.getAttribute ('class').split('_');
        this.name = temp[temp.length-1];
        this.subscribeArrow();
        this.subscribeSelectItem ();
    }
    subscribeSelectItem (){
        var objPtr = this;
        var parArr = this.arrPtr;
        for (var i=0;i< this.liPtr.length;++i){ 
            this.liPtr[i].addEventListener ("click", function(){
                objPtr.setInputValue (this.innerHTML);
                objPtr.hideList();
                var flag = false;
                for (var i=0;i<parArr.length;++i){
                    if (parArr[i].name == objPtr.name){
                        flag = true;
                    }
                    else {
                        if (flag == true && i<3){
                            fillList (parArr[i], parArr[i-1].name, parArr[i-1].inputFieldValue);
                            parArr[i].setInputValue ('');
                        }
                    }
                }
            });
        }
    }
    fillList(arr){
        while (this.list.hasChildNodes()){
            this.list.removeChild(this.list.childNodes[0]);
        }
        for (var j=0;j<arr.length;++j){
            var el = document.createElement('li');
            el.innerHTML = arr[j];
            el.setAttribute ("class", this.name+"__item list__items");
            this.list.appendChild (el);
        }
        this.subscribeSelectItem();
    }
    updateFrom (index){
        for (var i=index;i<this.arrPtr.length;++i){
                if (i<3){
                    fillList (this.arrPtr[i], this.arrPtr[i-1].name, this.arrPtr[i-1].inputFieldValue);
                }
            }
    }
    
}

class Form {
    constructor (objArr, btnOpen, form, sourceList){
        this.name;
        this.arrPtr = objArr;
        this.btnOpen = btnOpen;
        this.form = form;
        this.wrapper = form.parentNode;
        this.btnClose = this.form.getElementsByClassName ('button_exit')[0];
        this.btnSubmit = this.form.getElementsByClassName('create-tu-add-menu__button')[0];
        this.btnReset = this.form.getElementsByClassName('create-tu-add-menu__button')[1];
        this.targetInput = this.form.getElementsByTagName ('input')[0];
        this.requestResult;
        this.sourceList = sourceList;
        this.subscribeBtnClose ();
        this.subscribeBtnOpenMd();
        this.subscribeBtnOpenMu();
        this.subscribeBtnCloseMd();
        this.subscribeBtnCloseMu();
        this.subscribeBtnSubmitMd();
        this.subscribeBtnSubmitMu();
        this.subscribeBtnResetMd();
        this.subscribeBtnResetMu();
    }
    
    subscribeBtnCloseMd(){
        var btnClosePtr = this.btnClose;
        this.btnClose.addEventListener ('mousedown', function(){
            btnClosePtr.style.background = "linear-gradient(#97253D, #FE5D4C)";
        });
    }
    subscribeBtnCloseMu(){
        var btnClosePtr = this.btnClose;
        this.btnClose.addEventListener ('mouseup', function(){
            btnClosePtr .style.background = "linear-gradient(#FE5D4C, #97253D)";
        });
    }

    subscribeBtnOpenMd(){
        var btnOpenPtr = this.btnOpen;
        this.btnOpen.addEventListener ('mousedown', function(){
            btnOpenPtr.style.background = "linear-gradient(#97253D, #FE5D4C)";  
        });
    }
    subscribeBtnOpenMu(){
        var btnOpenPtr = this.btnOpen;
        this.btnOpen.addEventListener ('mouseup', function(){
            btnOpenPtr.style.background = "linear-gradient(#FE5D4C, #97253D)";
        });
    }
    subscribeBtnSubmitMd(){
        var btnSubmitPtr = this.btnSubmit;
        this.btnSubmit.addEventListener ('mousedown', function(){
            btnSubmitPtr.style.background = "linear-gradient(#97253D, #FE5D4C)";  
        });
    }
    subscribeBtnSubmitMu(){
        var btnSubmitPtr = this.btnSubmit;
        this.btnSubmit.addEventListener ('mouseup', function(){
            btnSubmitPtr.style.background = "linear-gradient(#FE5D4C, #97253D)";
        });
    }
    subscribeBtnResetMd(){
        var btnResetPtr = this.btnReset;
        this.btnReset.addEventListener ('mousedown', function(){
            btnResetPtr.style.background = "linear-gradient(#97253D, #FE5D4C)";  
        });
    }
    subscribeBtnResetMu(){
        var btnResetPtr = this.btnReset;
        this.btnReset.addEventListener ('mouseup', function(){
            btnResetPtr.style.background = "linear-gradient(#FE5D4C, #97253D)";
        });
    }
    
    subscribeBtnClose (){
        var objPtr = this;
        this.btnClose.addEventListener ('click', function(){
          objPtr.closeForm();  
        });
    }
    openForm(){
        this.wrapper.style.display = 'block';
        this.wrapper.style.zIndex = '1';
        this.form.style.display = 'block';
    }

    closeForm(){
        this.form.style.display = 'none';
        this.wrapper.style.display = 'none';
        this.wrapper.style.zIndex = '0';
    }
    setResult (value){
        this.requestResult = value;
        console.log (this.requestResult);
    }
}

class SimpleForm extends Form {
    constructor (objArr, btnOpen, form, sourceList){
        super(objArr, btnOpen, form, sourceList);
        this.subscribeBtnOpen ();
        this.subscribeBtnSubmit();
    }

    subscribeBtnOpen () {
        var objPtr = this;
        this.btnOpen.addEventListener ('click', function(){
            objPtr.sourceList.closeAll();
            objPtr.openForm();
        });
    }
    subscribeBtnSubmit(){
        var objPtr = this;
        this.btnSubmit.addEventListener ('click', function(){
            if (objPtr.targetInput.value != ''){
                // http запрос 
                var request= new HttpRequest ("POST", "request.php");
                request.setRequest ('add-region', objPtr.targetInput.value);
                request.sendRequest();
                // Получение результата операции БД
                request.receiveBoolRequest (objPtr);
                //Сохранить записать введенное значение в поле регион формы создания ТУ
                objPtr.sourceList.setInputValue (objPtr.targetInput.value);
                // обновить все combobox формы создания ТУ
                // закрыть форму добавления
                objPtr.closeForm();
                objPtr.sourceList.updateFrom (objPtr.sourceList.getIndexObject);
            }
            
        });
    }
    subscribeBtnReset (){
        // очистить поле регион
        
    }
}

class AdvanceForm extends Form {
    constructor (objArr, btnOpen, form, sourceList){
        super (objArr, btnOpen, form, sourceList);
        this.sourceInput = sourceList.inputField;
        this.targetInputMainForm = this.sourceList.getNextObject().inputField;
        this.addInput = this.form.getElementsByTagName ('input')[2];
        this.addInputName = this.addInput.getAttribute('name');
        this.prfxInput = this.form.getElementsByTagName ('input')[1];
        this.subscribeBtnOpen ();
        this.subscribeBtnSubmit();
    }
    setTargetInput (){
        this.targetInput.value = this.sourceInput.value;
    }
    subscribeBtnOpen () {
        var objPtr = this;
        this.btnOpen.addEventListener ('click', function(){
            objPtr.sourceList.closeAll();
            objPtr.openForm();
            objPtr.setTargetInput();
        });
    }    
    subscribeBtnSubmit(){
        var objPtr = this;
        this.btnSubmit.addEventListener ('click', function(){
            if (objPtr.targetInput.value != '' && objPtr.addInput.value!='' && objPtr.prfxInput.value!=''){
                // http запрос 
                var request= new HttpRequest ("POST", "request.php");
                var str = objPtr.addInput.value+','+objPtr.targetInput.value+','+objPtr.prfxInput.value;
                // console.log (str);
                request.setRequest (objPtr.addInputName, str);
                request.sendRequest();
                // Получение результата операции БД
                request.receiveBoolRequest (objPtr);
                //Сохранить записать введенное значение в поле регион формы создания ТУ
                objPtr.sourceList.setInputValue (objPtr.targetInput.value);
                // обновить все combobox формы создания ТУ
                // закрыть форму добавления
                objPtr.closeForm();
                objPtr.sourceList.updateFrom (objPtr.sourceList.getIndexObject);
            }
            
        });
    }
}
