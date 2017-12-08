window.addEventListener ("DOMContentLoaded", init);
HTMLCollection.prototype.forEach = Array.prototype.forEach;
var arr = ['asdf','asdf','asdff','ffg'];

// function update (combo, list){
//     var index = list.getIndexByName (combo.name);
//     var request= new HttpRequest ("POST", "request.php");
//     request.setRequest (list.list[index].name, list.list[index].inputFieldValue);
//     request.sendRequest();
//     request.receiveRequest (list.list[index]);

//     for (var i=index+2;i<list.list.length;++i){
//         list.list[i].clearList ();
//     }
// }
function init (){
    var combo1 = document.getElementsByClassName('combobox-wrapper');
    var createTuList = new ComboboxList ();
    var ev = new CustomEvent ('selectItem');
    combo1.forEach(function(item, i, combo1){
        var comboElement = new Combobox (combo1[i],createTuList);
        comboElement.fillList(arr);
        createTuList.addElement (comboElement);
    });
    var date = document.getElementsByClassName('calendar-wrapper')[0];
    console.log (date.getElementsByTagName('table')[0]);
    var cal = new Calendar (date);
    /*var combobox1 = new Combobox (combo1[0], update(combobox1, createTuList));
    var combobox2 = new Combobox (combo1[1], update(combobox2, createTuList));
    combobox1.fillList(arr);
    
    createTuList.addElement (combobox1);
    createTuList.addElement (combobox2);*/
}