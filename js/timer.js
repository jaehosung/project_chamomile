/* Set Timmer Setting*/
var idLoop;
function setTimer(timeGameStart){
    idLoop = setInterval(function(){

        var ratio = 10; // ratio(sec) = 1 hour
        var passedTime_ms = new Date - timeGameStart;
        var timeSets = getTimeSets(passedTime_ms/ratio);
        $("#days").text(timeSets.days);
        $("#hours").text(timeSets.hours);

        loop(timeSets);
    },1);
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
