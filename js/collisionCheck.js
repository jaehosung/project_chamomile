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

