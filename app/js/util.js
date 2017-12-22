let local_key=0;

let key = function(){
    return local_key++;
}

let SORT = (i1,i2)=>i2.value_hand-i1.value_hand;

module.exports = {
    key,
    SORT,
}