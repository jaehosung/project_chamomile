/* Item Object Properties */
console.log($("#item1").outerHeight(true));

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
