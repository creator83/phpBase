class Button {
    constructor (element){
        this.body = element;
    }
    
}
class ButtonRotary extends Button {
    constructor (element){
        super (element);
        this.innerElement = this.body.getElementsByTagName('div')[0];
        console.log(this.body);
        console.log (this.innerElement);
        this.flagOpen = false;
        this.subscribeClick();
    }
    subscribeClick(){
        var flagPtr = this.flagOpen;
        this.innerElement.addEventListener ('click', function(){
            if (flagPtr == false){
                this.style.transform = "rotate(90deg)";
                flagPtr = true;
            }
            else {
                this.style.transform = "rotate(0deg)";
                flagPtr = false;
            }
        });
    }
}
class List {
    constructor (element){
        this.body = element;

    }
}
class InputField {

}
class Combobox {
    constructor (list, input, button){
        this.name;
        this.listWrapper = list;
        this.list = this.listWrapper.getElementsByTagName('ul')[0];
        this.inputField = input;
        this.inputFieldValue;
        this.buttonWrapper = button;
        this.buttonInner = this.buttonWrapper.getElementsByTagName('div')[0];
        console.log (this.buttonInner);
        this.flagOpen = false;
        this.subscribeBtnClick();
    }
    closeList (){
        this.buttonInner.style.transform = "rotate(0deg)";
        this.listWrapper.style.transform = "rotateX(90deg)";
        this.listWrapper.style.zIndex = '0';
    }
    openList (){
        this.buttonInner.style.transform = "rotate(90deg)";
        this.listWrapper.style.transform = "rotateX(0deg)";
        this.listWrapper.style.zIndex = '1';
    }
    subscribeBtnClick(){
        var objectPtr = this;
        this.buttonWrapper.addEventListener ('click', function(){
            if (objectPtr.flagOpen == false){
                objectPtr.openList();
                objectPtr.flagOpen = true;
            }
            else {
                objectPtr.closeList();
                objectPtr.flagOpen = false;
            }
        });
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
        this.closeList ();

    }
    clearList (){
        while (this.list.hasChildNodes()){
            this.list.removeChild(this.list.childNodes[0]);
        }
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
    getItemByIndex(num){
        var arr = this.list;
        return arr.forEach(function(item, i, arr){
            if (i==num){
                return item;
            }
        });      
    }
    getIndexByName (name){
        var arr = this.list;
        return arr.forEach(function(item, i, arr){
            if (item.name==name){
                return i;
            }
        });  
    }
    getItemByName (name){
        var arr = this.list;
        return arr.forEach(function(item, i, arr){
            if (item.name==name){
                return item;
            }
        });   
    }
}
class ComboboxList extends listObject {
    constructor (){
        super ();
    }
    refrashData (name){
        var index = this.getIndexByName (name);
        var request= new HttpRequest ("POST", "request.php");
        request.setRequest (this.list[index].name, this.list[index].inputFieldValue);
        request.sendRequest();
        request.receiveRequest (this.list[index]);

        for (var i=index+2;i<this.list.length;++i){
            this.list[i].clearList ();
        }
    }
}
class Form {

}