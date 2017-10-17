HTMLCollection.prototype.map = Array.prototype.map;

window.addEventListener ("DOMContentLoaded", init);

function removeOptions (sel) {
    while (sel.length >0) {
    sel.remove (0);
}
}

function fillOptions(select, array) {
        var opt = document.createElement ("option");
        opt.value = "";
        select.add (opt);
    for (var i = 0; i < array.length; i++) {
        var opt1 = document.createElement ("option");
        opt1.value = i;
        opt1.text = array[i];
        select.add (opt1);
    }
}

function sendPost(header, val, address) {
    var value =  val.options[val.selectedIndex].innerHTML;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('POST', address, true);
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
    xmlhttp.send(header+"="+encodeURIComponent(value)); // Отправляем POST-запрос
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            buffer = xmlhttp.responseText.split (',');
        }
    }    
}
function requestPost () {
        xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            buffer = xmlhttp.responseText.split (',');
        }
    }   
}


function init (){
    var street = document.getElementById ("street");
    var state = document.getElementById ("state");
    var buff;
    state.addEventListener ("change", function () {
        var value =  this.options[this.selectedIndex].innerHTML;
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open('POST', 'request.php', true);
        xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
        xmlhttp.send("state="+encodeURIComponent(value)); // Отправляем POST-запрос
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4) {
                removeOptions (street);
                var arr = xmlhttp.responseText.split (',');
                fillOptions (street, arr);
                console.log (xmlhttp.responseText);
            }
        }
    });
    var region = document.getElementById ("reg");
    region.addEventListener ("change",function () {
        // console.log ();
        var value =  this.options[this.selectedIndex].innerHTML;
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open('POST', 'request.php', true);
        xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
        xmlhttp.send("reg="+encodeURIComponent(value)); // Отправляем POST-запрос
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4) {
                removeOptions (state);
                var arr = xmlhttp.responseText.split (',');
                fillOptions (state, arr);
                console.log (xmlhttp.responseText);
            }
        }
    });
    var addRegion = document.getElementById ("openReg");
    addRegion.addEventListener ("click", function () {
        var addRegForm = document.getElementById ("fon") ;
       addRegForm.style.display = "block";
    });

    var addReg_button = document.getElementById ("addReg-button");
    var clearReg_button = document.getElementById ("clearReg-button");
    var closeRegion = document.getElementById ("closeReg");
       closeRegion.addEventListener ("click", function () {
       
       var value =  document.getElementById("addReg").value;
       console.log (value);
       var xmlhttp = new XMLHttpRequest();
       xmlhttp.open('POST', 'add_region.php', true);
       xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
       xmlhttp.send("addReg="+encodeURIComponent(value)); // Отправляем POST-запрос
       xmlhttp.onreadystatechange = function () {
           if (xmlhttp.readyState == 4) {
                var addRegForm = document.getElementById ("fon") ;
                addRegForm.style.display = "none";
                console.log (xmlhttp.responseText);
           }
           
        }
    });
}