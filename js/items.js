//Item array
//item, date, message
//#TODO Direction about interval}
var Memories = new Array(
        { imgName: "mountain", date: 5, message: "Go To mountain"},
        { imgName: "starwars", date: 10, message: "Watch Starwars"},
        { imgName: "river", date:15, message: "Han river date"}
        );


function memoriesAnimation(){
//memories initial setting
    for(var i = 0; i< Memories.length; i++){
        imgQuery = $("#"+Memories[i].imgName);
        console.log(imgQuery);
        imgQuery.css("position","absolute");
        imgQuery.css("bottom",0);
        imgQuery.css("right",-1*imgQuery.outerWidth(true));
        console.log("date : " +Memories[i].date);
        Memories[i].item = new Item(imgQuery,Memories[i].date);
    }

}

function memoriesSet(){
    var imagesCount = Memories.length;
    var imagesLoaded = 0;
    var img = new Array();
    for(var i = 0; i< Memories.length; i++){
        img[i]= document.createElement("img");
        img[i].src ="imgs/memories/"+Memories[i].imgName+".png";
        img[i].id = Memories[i].imgName;
        img[i].onload = function(){console.log("loadcomplete");}
        $("#container").append(img[i]);
    }
    for(var i = 0; i<Memories.length; i++){
        img[i].onload = function(){
            imagesLoaded ++;
            if(imagesLoaded == imagesCount){
                console.log("image Upload");
                memoriesAnimation();
            }
        }
    }
}
