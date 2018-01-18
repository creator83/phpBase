
class HttpRequest extends XMLHttpRequest{
    constructor (method, file){
        super();
        this.request;
        this.method = method;
        this.file = file;
        this.receiveFlag = false;
        this.open (this.method, this.file, true);
        this.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        
    }
    setRequest (request, value){
        if (value==undefined){
            value = '';
        }
        this.request = request+"="+encodeURIComponent(value);
    }
    sendRequest (){
        this.send(this.request);
    }
    setFlag(){
        this.receiveFlag = true;
    }
    clearFlag(){
        this.receiveFlag = false;
    }
    receiveRequest (callBack){
        var arr=[];
        // console.log(callBack);
        this.onreadystatechange = function () {
            if (this.readyState == 4) {
                arr = this.responseText.split (',');
                console.log (arr);
                // callBack.fillList(arr);
            }
        }
    }
    receiveRequestFunc (func, val){
        this.onreadystatechange = function () {
            if (this.readyState == 4) {
                var arr = this.responseText.split (',');
                console.log (arr);
                func.fillCombobox(arr, val);

            }
        }
    }
    receiveRequest1 (list){
        // console.log(callBack);
        this.onreadystatechange = function () {
            if (this.readyState == 4) {
                var arr = this.responseText.split (',');
                list = arr.slice(1);
                console.log(list);
            }
        }
    }
    receiveRequestArray(list){
        this.onreadystatechange = function () {
            if (this.readyState == 4) {
                var arr = this.responseText.split (',');
                list = arr.slice(1);
                console.log(list);
            }
        }
    }
    receiveRequest2 (){
        var arr = [];
        this.onreadystatechange = function () {
            if (this.readyState == 4) {
                arr = this.responseText.split (',');
                console.log (arr);  
                return arr;
            }
        }
    }
    receiveBoolRequest (callBack){
        var result;
        this.onreadystatechange = function () {
            if (this.readyState == 4) {
                result = this.responseText;
                console.log (result);
                // callBack.setResult(result);
            }
        }
    }
}
