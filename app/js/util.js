let local_key=0;

let key = function(){
    return local_key++;
}

module.exports = {
    key,
}