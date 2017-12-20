let CONST = require("./const.js");
let Card = require("./card.js");
let CardCollection = require("./cardcollection.js");

let cloneArr = function(arra){
    let ret = [];

    for(let i of arra) ret.push(i);
    return ret;
};

let sum = function(arra){
    let s = 0;
    for(let c of arra) s += c.value_board;
    return s;
};

class Board extends CardCollection{
    constructor(opts){
        super();
        this.l_subsets = [];
        this.vapaat = [];
    }

    setChanged() { super.setChanged()}

    laske(){
        this.l_subsets = [];
        this.l_board = [];

        for(let card of this.cards) this.l_add(card);

        // Lasketaan summat
        this.vapaat = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
        for(let subset of this.l_subsets){
            let summa = sum(subset);
            this.vapaat = this.vapaat.filter(item=>{return item != summa;});
        }
        
        this.setChanged();
        return this.l_subsets;
    }

    l_add(card){
        this.l_board.push(card);

        let newSubsets = [[card]];

        for(let subset of this.l_subsets){
            let clone = cloneArr(subset);
    
            let summa = sum(clone);
            if(summa + card.value_board > 16) continue;
    
            clone.push(card);
            newSubsets.push(clone);
        }
    
        for(let ns of newSubsets){
            this.l_subsets.push(ns);
        }
    }
}

module.exports = Board;