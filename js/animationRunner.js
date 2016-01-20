//function for animation
var idRunner
function animate(opts) {
    var start = new Date;
    idRunner = setInterval(function(){
        var timePassed = new Date - start;
        var progress = timePassed/opts.duration;

        if(progress >1) progress = 1;

        var delta = opts.delta(progress);
        opts.operation(delta);

        if(progress ==1){
            clearInterval(idRunner);
        }
    },opts.delay);
}

/* Jump Animatiton and Sound */

//Main function
function jumpRunner(element,delta,duration){
    var to = 150;
    animate({
        delay : 1,
        duration : duration || 1000,
        delta :delta,
        operation : function(delta){
            element.css("top",calTopLoc(to*delta)+ "px");
        }
    });
};

// Delta for Jump
function jumpDelta(p){ return -4*Math.pow(p,2)+4*p;};

// Sound for Jump
function jumpSound(){
    var jumpAudio = new Audio('src/jumpAudio.wav');
    jumpAudio.volume = 0.1;
    jumpAudio.play();
}

/*Functions for Runner's location*/
function getBottomLoc(){
    return $("#container").outerHeight(true)-($("#runner").position().top+$("#runner").outerHeight(true));
}
function calTopLoc(bottomLoc){
    return $("#container").outerHeight(true)-(bottomLoc+$("#runner").outerHeight(true));
}


/* Crawl Animaton and Sound */

//Main function
function crawlRunner(element){
    element.attr("src").replace//#TODO
}
