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

/* Item Object Properties */
function Item(src,get,date){
    this.src = src;
    this.width = src.outerWidth(true);
    this.loc = src.outerWidth(true)*-1;
    this.get = false
    this.show = false;
    this.date = date;
}

function throwItem(time,_item){
    if(time == _item.date && _item.show == false){
        _item.show = true;
        console.log(_item);
        itemMove(_item.src,linearDelta,mapSpeed*($("#container").outerWidth(true)+_item.width)/$(".road").outerWidth(true));
    }
}

/* Collison Check*/
function collisionCheck(element1, element2){
    var a = new GameObj(element1);
    var b = new GameObj(element2);
    return !( ((a.y + a.height) < (b.y)) || (a.y > (b.y + b.height)) || ((a.x + a.width) < b.x) || (a.x > (b.x + b.width)) );
}

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
