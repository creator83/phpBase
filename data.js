

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



function init (){
    var arrow = document.getElementsByClassName ("arrow");
    var majorLabel = document.getElementsByClassName ("majorMenu-label");
    var subMenuTuContainer = document.getElementById ("subMenuTU-container");
    var subMenuTulabel = document.getElementsByClassName ("subMenuTU-container__element");
    var lists = [];
    subscribeList();
    // var inputValues = document.getElementsByClassName ("inputValue");
    for (var i=0;i< arrow.length;++i){
        lists[i] = new listS(arrow[i]);
    }
    subscribeList (lists);
    /*
    var allList = document.getElementsByClassName ("list_items");
    for (var i=0;i< allList.length;++i){
        allList[i].addEventListener ("click", function(){
            var str = this.parentNode.getAttribute("id").split ("_")[0];
            var inputValue = document.getElementsByClassName("data_"+str);
            var tempFlag = false;
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
            
            for (var j=0;j<lists.length;++j){
                if (lists[j].name == str){
                    lists[j].hideList();
                    break;
                }
            }
        });
    }*/
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
    var regionList = document.getElementById ("region_list");
    // var regionItem = document.getElementsByClassName ("region_item");
    while (regionList.hasChildNodes()){
        regionList.removeChild(regionList.childNodes[0]);
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

}