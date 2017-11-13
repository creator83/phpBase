

window.addEventListener ("DOMContentLoaded", init);

function subscribeList (l){
    var allList = document.getElementsByClassName ("list_items");
    for (var i=0;i< allList.length;++i){
        allList[i].addEventListener ("click", function(){
            var str = this.parentNode.getAttribute("id").split ("_")[0];
            var inputValue = document.getElementsByClassName("data_"+str);
            var tempFlag = false;
            var inputValues = document.getElementsByClassName ("inputValue");
            for (var j=0;j<inputValues.length;++j){
                if (inputValues[j].getAttribute("class").split(" ")[1] == "data_"+str){
                    inputValues[j].value = this.innerHTML;
                    tempFlag = true;
                    continue;
                }
                if (tempFlag == true){
                    inputValues[j].value = '';
                }  
            }
            for (var j=0;j<l.length;++j){
                if (l[j].name == str){
                    l[j].hideList();
                    break;
                }
            }
        });
    }
}

function refrashList (l){

}

var lists = [];
var reg = ["one", "two", "three", "four"];

function init (){
    var arrow = document.getElementsByClassName ("arrow");
    var majorLabel = document.getElementsByClassName ("majorMenu-label");
    var subMenuTuContainer = document.getElementById ("subMenuTU-container");
    var subMenuTulabel = document.getElementsByClassName ("subMenuTU-container__element");

    for (var i=0;i< arrow.length;++i){
        lists[i] = new listS(arrow[i]);
        console.log (lists[i].name);
        lists[i].subscribe();
    }
    //показ и скрытие списков
    
    for (var i=0;i< arrow.length;++i){
        arrow[i].addEventListener ("click", function(){
            var listPtr;
            for (var j=0;j<lists.length;++j){
                if (lists[j].name == this.parentNode.parentNode.getAttribute("class")){
                    listPtr = lists[j];
                }
                else{
                    lists[j].hideList();
                }            
            }
            
            if (listPtr.flag == false){
                listPtr.showList();
            }
            else{
                listPtr.hideList();
            }
        });
    }
    for (var i=0;i< majorLabel.length;++i){
        majorLabel[i].addEventListener ("click", function(){
            var index;
            for (var j= 0; j < majorLabel.length; j++){
                majorLabel[j].style.background = 
                "linear-gradient(#FE5D4C, #97253D)"
                 //"background: linear-gradient(rgb(102, 206, 219), rgb(45, 15, 80));"
                ;
                if (majorLabel[j].textContent==this.textContent){
                    index=j;
                }
            }
            this.style.background = 
            "rgba(0,0,0,.9)"
            //"rgba(204, 220, 228, 0.3)"
            ;
            switch (index) {
            case 0:
                subMenuTuContainer.style.display = "flex";
                subMenuTulabel[1].style.background = "rgba(0,0,0,.9)";
                break;
            case 1:
            
            subMenuTuContainer.style.display = "none";
                break;
            case 2:
            
            subMenuTuContainer.style.display = "none";
                break;  
            case 3:
                
            subMenuTuContainer.style.display = "none";
            break;    
            default:
                break;
        }
        });
        
    }
    
    for (var i=0;i<subMenuTulabel.length;++i){
        subMenuTulabel[i].addEventListener ("click", function(){
            for (var j= 0; j < subMenuTulabel.length; j++){
                subMenuTulabel[j].style.background = "linear-gradient(#FE5D4C, #97253D)";
            }
            this.style.background = "rgba(0,0,0,.9)";
        });
    }

    var request= new HttpRequest ("POST", "request.php");
    request.setRequest ("region", "");
    request.sendRequest();
    request.receiveRequest(lists[0]);
    var dataRegion = document.getElementsByClassName ("data_region");
    dataRegion[0].value = "Краснодарский край";
    var request1= new HttpRequest ("POST", "request.php");
    request1.setRequest ("region", "Краснодарский край");
    request1.sendRequest();
    request1.receiveRequest(lists[1]);
}