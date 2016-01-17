var mapSpeed =1000;
var itemObj;

/* Key operation */
$(document).ready(function(){
    // Declare Item Object -> after image load
    itemObj = new Item($("#item1"),false,10);

    // Timer Setting 
    var timeGameStart = new Date;
    setTimer(timeGameStart);


    // Start Map animation
    mapMove($("#roadContainer"),linearDelta,mapSpeed);


    //Keyoperation
    $(document).keydown(function(e){
        if(e.keyCode==32 && getBottomLoc()==0){
            jumpSound();
            jumpRunner($("#runner"),jumpDelta,500);
        }
    });
//#TODO Crawl Animation
    $(document).keydown(function(e){
        if(e.keyCode==40 && getBottomLoc()==0){
        }
    });
});

/* Set Timmer Setting*/
function setTimer(timeGameStart){
    var id = setInterval(function(){

        var ratio = 10; // ratio(sec) = 1 hour
        var passedTime_ms = new Date - timeGameStart;
        var timeSets = getTimeSets(passedTime_ms/ratio);
        $("#days").text(timeSets.days);
        $("#hours").text(timeSets.hours);
        throwItem(timeSets.days,itemObj);
    },100);
}

/* Parse time to day hour */
function getTimeSets(time){
    var hours = Math.floor(time%24);
    var days = Math.floor(time/24);
    return {
        'days': days,
        'hours': hours
    };
}

/*Functions for location*/
function getBottomLoc(){
    return $("#container").outerHeight(true)-($("#runner").position().top+$("#runner").outerHeight(true));
}
function calTopLoc(bottomLoc){
    return $("#container").outerHeight(true)-(bottomLoc+$("#runner").outerHeight(true));
}



/*#TODO Crawl Animation
function crawlAnimation(){
    $("#runner").animate({
        height:"40px",
    width : $("#runner").outerWidth(true)+"px"
    },speed).animate({
        height:"80px"
    },speed);
}
*/
