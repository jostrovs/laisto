let CONST = require("./const.js");
let Card = require("./card.js");
let CardCollection = require("./cardcollection.js");

let id=1;

class Hand extends CardCollection{
    constructor(opts){
        super();
        this.name = opts.name;
        
    }

    add(card){ super.add([card]);}
    remove(card){ super.remove(card);}

    setChanged(){ super.setChanged();}

    clone(){
        let ret = new Hand({
            name: this.name,
        });
        ret.cards = this.cards;
        return ret;
    }


}

module.exports = Hand;