var obsArray = new Array(
        // Set Obstacle Types
        /*
           { date: 3, type: 0, loc : 0, show:false },
           { date: 5, type: 0, loc : 0, show:false },
           { date: 9, type: 0, loc : 0, show:false }
           */
        );

/* Item Object Properties */
function Obstacle(date,type){
    //#TODO The location of obstacle's y value can be changed
    this.date = date;
    this.type = type;
    this.show = false;

}

function displayObstacles(timeObj){
    for(var i = 0; i< obsArray.length; i++){
        throwObstacle(timeObj.days,obsArray[i],i);
        if(collisionCheck($("#runner"),$("#obs"+i))){

            //#TODO Change the sound when collide with obstacle
            //itemSound();
            gameStop();
            //clearInterval(obsArray[i].idItem);
            //#TODO Showing Item bottom of the screen
        }
    }
}
/* Main Memories Function */
function obstacleAnimation(){
    //Initial Setting 
    for(var i = 0; i< obsArray.length; i++){
    }
}

/* Check whether Images are loads or not */
function obstacleSet(){
    var imagesCount = obsArray.length;
    var imagesLoaded = 0;
    var img = new Array();
    for(var i = 0; i< obsArray.length; i++){
        img[i]= document.createElement("img");
        img[i].src ="imgs/obs"+obsArray[i].type+".png";
        img[i].id = "obs"+i;
        $("#container").append(img[i]);
        imgQuery = $("#obs"+i);
        imgQuery.css("position","absolute");
        imgQuery.css("right",-100);
        imgQuery.css("width",20);
        imgQuery.css("height",30);
        imgQuery.css("bottom",0); //#TODO  Using Switch I will gonna add the properties of obstacle
    }
    for(var i = 0; i<obsArray.length; i++){
        img[i].onload = function(){
            imagesLoaded ++;
            if(imagesLoaded == imagesCount){
                obstacleAnimation();
            }
        }
    }
}
/* Obstacle Movine Animation */

function obsAnimate(opts) {
    var start = new Date;
    obsArray[opts.nth].idItem = setInterval(function(){
        var timePassed = new Date - start;
        var progress = timePassed/opts.duration;

        if(progress >1) progress = 1;

        var delta = opts.delta(progress);
        opts.operation(delta);

        if(progress >=1){
            clearInterval(obsArray[opts.nth].idItem);
        }
    },opts.delay);
}


function throwObstacle(time,obs,nth){
    if(time == obs.date && obs.show == false){
        var obsQuery = $("#obs"+nth);
        obs.show = true;
        //#TODO
        obsMove(obsQuery,linearDelta,mapSpeed*($("#container").outerWidth(true)+obsQuery.outerWidth(true))/$(".road").outerWidth(true),nth);
    }
}

/* Moving Main Function*/
function obsMove(element,delta,duration,nth){
    var containerWidth = $("#container").outerWidth(true);
    var itemWidth = element.outerWidth(true);
    var to = itemWidth + containerWidth;
    obsAnimate({
        element : element,
        nth : nth,
        delay : 10,
        duration : duration,
        delta :delta,
        operation : function(delta){
            element.css("right",-1*itemWidth+to*delta+ "px");
        }
    });
};

