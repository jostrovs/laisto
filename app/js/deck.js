let CONST = require("./const.js");
let Card = require("./card.js");
let CardCollection = require("./cardcollection.js");


class Deck extends CardCollection{
    constructor(opts){
        super();

        for(let suite of CONST.SUITE_ARR){
            for(let value of CONST.VALUE_ARR){
                this.cards.push(new Card({ suite, value }));
            }
        }

        this.shuffle();
    }

    shuffle(){
        let cards = [];
        for(let card of this.cards) cards.push(new Card({card: card}));
        this.cards = [];

        while(cards.length > 0){
            let ind = Math.floor(cards.length*Math.random());
            this.cards.push(cards[ind]);
            cards.splice(ind, 1);
        }
    }
}

module.exports = Deck;