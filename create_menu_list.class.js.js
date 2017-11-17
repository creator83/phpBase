class CreateMenuList extends ListMenu {
    constructor (objArr,list, button, inputField){
        super (objArr, list, button, inputField);
        var temp = this.list.getAttribute ('class').split('_');
        this.name = temp[temp.length-1];
        console.log (this.name);
        console.log (this.list);
        console.log (this.inputField);
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
            el.setAttribute ("class", this.name+"__item");
            this.list.appendChild (el);
        }
        this.subscribeSelectItem();
    }
}