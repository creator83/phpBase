class Combobox {
    constructor(comboWrapper, collection){
        this.collection = collection;
        this.name = comboWrapper.getAttribute ('class').split('_').pop();
        this.list = comboWrapper.getElementsByTagName('ul')[0];
        this.inputField = comboWrapper.getElementsByTagName ('input')[0];
        this.inputFieldValue;
        this.button = comboWrapper.getElementsByClassName ('button-rotate')[0];
        this.buttonIcon = this.button.getElementsByTagName('div')[0];
        this.flagOpen = false;
        this.subscribeBtnClick();
        this.subscribeItemSelect();
    }
    setCallBack(func){
        this.callBack = func;
    }
    closeList (){
        this.buttonIcon.style.transform = "rotate(0deg)";
        this.list.style.transform = "rotateX(90deg)";
        this.list.style.zIndex = '0';
        this.flagOpen = false;
    }
    openList (){
        this.buttonIcon.style.transform = "rotate(90deg)";
        this.list.style.transform = "rotateX(0deg)";
        this.list.style.zIndex = '1';
        this.flagOpen = true;
    }
    subscribeBtnClick(){
        var objectPtr = this;
        this.button.addEventListener ('click', function(){
            if (objectPtr.flagOpen == false){
                objectPtr.openList();
                objectPtr.collection.closeOther(objectPtr.name);
            }
            else {
                objectPtr.closeList();
            }
        });
    }
    subscribeItemSelect(){
        var objPtr = this;
        var listItem = this.list.getElementsByTagName('li');
        for (var i=0;i<listItem.length;++i){
            listItem[i].addEventListener ('click', function(){
                objPtr.setInputValue (this.innerHTML);
                objPtr.closeList();
                // objPtr.collection.callBackFillOther(objPtr.name);
            });
        }
    }
    setInputValue (value) {
        this.inputFieldValue = value;
        this.inputField.value = value;
    }
    subscribeListClick(){
        var objPtr = this;
        var listItems = this.list.getElementsByTagName ('li');
        for (var i=0;i<listItems.length;++i){
            listItems[i].addEventListener ("click", function(){
                objPtr.setInputValue (this.innerHTML);
                objectPtr.closeList();
            });
        }
    }
    fillList (arr){
        this.clearList();
        for (var j=0;j<arr.length;++j){
            var item = document.createElement('li');
            item.innerHTML = arr[j];
            item.setAttribute ("class", "list__items");
            this.list.appendChild (item);
        }
        this.subscribeItemSelect();
    }
    clearList (){
        while (this.list.hasChildNodes()){
            this.list.removeChild(this.list.childNodes[0]);
        }
        this.inputField.value = '';
    }
}
class listObject {
    constructor (){
        this.list=[];
        this.currentItem=0;
    }
    addElement (item) {
        this.list.push(item);
    }
    setCurrentIndexByName (name){
        this.currentItem = this.getIndexByName(name);
    }
    getItemByIndex(num){
        var arr = this.list;
        return arr.forEach(function(item, i, arr){
            if (i==num){
                return item;
            }
        });      
    }
    getIndexByName (name){
        for (var i=0;i<this.list.length; ++i){
            if (this.list[i].name==name){
                return i;
            }
        }
    }
    getItemByName (name){
        for (var i=0;i<this.list.length; ++i){
            if (this.list[i].name==name){
                return this.list[i];
            }
        }
    }
}
class ComboboxList extends listObject {
    constructor (){
        super ();
    }
    callBackFillOther (name){
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
    callBackRequest (name){
        var index = this.getIndexByName (name);
        var request= new HttpRequest ("POST", "request.php");
        request.setRequest (this.list[index].name, this.list[index].inputFieldValue);
        request.sendRequest();
        request.receiveRequest (this.list[index]);

        for (var i=index+1;i<this.list.length-1;++i){
            this.list[i].clearList ();
        }
    }
    callBackOpen(name){
        for (var i=0;i<this.list.length;++i){
            if (this.list[i].name!=name){
                this.list[i].closeList();
            }
        }
    }
    fillCombobox(name, value){
        var index = this.getIndexByName (name);
        var request= new HttpRequest ("POST", "request.php");
        request.setRequest (this.list[index].name);
        request.sendRequest();
        request.receiveRequest (this.list[index]);
    }
    closeOther(name){
        for (var i=0;i<this.list.length;++i){
            if (this.list[i].name!=name){
                this.list[i].closeList();
            }
        }
    }
}
class ListFunction {
    constructor(){
        this.list = [];
    }
    addFunction(func){
        this.list.push(func);
    }
    iterate(){
        for (var i=0;i<this.list.length;++i){
            this.list[i]();
        }
    }
}
class Calendar{
    constructor(wrapper){
        this.wrapper = wrapper;
        this. currentDate = new Date();
        this.month = this.currentDate.getMonth();
        this.days = this.currentDate.getDate();
        this.fMonth = [];
        this.fillCalendar();
        this.tabCalendar = this.wrapper.getElementsByTagName("table")[0];
        this.createCalendar();
    }
    fillCalendar(){
        var tempDate = new Date (this.currentDate.getFullYear(), this.month);
        while (tempDate.getMonth()==this.month){
            this.fMonth.push (new Date(tempDate));
            tempDate.setDate(tempDate.getDate()+1);
        }
    }
    nextMonth(){
        currentDate.setMonth(currentDate.getMonth()+1);
    }
    prevMonth(){
        currentDate.setMonth(currentDate.getMonth()+1);
    }
    createCalendar(){
        var dayWeek = this.fMonth[0].getDay();
        console.log(dayWeek);
        var dayPtr = new Date (this.fMonth[0]);
        
        for (var i=1;i<=6;++i){
            if (dayPtr.getMonth()==this.month){
                var raw = document.createElement ('tr');
                this.tabCalendar.appendChild (raw);
                for(var j=1;j<7;++j){
                    if (dayPtr.getMonth()==this.month){
                        var el = document.createElement('td');
                            el.setAttribute('class', 'date-item');
                        if (dayPtr.getDay()==j){
                            el.appendChild(document.createTextNode(i*j));
                        }
                        else{
                            el.appendChild(document.createTextNode(""));
                        }
                        raw.appendChild (el);
                        dayPtr.setDate(dayPtr.getDate()+1);
                    }
                }
            }
            else{
                break;
            }
            
            
        }
    }
}
class Button{
    constructor(wrapper){
        this.wrapper = wrapper;
        this.subscribeBtnOpenMd();
        this.subscribeBtnOpenMu();
    }
    subscribeBtnOpenMd(){
        this.wrapper.addEventListener ('mousedown', function(){
            this.style.background = "linear-gradient(#97253D, #FE5D4C)";  
        });
    }
    subscribeBtnOpenMu(){
        this.wrapper.addEventListener ('mouseup', function(){
            this.style.background = "linear-gradient(#FE5D4C, #97253D)";
        });
    }
}
class Form {
    constructor (wrapper){
        this.wrapper = wrapper;
        this.blackWrapper = this.wrapper.getElementsByClassName('black-wrapper')[0];
        this.btnOpen = this.wrapper.getElementsByClassName('button_add__wrapper')[0];
        this.form = this.wrapper.getElementsByClassName('add-form')[0];
        this.btnClose = this.form.getElementsByClassName ('button_exit')[0];
        this.btnSubmit = this.form.getElementsByClassName('create-tu-add-menu__button')[0];
        this.btnReset = this.form.getElementsByClassName('create-tu-add-menu__button')[1];
        this.targetInput = this.form.getElementsByTagName ('input')[0];
        this.requestResult;
        this.subscribeBtnClose ();
        this.subscribeBtnOpen ();
    }    

    subscribeBtnOpen (){
        var objPtr = this;
        this.btnOpen.addEventListener ('click', function(){
          objPtr.openForm();  
        });
    }
    subscribeBtnClose (){
        var objPtr = this;
        this.btnClose.addEventListener ('click', function(){
          objPtr.closeForm();  
        });
    }
    openForm(){
        this.blackWrapper.style.display = 'block';
        this.blackWrapper.style.zIndex = '1';
        this.form.style.display = 'block';
    }

    closeForm(){
        this.form.style.display = 'none';
        this.blackWrapper.style.display = 'none';
        this.blackWrapper.style.zIndex = '0';
    }
    setResult (value){
        this.requestResult = value;
        console.log (this.requestResult);
    }
}
