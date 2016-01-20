var mapSpeed =1000;
var itemObj;

/* Key operation */
$(document).ready(function(){

    memoriesSet();

    // Declare Item Object -> after image load
    itemObj = new Item($("#item1"),false,10);

    // Timer Setting 
    var timeGameStart = new Date;
    setTimer(timeGameStart);


    // Start Map animation
    mapMove($("#roadContainer"),linearDelta,mapSpeed);
    
    // Key operation
    keyOperation();


});

var idItems;
// Game Loop
function loop(timeObj){
    //throwItem(timeObj.days,itemObj);
    /*
    if(collisionCheck($("#runner"),itemObj.src)&&itemObj.get==false){
        itemObj.get=true;
        itemSound();
        clearInterval(idItem);
        displayItem(itemObj);
        //#TODO Showing Item bottom of the screen
    }
    */

    for(var i = 0; i< Memories.length; i++){
        throwItem(timeObj.days,Memories[i],i);
    }
}
//#TODO after get the item it gonna display under the game board
function displayItem(item){
    item.src.css("top",300);
}

/*Functions for location*/
function getBottomLoc(){
    return $("#container").outerHeight(true)-($("#runner").position().top+$("#runner").outerHeight(true));
}
function calTopLoc(bottomLoc){
    return $("#container").outerHeight(true)-(bottomLoc+$("#runner").outerHeight(true));
}
