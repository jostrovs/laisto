let CONST = require("./const.js");

let i=0;
class Card{
    constructor(opts){
        this.id=i++;
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

        this.value_board = this.value;
        this.value_hand = this.value;
        
        this.special = false;

        this.points = 0;
        if(this.value === CONST.A) {
            this.points = 1;
            this.value_board = 1;
            this.value_hand = 14;
            this.special = true;
        } else if(this.value === 2 && this.suite === CONST.SPADES) {
            this.points = 1;
            this.value_hand = 15;
            this.special = true;
        } else if(this.value === CONST.T && this.suite === CONST.DIAMONDS){
            this.points = 2;
            this.value_hand = 10;
            this.special = true;
        }
    }

    str(){
        return CONST.STR_SUITE[this.suite] + CONST.indVALUES[this.value];
    }

    isSpades() {return this.suite == CONST.SPADES; }
    isHearts() {return this.suite == CONST.HEARTS; }
    isClubs() {return this.suite == CONST.CLUBS; }
    isDiamonds() {return this.suite == CONST.DIAMONDS; }

    is(card) { return this.suite == card.suite && this.value == card.value;}
}

module.exports = Card;