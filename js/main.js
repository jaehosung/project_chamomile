var mapSpeed =1000;
/* Key operation */
$(document).ready(function(){
    //Load Item Images
    memoriesSet();

    // Timer Setting 
    var timeGameStart = new Date;
    setTimer(timeGameStart);

    // Start Map animation
    mapMove($("#roadContainer"),linearDelta,mapSpeed);

    // Key operation
    keyOperation();
});

/* Game Loop under Timer */
function loop(timeObj){
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
        if(collisionCheck($("#runner"),Memories[i].item.src)&&Memories[i].item.get==false){
            Memories[i].item.get=true;
            itemSound();
            clearInterval(Memories[i].idItem);
            displayItem(Memories[i].item);
            //#TODO Showing Item bottom of the screen
        }
    }
}


//#TODO after get the item it gonna display under the game board
function displayItem(item){
    item.src.css("top",300);
}
