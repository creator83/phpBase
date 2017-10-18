window.addEventListener ("DOMContentLoaded", init);


function init (){
    var submitButton = document.getElementById ("sButton");
    var clearButton = document.getElementById ("cButton");
    submitButton.addEventListener ("mousedown", function(){
        this.style.background = "linear-gradient(#97253D, #FE5D4C)";
    });
    submitButton.addEventListener ("mouseup", function(){
        this.style.background = "linear-gradient(#FE5D4C, #97253D)";
    });
    clearButton.addEventListener ("mousedown", function(){
        this.style.background = "linear-gradient(#97253D, #FE5D4C)";
    }); 
    clearButton.addEventListener ("mouseup", function(){
        this.style.background = "linear-gradient(#FE5D4C, #97253D)";
    });
}
