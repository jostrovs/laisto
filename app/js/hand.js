let CONST = require("./const.js");
let Card = require("./card.js");
let CardCollection = require("./cardcollection.js");

let id=1;

class Hand extends CardCollection{
    constructor(opts){
        super();
        this.name = opts.name;
        this.id = id++;
    }
}

module.exports = Hand;