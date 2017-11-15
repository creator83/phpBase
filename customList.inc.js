class listS {
    constructor (list, obj, foo, foo1){
        this.flag = false;
        this.list = list;
        this.iValue;
        this.name = this.list.parentNode.parentNode.getAttribute("class");
        this.pList = obj;
        this.showListFunction = foo;
        this.subscribeListFunction = foo1;
        this.currentValue;
    }
    setParentList(arr) {
        this.pList = arr;
    }
    setFlag (){
        this.flag = true;
    }
    clearFlag(){
        this.flag = false;
    }
    showList(){
        this.list.style.transform = "rotate(90deg)";
        var list = this.showListFunction();
        list.style.display = "block";
        setTimeout (function(){
            list.style.transform = "rotateX(0deg)";
            list.style.zIndex = '1';
        }, 10);
        this.flag = true;
    }

    hideList(){
        this.list.style.transform = "rotate(0deg)";
        var pStr = this.list.parentNode.parentNode.getAttribute("class");
        var list = document.getElementById (pStr+"_list_wrapper");
        list.style.transform = "rotateX(90deg)";
        setTimeout (function(){
            list.style.display = "none";
            list.style.zIndex = '0';
        }, 500);
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
        var list = document.getElementById (this.name + "_list");
        while (list.hasChildNodes()){
            list.removeChild(list.childNodes[0]);
        }
        for (var j=0;j<arr.length;++j){
            var el = document.createElement('li');
            el.innerHTML = arr[j];
            el.setAttribute ("class", "list_items "+this.name+"_item");
            // el.style.display = 'inline- block';
            list.appendChild (el);
        }
        this.subscribe();
    }
}