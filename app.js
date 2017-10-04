HTMLCollection.prototype.map = Array.prototype.map;
var combo = document.getElementById ("reg");
var sItem = document.getElementsByClassName ('region');

function foo() {
    sItem.map (x => x.removeAttribute("selected"));
    sItem[combo.value].setAttribute ("selected", "true");
}
/*
for (var i=0;i<sItem.length;++i){
    console.log (sItem[i]);
    if (sItem[i].innerText == "Вологодская область") {
        sItem[i].setAttribute ("selected", "true");
        break;
    }
    
}*/