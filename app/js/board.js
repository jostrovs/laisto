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
        this.l_take_subsets = [];
    }

    setChanged() { super.setChanged()}
    add(card){ 
        super.add([card]);
        this.setChanged();
    }
    remove(card){ super.remove(card);}

    getSubset(value){
        if(this.l_subsets.length < 1) return [];
        if(this.vapaat.indexOf(value)>=0) return [];

        let minval = 10000;
        let min_subset = [];

        let value_subsets = this.l_subsets.filter(ss=>{return sum(ss) == value;});

        for(let subset of value_subsets){
            let val = this.eval(subset);
            if(val < minval){
                minval = val;
                min_subset = subset;
            }
        }
        return min_subset;
    }

    takeSubset(value){
        return this.l_take_subsets[value];
    }

    eval(subset){
        let val = 0;
        for(let card of subset){
            val += card.points * 100;
            if(card.isSpades()) val += 20;
            val += 5;
        }

        if(subset.length == this.cards.length) val += 100; // Mökki

        return val;
    }

    laske(){
        this.l_subsets = [];
        this.l_board = [];

        for(let card of this.cards) this.l_add(card);

        this.l_take_subsets = [[]];

        // Lasketaan summat
        this.vapaat = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
        for(let subset of this.l_subsets){
            let summa = sum(subset);
            this.vapaat = this.vapaat.filter(item=>{return item != summa;});
        }
        for(let i=2;i<17;++i){
            this.l_take_subsets.push(this.getSubset(i));
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