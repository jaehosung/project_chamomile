//function for Road animation
//Main funtion
function mapMove(element,delta,duration){
    var to = $("#road1").outerWidth(true);
    roadAnimate({
        element : element,
        delay : 1,
        duration : duration || 1000,
        delta :delta,
        operation : function(delta){
            element.css("left",-1*delta*to+ "px");
        }
    });
};

//Road Animation
function roadAnimate(opts) {
    var start = new Date;
    var id = setInterval(function(){
        var timePassed = new Date - start;
        var progress = timePassed/opts.duration;

        if(progress >1) progress = 1;

        var delta = opts.delta(progress);
        opts.operation(delta);

        if(progress >=1){
            clearInterval(id);
            mapMove(opts.element,mapMoveDelta,opts.duration);
            $("#road1").attr("src",$("#road2").attr("src"));
            $("#road2").attr("src",$("#road3").attr("src"));
            var src = "imgs/roadtest"+Math.floor(Math.random()*3+1)+".png";
            $("#road3").attr("src",src);
        }
    },opts.delay);
}



// Delta for MapMove
function mapMoveDelta(p){ return p;};

