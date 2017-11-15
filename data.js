

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
var listStateWindow = [];
var reg = ["one", "two", "three", "four"];
function showCombobox(item) {
    for (var i=0;i< item.length;++i){
        item[i].addEventListener ("click", function(){
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
}

var showMainList = function (){
    var list = document.getElementById (this.name+"_list_wrapper");
    return list;
}

var showSubList = function (){
    var list = document.getElementById ("sub-"+this.name+"-list_wrapper");
    return list;
}
var subscribeMainList = function(){
    var list = document.getElementsByClassName (this.name + "_item");
    return list;

}

function init (){
    // var arrow = document.getElementsByClassName ("arrow");
    var mArrow = document.getElementsByClassName ("main-window");
    var subArrowState = document.getElementsByClassName ('state-window');
    var majorLabel = document.getElementsByClassName ("majorMenu-label");
    var subMenuTuContainer = document.getElementById ("subMenuTU-container");
    var subMenuTulabel = document.getElementsByClassName ("subMenuTU-container__element");
    var buttonsAdd= document.getElementsByClassName ('add');
    var menuAdd = document.getElementsByClassName ('addData');
    var blackWrapper = document.getElementById ('black-wrapper');
    var btnExit = document.getElementsByClassName ("button-exit");

    // открытие окон добавления
    for (var i=0;i<buttonsAdd.length;++i){
        buttonsAdd[i].addEventListener ("click", function(){
            //затенение фона
            blackWrapper.style.display = 'block';
            blackWrapper.style.zIndex = '1';

            var str = "data_add" + this.parentNode.getAttribute('class').charAt(0).toUpperCase() + this.parentNode.getAttribute('class').substr(1);
            console.log (str);
            console.log (this.parentNode.getAttribute('class'));
            var menu = document.getElementsByClassName (str);
            console.log (menu[0].parentNode);
            menu[0].parentNode.style.display = 'block';
            var inputEl;
            for (var i=0;i<this.parentNode.childNodes.length;++i){
                if (this.parentNode.childNodes[i].hasAttribute("name")){
                    inputEl.push (this.parentNode.childNodes[i]);
                }
            }

            inputEl[0].value = "Hello";
        });
    }

    // Закрытие окон добавления
    for (var i=0;i<btnExit.length;++i){
        btnExit[i].addEventListener ("click", function(){
            console.log (this.parentNode);
            this.parentNode.style.display = 'none';
            blackWrapper.style.display = 'none';
        });
    }
    
    // подписка на выпадающие меню в основном окне
    for (var i=0;i< mArrow.length;++i){
        lists[i] = new listS(mArrow[i], lists, showMainList, subscribeMainList);
        console.log (lists[i].name);
        lists[i].subscribe();
    }
    // подписка на выпадающие меню в дополнительных окнах
   
    for (var i=0;i< subArrowState.length;++i){
        listStateWindow[i] = new listS(subArrowState[i], listStateWindow);
        console.log (lists[i].name);
        listStateWindow[i].subscribe();
    }    
    //показ и скрытие списков в основном окне
    
    for (var i=0;i< mArrow.length;++i){
        mArrow[i].addEventListener ("click", function(){
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
    // showCombobox (mArrow);
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
    request1.setRequest ("region", dataRegion[0].value);
    request1.sendRequest();
    request1.receiveRequest(lists[1]);
    var request2= new HttpRequest ("POST", "request.php");
    request2.setRequest ("district", "");
    request2.sendRequest();
    request2.receiveRequest(lists[3]);
    lists[3].subscribe();
}