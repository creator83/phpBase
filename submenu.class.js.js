class listS {
    constructor (list, obj, arrowPtr){
        this.flag = false;
        this.list = list;
        this.inputFieldValue;
        var temp = this.list.getAttribute ('class').split('_');
        this.name = temp[temp.length-1];
        this.arrow = arrowPtr(this.name);
        this.iValue;
        this.arrPtr = obj;
        this.currentValue;
        this.flag = false;
        this.subscribeArrow();
        this.liPtr = this.list.getElementsByTagName ('li');
        this.inputField = this.arrow[0].parentNode.previousElementSibling;
        this.subscribeSelectItem ();
    }
    setInputValue (value) {
        this.inputFieldValue = value;
        this.inputField.value = value;
    }
    subscribeArrow () {
        var objPtr = this;
        this.arrow[0].parentNode.addEventListener ('click', function(){
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
        var arrowPtr = this.arrow[0];
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
        var arrowPtr = this.arrow[0];
        setTimeout (function(){
            listPtr.style.transform = "rotateX(90deg)";
            arrowPtr.style.transform = "rotate(0deg)";
        }, 10);
        listPtr.style.zIndex = '0';
        this.flag = false;
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
    unsubcribe (){
        var list = document.getElementsByClassName (this.name + "_item");
        for (var i=0;i< list.length;++i){
            list[i].removeEventListener ("click", this.setInputValue());
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