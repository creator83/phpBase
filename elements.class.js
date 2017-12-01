class Combobox {
    constructor(comboWrapper, collection){
        this.collection = collection;
        this.name = comboWrapper.getAttribute ('class').split('_').pop();
        this.listWrapper = comboWrapper.getElementsByClassName ('list-container')[0];
        this.list = this.listWrapper.getElementsByTagName('ul')[0];
        this.inputField = comboWrapper.getElementsByTagName ('input')[0];
        this.inputFieldValue;
        this.buttonWrapper = comboWrapper.getElementsByClassName ('button-wrapper')[0];
        this.buttonInner = this.buttonWrapper.getElementsByTagName('div')[0];
        // this.callBack = collection;  
        this.flagOpen = false;
        this.subscribeBtnClick();
        this.subscribeItemSelect();
        // var myEvent = new CustomEvent ('getName')
    }
    setCallBack(func){
        this.callBack = func;
    }
    closeList (){
        this.buttonInner.style.transform = "rotate(0deg)";
        this.listWrapper.style.transform = "rotateX(90deg)";
        this.listWrapper.style.zIndex = '0';
        this.flagOpen = false;
    }
    openList (){
        this.buttonInner.style.transform = "rotate(90deg)";
        this.listWrapper.style.transform = "rotateX(0deg)";
        this.listWrapper.style.zIndex = '1';
        this.flagOpen = true;
    }
    subscribeBtnClick(){
        var objectPtr = this;
        this.buttonWrapper.addEventListener ('click', function(){
            if (objectPtr.flagOpen == false){
                objectPtr.openList();
                objectPtr.collection.callBackOpen(objectPtr.name);
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
                objPtr.collection.callBack(objPtr.name);
                
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
        this.closeList ();
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
                return item;
            }
        }
    }
}
class ComboboxList extends listObject {
    constructor (){
        super ();
    }
    callBack (name){
        var index = this.getIndexByName (name);
        /*var request= new HttpRequest ("POST", "request.php");
        request.setRequest (this.list[index].name, this.list[index].inputFieldValue);
        request.sendRequest();
        request.receiveRequest (this.list[index]);*/

        for (var i=index+1;i<this.list.length;++i){
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
}
class Form {

}