class ListMenu {
    constructor (objArr,list, button, inputField){
        this.name;
        this.iValue;
        this.inputFieldValue;
        this.flag = false;
        this.arrPtr = objArr;
        this.list = list;
        this.liPtr = this.list.getElementsByTagName ('li');
        this.arrow = button;
        this.inputField = inputField;
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