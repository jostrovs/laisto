let CONST = require("js/const.js");

let local_key=0;

let key = function(){
    return local_key++;
}

let SORT = (i1,i2)=>i2.value_hand-i1.value_hand;

let toStr = function(cardArr){
    let ret = "";
    for(let card of cardArr) ret += CONST.indVALUES[card.value_hand] + " ";
    return ret;
}

module.exports = {
    key,
    SORT,
    toStr,
}