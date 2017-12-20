let CONST = require("./const.js");
let Card = require("./card.js");
let CardCollection = require("./cardcollection.js");

let id=1;

class Hand extends CardCollection{
    constructor(opts){
        super();
        this.name = opts.name;
        
        this.turn = false;
        if(opts.turn) this.turn = true;
    }

    setChanged(){ super.setChanged();}

    clone(){
        let ret = new Hand({
            name: this.name,
            turn: this.turn,
        });
        ret.cards = this.cards;
        return ret;
    }
}

module.exports = Hand;