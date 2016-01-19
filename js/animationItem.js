//function for Item Animation
/* Item Object Properties */
function Item(src,date){
    this.src = src;
    this.width = src.outerWidth(true);
    this.loc = src.outerWidth(true)*-1;
    this.get = false
    this.show = false;
    this.date = date;
}
//Main funtion
function itemMove(element,delta,duration){
    var containerWidth = $("#container").outerWidth(true);
    var itemWidth = element.outerWidth(true);
    var to = itemWidth + containerWidth;
    return itemAnimate({
        element : element,
        delay : 1,
        duration : duration,
        delta :delta,
        operation : function(delta){
            element.css("right",-1*itemWidth+to*delta+ "px");
        }
    });
};

//Item Animation

//This variable is for To stop this animation

function itemAnimate(opts) {
    var start = new Date;
    var idItem = setInterval(function(){
        var timePassed = new Date - start;
        var progress = timePassed/opts.duration;

        if(progress >1) progress = 1;

        var delta = opts.delta(progress);
        opts.operation(delta);

        if(progress >=1){
            clearInterval(idItem);
        }
    },opts.delay);
    console.log(idItem);
    return idItem;
}


function throwItem(time,_item){
    if(time == _item.date && _item.show == false){
        _item.show = true;
        return itemMove(_item.src,linearDelta,mapSpeed*($("#container").outerWidth(true)+_item.width)/$(".road").outerWidth(true));
    }
}

/* Collison Check*/
function collisionCheck(element1, element2){
    var a = new GameObj(element1);
    var b = new GameObj(element2);
    return !( ((a.y + a.height) < (b.y)) || (a.y > (b.y + b.height)) || ((a.x + a.width) < b.x) || (a.x > (b.x + b.width)) );
}

/* Object properties for Collision Check*/
function GameObj(element){
    this.x = element.offset().left;
    this.y = element.offset().top;
    this.width = element.outerWidth(true);
    this.height = element.outerHeight(true);
}

// Sound for Jump
function itemSound(){
    var itemAudio = new Audio('src/itemAudio.wav');
    itemAudio.play();
}
