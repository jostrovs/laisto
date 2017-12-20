let CONST = require("js/const.js");
let Card = require("js/card.js");
let Deck = require("js/deck.js");
let Board = require("js/board.js");
let Hand = require("js/hand.js");
let bus = require("js/bus.js");


var app = new Vue({
    el: '#app',
    data: {
        deck: new Deck(),
        board: new Board(),
        hands: [],
    },

    computed: {
        board_cards(){
            return this.board.cards;
        },

        deck_cards(){
            return this.deck.cards;
        },
    },

    created() {
        this.hands.push(new Hand({name: "Jori", turn: true}));
        this.hands.push(new Hand({name: "Aino"}));
        this.hands.push(new Hand({name: "Raija"}));
        this.hands.push(new Hand({name: "Ismo"}));
    },
    methods: {
        jaa_kortti(){
            let card = this.deck.pop();
            this.board.push(card);
        },

        seuraava(){
            let i=0;
            for(;i<this.hands.length;++i) if(this.hands[i].turn) break;

            this.hands[i].turn = false;
            this.hands[i].setChanged();

            if(++i >= this.hands.length) i=0;

            this.hands[i].turn = true;
            this.hands[i].setChanged();
        }
    }
});