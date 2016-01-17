//function for Item Animation
//Main funtion
function itemMove(element,delta,duration){
    var containerWidth = $("#container").outerWidth(true);
    var itemWidth = $("#item1").outerWidth(true);
    var to = itemWidth + containerWidth;
    itemAnimate({
        element : element,
        delay : 1,
        duration : duration || 1000,
        delta :delta,
        operation : function(delta){
            element.css("right",-1*itemWidth+to*delta+ "px");
        }
    });
};

//Item Animation
function itemAnimate(opts) {
    var start = new Date;
    var id = setInterval(function(){
        var timePassed = new Date - start;
        var progress = timePassed/opts.duration;

        if(progress >1) progress = 1;

        var delta = opts.delta(progress);
        opts.operation(delta);

        if(progress >=1){
            clearInterval(id);
        }
    },opts.delay);
}
