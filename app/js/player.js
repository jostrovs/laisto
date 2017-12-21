let Hand = require("./hand.js");
let CardCollection = require("./cardcollection.js");
let UTIL = require("./util.js");

class Player {
    constructor(opts){
        let name = "Player";
        if(typeof(opts) !== 'undefined' && typeof(opts.name) !== 'undefined') name = opts.name;
        this.name = name;

        this.key = UTIL.key();

        this.hand = new Hand({name: name});

        this.collection = new CardCollection();

        this.turn = false;
        if(opts.turn) this.turn = true;

            
    }
    setChanged(){ this.key = UTIL.key();}

    addHandCard(card){
        this.hand.add(card);
    }
    removeHandCard(card){
        this.hand.remove(card);
    }
    addCollectionCard(card){
        this.collection.add([card]);
    }
}

module.exports = Player;