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