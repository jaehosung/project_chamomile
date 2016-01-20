var mapSpeed = 1000;
var gameOver = false;
/* Key operation */
$(document).ready(function(){
    //Load Item Images
    memoriesSet();
    obstacleSet();

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
    displayMemories(timeObj);
    displayObstacles(timeObj);
}


//#TODO after get the item it gonna display under the game board
function displayItem(item){
    item.src.css("top",300);
}

function gameStop(){
    clearInterval(idLoop);
    clearInterval(idRunner);
    for(var i = 0; i<obsArray.length; i++){
        clearInterval(obsArray[i].idItem);
    }
    for(var i = 0; i<Memories.length; i++){
        clearInterval(Memories[i].idItem);
    }
    clearInterval(idRoad);
    gameOver = true;
}
