let CONST = require("./const.js");


class Card{
    constructor(opts){
        this.suite = CONST.SPADES;
        this.value = CONST.A;

        if(typeof(opts) !== 'undefined'){
            if(typeof(opts.suite) !== 'undefined') this.suite = opts.suite;
            if(typeof(opts.value) !== 'undefined') this.value = opts.value;

            if(typeof(opts.card) !== 'undefined'){
                this.suite = opts.card.suite;
                this.value = opts.card.value;
            }
        }

        this.points = 0;
        if(this.value === CONST.A) this.points = 1;
        else if(this.value === 2 && this.suite === CONST.SPADES) this.points = 1;
        else if(this.value === CONST.T && this.suite === CONST.DIAMONDS) this.points = 2;
        this.special = true;
    }

    str(){
        return CONST.STR_SUITE[this.suite] + CONST.indVALUES[this.value];
    }

    isSpades() {return this.suite == CONST.SPADES; }
    isHearts() {return this.suite == CONST.HEARTS; }
    isClubs() {return this.suite == CONST.CLUBS; }
    isDiamonds() {return this.suite == CONST.DIAMONDS; }
}

module.exports = Card;