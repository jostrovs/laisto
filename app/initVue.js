let CONST = require("js/const.js");
let Card = require("js/card.js");
let Deck = require("js/deck.js");
let Board = require("js/board.js");
let bus = require("js/bus.js");

var app = new Vue({
    el: '#app',
    data: {
        deck: new Deck(),
        board: new Board(),
    },

    computed: {
        board_cards(){
            return this.board.cards;
        },

        deck_cards(){
            return this.deck.cards;
        }
    },

    created() {
        
    },
    methods: {
        jaa_kortti(){
            let card = this.deck.pop();
            this.board.push(card);
        }
    }
});