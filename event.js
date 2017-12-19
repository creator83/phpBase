window.addEventListener ("DOMContentLoaded", init);

function init (){
    // document.body.addEventListener("myEventName", eventHandler, false);
    var element = document.getElementById('elem');

   function eventHandler(e) {
       alert("Event is called: " + e.type);
       console.log(e.detail.name);
   }
    
   var myEvent = new CustomEvent("myEventName",{
       'detail':{
            name:'Васьяя'
       }
   });
   element.addEventListener ("myEventName", eventHandler, false);
   element.addEventListener('click',function(){
        this.dispatchEvent(myEvent);
   });

//    document.body.dispatchEvent(myEvent);
}