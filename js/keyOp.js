function keyOperation(){
    //Keyoperation
    $(document).keydown(function(e){
        if(e.keyCode==32 && getBottomLoc()==0){
            jumpSound();
            jumpRunner($("#runner"),jumpDelta,500);
            console.log(idItems);
            clearInterval(idItems);
        }
    });
    //#TODO Crawl Animation
    $(document).keydown(function(e){
        if(e.keyCode==40 && getBottomLoc()==0){
        }
    });
}

/*#TODO Crawl Animation
function crawlAnimation(){
    $("#runner").animate({
        height:"40px",
    width : $("#runner").outerWidth(true)+"px"
    },speed).animate({
        height:"80px"
    },speed);
}
*/
