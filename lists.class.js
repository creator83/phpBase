class ListMenu {
    constructor (objArr,list, button){
        this.name;
        this.iValue;
        this.inputFieldValue;
        this.flag = false;
        this.arrPtr = objArr;
        this.list = list;
        this.liPtr = list.getElementsByTagName ('li');
        this.arrow = button;
        this.inputField = this.arrow.previousElementSibling;
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
        var listPtr = this.list;
        var arrowPtr = this.arrow;
        listPtr.style.display = "block";
        setTimeout (function(){
            listPtr.style.transform = "rotateX(0deg)";
            listPtr.style.zIndex = '1';
            arrowPtr.style.transform = "rotate(90deg)";
        }, 10);
        this.flag = true;
    }

    hideList(){
        var listPtr = this.list;
        var arrowPtr = this.arrow;
        setTimeout (function(){
            listPtr.style.transform = "rotateX(90deg)";
            arrowPtr.style.transform = "rotate(0deg)";
        }, 10);
        listPtr.style.zIndex = '0';
        this.flag = false;
    }
}

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