var speed =300;
$(document).ready(function(){
    
    console.log($("#container").outerHeight(true)+""+$("#runner").position().top+""+$("#runner").outerHeight(true));
    console.log(getBottomLoc());
    console.log(new Date().getTime());
    $(document).keydown(function(e){
        if(e.keyCode==32 && getBottomLoc()==0){
            jumpAnimation();
        }
    });
    $(document).keydown(function(e){
        if(e.keyCode==40 && getBottomLoc()==0){
            crawlAnimation();

        }
    });
});

function getBottomLoc(){
    return $("#container").outerHeight(true)-($("#runner").position().top+$("#runner").outerHeight(true));
}
function jumpAnimation(){
    $("#runner").animate({
        bottom:"100px"
    },speed).animate({
        bottom:"0px"
    },speed);
}
function crawlAnimation(){
    $("#runner").animate({
        height:"40px",
        width : $("#runner").outerWidth(true)+"px"
    },speed).animate({
        height:"80px"
    },speed);
}
