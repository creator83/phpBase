window.addEventListener ("DOMContentLoaded", init);

function clickLabel (val) {
    
}
class CustomList {
    constructor(str) {

    }
}
function listClose (list){

}
class listS {
    constructor (list){
        this.flag = false;
        this.list = list;
        this.name = this.list.parentNode.parentNode.getAttribute("class");
    }
    setFlag (){
        this.flag = true;
    }
    clearFlag(){
        this.flag = false;
    }
    showList(){
        this.list.style.transform = "rotate(90deg)";
        var pStr = this.list.parentNode.parentNode.getAttribute("class");
        var list = document.getElementById (pStr+"_list_wrapper");
        list.style.display = "flex";
        
        setTimeout (function(){
            list.style.transform = "rotateX(0deg)";
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
        }, 500);
        
        this.flag = false;
    }
}
var flagArrow = false;

function init (){
    var arrow = document.getElementsByClassName ("arrow");
    var majorLabel = document.getElementsByClassName ("majorMenu-label");
    var subMenuTuContainer = document.getElementById ("subMenuTU-container");
    var subMenuTulabel = document.getElementsByClassName ("subMenuTU-container__element");
    var lists = [];
    var regionList = document.getElementsByClassName ("list_items");
    var inputValues = document.getElementsByClassName ("inputValue");
    for (var i=0;i< arrow.length;++i){
        lists[i] = new listS(arrow[i]);
    }
    
    for (var i=0;i< regionList.length;++i){
        regionList[i].addEventListener ("click", function(){
            var str = this.parentNode.getAttribute("id").split ("_")[0];
            var inputValue = document.getElementsByClassName("data_"+str);
            for (var j=0;j<inputValues.length;++j){
                inputValues[j].value = undefined;
            }
            inputValue[0].value = this.innerHTML;
            
            for (var j=0;j<lists.length;++j){
                if (lists[j].name == str){
                    lists[j].hideList();
                    break;
                }
            }

            var xmlhttp = new XMLHttpRequest();
            xmlhttp.open('POST', 'request.php', true);
            xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
            xmlhttp.send(str+"="+encodeURIComponent(this.innerHTML)); // Отправляем POST-запрос
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4) {
                    // removeOptions (street);
                    var arr = xmlhttp.responseText.split (',');
                    // fillOptions (street, arr);
                    console.log (xmlhttp.responseText);
                }
            }

        });
        
    }


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
                // this.style.transform = "rotate(90deg)";
                // var pStr = this.parentNode.parentNode.getAttribute("class");
                // var list = document.getElementById (pStr+"_list_wrapper");
                // list.style.display = "flex";
                
                // setTimeout (function(){
                //     list.style.transform = "rotateX(0deg)";
                // }, 10);
                // flagArrow = true;
            }
            else{
                listPtr.hideList();
                // this.style.transform = "rotate(0deg)";
                // var pStr = this.parentNode.parentNode.getAttribute("class");
                // var list = document.getElementById (pStr+"_list_wrapper");
                // list.style.transform = "rotateX(90deg)";
                // setTimeout (function(){
                //     list.style.display = "none";
                // }, 500);
                
                // flagArrow = false;
            }
        });
        // var attr = this.attributes;
        
        // var list = document.getElementById ();
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

}