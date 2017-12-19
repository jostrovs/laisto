require("js/vue/vue-card.js");
require("js/vue/vue-board.js");
require("js/vue/vue-deck.js");
require("js/vue/vue-hand.js");

require("initVue.js");


let subsets = [];
let board = [];


let add = function(no){
    board.push(no);
    
    let newSubsets = [[no]];

    for(let subset of subsets){
        let clone = cloneArr(subset);

        let summa = sum(clone);
        if(summa + no > 16) continue;

        clone.push(no);
        newSubsets.push(clone);
    }

    for(let ns of newSubsets){
        subsets.push(ns);
    }
}


let cloneArr = function(arra){
    let ret = [];

    for(let i of arra) ret.push(i);
    return ret;
}

let sum = function(arra){
    let s = 0;
    for(let c of arra) s += c;
    return s;
}

add(3);
//add(13);
//add(13);
add(3);
add(3);
add(3);
add(13);
add(1);
add(11);
add(9);
add(8);

for(let ss of subsets){
    let s = "";
    for(let item of ss){
        s += item + ", ";
    }
    //console.log(s);
}
//console.log("Yhteensä " + subsets.length + " subsettiä:")

