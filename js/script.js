// when document is ready these function operates
$(document).ready(function(){
    //console.log($("#container").outerHeight(true)+""+$("#runner").position().top+""+$("#runner").outerHeight(true));
    //console.log(getBottomLoc());
    //console.log(new Date().getTime());

    $(document).keydown(function(e){
        if(e.keyCode==32 && getBottomLoc()==0){
            jumpSound();
            move($("#runner"),delta,500);
        }
    });
    $(document).keydown(function(e){
        if(e.keyCode==40 && getBottomLoc()==0){
            crawlAnimation();
        }
    });
});

/*Animation Functions*/

//function for location
function getBottomLoc(){
    return $("#container").outerHeight(true)-($("#runner").position().top+$("#runner").outerHeight(true));
}
function calTopLoc(bottomLoc){
    return $("#container").outerHeight(true)-(bottomLoc+$("#runner").outerHeight(true));
}

function jumpSound(){
    var jumpAudio = new Audio('src/jumpAudio.wav');
    jumpAudio.play();
}

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

function move(element,delta,duration){
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

function delta(p){ return -4*Math.pow(p,2)+4*p;};

function crawlAnimation(){
    $("#runner").animate({
        height:"40px",
    width : $("#runner").outerWidth(true)+"px"
    },speed).animate({
        height:"80px"
    },speed);
}
