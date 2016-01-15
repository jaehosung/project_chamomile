/* Key operation */
$(document).ready(function(){
    // Timer Setting 
    var timeGameStart = new Date;
    setTimer(timeGameStart);

    // Start Map animation
    mapMove($("#roadContainer"),mapMoveDelta,1000);

    //Keyoperation
    $(document).keydown(function(e){
        if(e.keyCode==32 && getBottomLoc()==0){
            jumpSound();
            jumpRunner($("#runner"),jumpDelta,500);
        }
    });
    $(document).keydown(function(e){//#TODO Crawl Animation
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
