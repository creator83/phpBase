class HttpRequest extends XMLHttpRequest{
    constructor (method, file){
        super();
        this.request;
        this.method = method;
        this.file = file;
        this.receiveFlag = false;
        this.open (method, file, true);
        this.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        
    }
    setRequest (request, value){
        this.request = request+"="+encodeURIComponent(value);
    }
    sendRequest (){
        this.send(this.request);
    }
    receiveRequest (){
        var arr=[];
        this.onreadystatechange = function () {
            if (xmlhttp.readyState == 4) {
                arr = xmlhttp.responseText.split (',');
                console.log (arr);
                this.receiveFlag = true;
            }
        }
        while (this.receiveFlag==false);
        this.receiveFlag = false;
        return arr;
    }
}
var xmlhttp = new XMLHttpRequest();
xmlhttp.open('POST', 'request.php', true);
xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
var request = "region="+encodeURIComponent("region");
xmlhttp.send(request); // Отправляем POST-запрос
xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4) {
        // removeOptions (street);
        var arr = xmlhttp.responseText.split (',');
        for (var j=0;j<arr.length;++j){
            var el = document.createElement('li');
            el.innerHTML = arr[j];
            el.setAttribute ("class", "list_items region_item");
            regionList.appendChild (el);
        }
        var dataRegion = document.getElementsByClassName ("data_region");
        dataRegion[0].value = "Краснодарский край";
        subscribeList(lists);
    }
}