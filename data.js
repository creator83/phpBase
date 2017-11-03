window.addEventListener ("DOMContentLoaded", init);

function clickLabel (val) {
    
}
class CustomList {
    constructor(str) {

    }
}

function init (){
    var arrow = document.getElementsByClassName ("arrow");
    var majorLabel = document.getElementsByClassName ("majorMenu-label");
    var subMenuTuContainer = document.getElementById ("subMenuTU-container");
    var subMenuTulabel = document.getElementsByClassName ("subMenuTU-container__element");
    for (var i=0;i< arrow.length;++i){
        arrow[i].addEventListener ("click", function(){
            this.style.transform = "rotate(90deg)";
            var pStr = this.parentNode.parentNode.getAttribute("class");
            var list = document.getElementById (pStr+"_list_wrapper");
            list.style.display = "flex";
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