/* Key operation */
$(document).ready(function(){
    $(document).keydown(function(e){
        if(e.keyCode==32 && getBottomLoc()==0){
            jumpSound();
            jumpRunner($("#runner"),jumpDelta,500);
        }
    });
    $(document).keydown(function(e){
        if(e.keyCode==40 && getBottomLoc()==0){
        }
    });
});

/*Functions for location*/
function getBottomLoc(){
    return $("#container").outerHeight(true)-($("#runner").position().top+$("#runner").outerHeight(true));
}
function calTopLoc(bottomLoc){
    return $("#container").outerHeight(true)-(bottomLoc+$("#runner").outerHeight(true));
}

/*
function crawlAnimation(){
    $("#runner").animate({
        height:"40px",
    width : $("#runner").outerWidth(true)+"px"
    },speed).animate({
        height:"80px"
    },speed);
}
*/
