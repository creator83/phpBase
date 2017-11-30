window.addEventListener ("DOMContentLoaded", init);

function init (){
    var button = document.getElementsByClassName('arrow-wrapper')[0];
    var list = document.getElementsByClassName('create-tu-list-container')[0];
    var inputField = document.getElementsByTagName('input')[0];
    var combobox1 = new Combobox (list, inputField, button);
}