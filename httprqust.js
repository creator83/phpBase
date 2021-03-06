
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
        this.onreadystatechange = function () {
            if (this.readyState == 4) {
                arr = this.responseText.split (',');
                console.log (arr);
                callBack.fillList(arr);
            }
        }
    }
}
