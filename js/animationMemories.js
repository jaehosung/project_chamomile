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

/*Display Memories function (loop)*/
function displayMemories(timeObj){
    for(var i = 0; i< Memories.length; i++){
        throwItem(timeObj.days,Memories[i],i);
        if(collisionCheck($("#runner"),Memories[i].item.src)&&Memories[i].item.get==false){
            Memories[i].item.get=true;
            itemSound();
            clearInterval(Memories[i].idItem);
            displayItem(Memories[i].item);
            //#TODO Showing Item bottom of the screen
        }
    }
}
/* Main Memories Function */
function memoriesAnimation(){
    //Initial Setting 
    for(var i = 0; i< Memories.length; i++){
        imgQuery = $("#"+Memories[i].imgName);
        imgQuery.css("position","absolute");
        imgQuery.css("bottom",0); //#TODO How about display items randomly
        imgQuery.css("right",-1*imgQuery.outerWidth(true));
        Memories[i].item = new Item(imgQuery,Memories[i].date);
    }

}
/* Check whether Images are loads or not */
function memoriesSet(){
    var imagesCount = Memories.length;
    var imagesLoaded = 0;
    var img = new Array();
    for(var i = 0; i< Memories.length; i++){
        img[i]= document.createElement("img");
        img[i].src ="imgs/memories/"+Memories[i].imgName+".png";
        img[i].id = Memories[i].imgName;
        $("#container").append(img[i]);
    }
    for(var i = 0; i<Memories.length; i++){
        img[i].onload = function(){
            imagesLoaded ++;
            if(imagesLoaded == imagesCount){
               memoriesAnimation();
               memoriesOnload = true;
            }
        }
    }
}
/* Moving Main Function*/
function itemMove(element,delta,duration,nth){
    var containerWidth = $("#container").outerWidth(true);
    var itemWidth = element.outerWidth(true);
    var to = itemWidth + containerWidth;
    itemAnimate({
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

//Item Animation

//This variable is for To stop this animation

function itemAnimate(opts) {
    var start = new Date;
    Memories[opts.nth].idItem = setInterval(function(){
        var timePassed = new Date - start;
        var progress = timePassed/opts.duration;

        if(progress >1) progress = 1;

        var delta = opts.delta(progress);
        opts.operation(delta);

        if(progress >=1){
            clearInterval(Memories[opts.nth].idItem);
        }
    },opts.delay);
}


function throwItem(time,memories,nth){
    if(time == memories.item.date && memories.item.show == false){
        memories.item.show = true;
        itemMove(memories.item.src,linearDelta,mapSpeed*($("#container").outerWidth(true)+memories.item.width)/$(".road").outerWidth(true),nth);
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
