let CONST = require("./const.js");
let Card = require("./card.js");


class CardCollection{
    constructor(){
        this.cards = [];
    }

    len(){
        return this.cards.length;
    }

    add(cards){
        for(let card of cards){
            this.cards.push(card);
        }
    }

    remove(card){
        
        for(let i=0;i<this.cards.length;++i){
            if(card.is(this.cards[i])){
                this.cards.splice(i,1);
                return;
            } 
        }
    }

    pop(){
        if(this.len() < 1) return null;

        let ret = this.cards[0];
        this.remove(ret);
        return ret;
    }

    push(card){
        this.add([card]);
    }
}

module.exports = CardCollection;