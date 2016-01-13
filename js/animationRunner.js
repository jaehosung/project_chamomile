//function for animation
function animate(opts) {
    var start = new Date;
    var id = setInterval(function(){
        var timePassed = new Date - start;
        var progress = timePassed/opts.duration;

        if(progress >1) progress = 1;

        var delta = opts.delta(progress);
        opts.operation(delta);

        if(progress ==1){
            clearInterval(id)
        }
    },opts.delay);
}

/* Jump Animatiton and Sound */

//Main function
function jumpRunner(element,delta,duration){
    var to = 100;
    animate({
        delay : 10,
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
    jumpAudio.play();
}

/* Crawl Animaton and Sound */

//Main function
function crawlRunner(element){
    element.attr("src").replace//#TODO
}
