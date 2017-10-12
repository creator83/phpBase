HTMLCollection.prototype.map = Array.prototype.map;

window.addEventListener ("DOMContentLoaded", init);

function sendPost(val1, val2) {
    var value =  val2;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('POST', 'request.php', true);
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
    xmlhttp.send(encodeURIComponent(val1)+encodeURIComponent(value)); // Отправляем POST-запрос
}


function init (){
    var street = document.getElementById ("street");
    var state = document.getElementById ("state");
    state.addEventListener ("change", function () {
        sendPost ("state", this.value);
    });
    var region = document.getElementById ("reg");
    region.addEventListener ("change",function () {
        var value =  this.value;
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open('POST', 'request.php', true);
        xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
        xmlhttp.send(encodeURIComponent(value)); // Отправляем POST-запрос
    });

   

    
}

// var combo = document.getElementById ("reg");
// var sItem = document.getElementsByClassName ('region');

// function foo() {
//     sItem.map (x => x.removeAttribute("selected"));
//     sItem[combo.value].setAttribute ("selected", "true");
// }

// var regionOption = document.createElement ("option");


/*
for (var i=0;i<sItem.length;++i){
    console.log (sItem[i]);
    if (sItem[i].innerText == "Вологодская область") {
        sItem[i].setAttribute ("selected", "true");
        break;
    }
    
}*/