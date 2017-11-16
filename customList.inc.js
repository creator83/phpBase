class listS {
    constructor (list, obj, arrowPtr){
        this.flag = false;
        this.list = list;
        
        var temp = this.list.getAttribute ('class').split('_');
        this.name = temp[temp.length-1];
        this.arrow = arrowPtr(this.name);
        console.log (this.arrow);
        this.iValue;
        // this.name = this.list.parentNode.parentNode.getAttribute("class");
        this.pList = obj;
        // this.showListFunction = foo;
        // this.subscribeListFunction = foo1;
        this.currentValue;
        this.flag = false;
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
    }

    hideList(){
        var listPtr = this.list;
        var arrowPtr = this.arrow[0];
        setTimeout (function(){
            listPtr.style.transform = "rotateX(90deg)";
            arrowPtr.style.transform = "rotate(0deg)";
        }, 500);
        listPtr.style.zIndex = '0';
        this.flag = false;
    }
    setInputValue (){
        var tempFlag = false;
        var str = "data_"+this.name;
        var inputValues = document.getElementsByClassName ("inputValue");
        for (var j=0;j<inputValues.length;++j){
            var val = inputValues[j].getAttribute("class").split(" ")[1];
            if (val == str){
                if (this.innerHTML = undefined){
                    inputValues[j].value = "";
                }
                else{
                    inputValues[j].value = this.innerHTML;
                }
                tempFlag = true;
                continue;
            }
            if (tempFlag == true){
                inputValues[j].value = '';
            }  
        }

    }
    subscribe (){
        var list = document.getElementsByClassName (this.name + "_item");
        // var list = this.subscribeListFunction();
        var str = "data_"+this.name;
        var sValue;
        var key;
        for (var i=0;i< list.length;++i){
            var objPtr = this;
            list[i].addEventListener ("click", function(){
                var tempFlag = false;
                var inputValues = document.getElementsByClassName ("inputValue");
                for (var j=0;j<inputValues.length;++j){
                    var val = inputValues[j].getAttribute("class").split(" ")[1];
                    if (val == str){
                        inputValues[j].value = this.innerHTML;
                        objPtr.currentValue = this.innerHTML;
                        sValue = this.innerHTML;
                        tempFlag = true;
                        key = val.split("_")[1];
                        continue;
                    }
                    if (tempFlag == true && j<3){
                        var request = new HttpRequest ("POST", "request.php");
                        request.setRequest (key, sValue);
                        request.sendRequest();
                        request.receiveRequest(objPtr.pList[j]);
                        // console.log (objPtr.pList);
                        // request.receiveRequest(lists[j]);
                        val = inputValues[j].getAttribute("class").split(" ")[1];
                        inputValues[j].value = '';
                        key = val.split("_")[1];
                    }  
                }
                objPtr.hideList();
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
            el.setAttribute ("class", "list__items "+this.name+"__item");
            // el.style.display = 'inline- block';
            this.list.appendChild (el);
        }
        this.subscribe();
    }
}