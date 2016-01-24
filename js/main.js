var mapSpeed = 1000;
var gameOver = false;
/* Key operation */
$(document).ready(function(){
    //Load Item Images
    memoriesSet();
    gameInitialSetting();
    obstacleSet();

    // Timer Setting 
    var timeGameStart = new Date;
    setTimer(timeGameStart);

    // Start Map animation
    mapMove($("#roadContainer"),linearDelta,mapSpeed);

    // Key operation
    keyOperation();


});
var obsTest = new Array();

function gameInitialSetting(){
    //set the number of types of obs
    var typesObs = 2;
    var obsStartSet = 5;
    var obsInterval = 5;
    if(obsStart >=Memories[0].date) console.log("Set the obsStart Value Again");
    for(var i = 0; i < Memories.length; i++){
        var interval;
        var obsStart;
        if(i == 0){
            obsStart = obsStartSet;
            interval = Memories[i].date;
        }else{
            obsStart = Memories[i-1].date;
            interval = Memories[i].date-Memories[i-1].date;
        }
        for(var j = 1; j < Math.floor(interval/obsInterval)-1; j++){
            var obsLoc = obsStart + obsInterval*j;
            var randomFactorLoc= Math.floor(Math.random()*3)+1;
            var randomFactorType = Math.floor(Math.random()*typesObs);
            var randomFactorType = Math.floor(Math.random()*typesObs);
            obsArray.push(new Obstacle(obsLoc+randomFactorLoc,randomFactorType));
        }
    }
}

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
