let CONST = require("js/const.js");
let Card = require("js/card.js");
let Deck = require("js/deck.js");
let Board = require("js/board.js");
let Player = require("js/player.js");
let bus = require("js/bus.js");


var app = new Vue({
    el: '#app',
    data: {
        deck: new Deck(),
        board: new Board(),
        players: [],
    },

    computed: {
        deck_cards(){
            return this.deck.cards;
        },
    },

    created() {
        this.players.push(new Player({name: "Jori", turn: true}));
        this.players.push(new Player({name: "Aino"}));
        this.players.push(new Player({name: "Raija"}));
        this.players.push(new Player({name: "Ismo"}));
    },
    methods: {
        jaa(){
            this.board.push(this.deck.pop());
            this.board.push(this.deck.pop());
            this.board.push(this.deck.pop());
            this.board.push(this.deck.pop());
            this.board.laske();

            for(let i=0;i<this.players.length;++i){
                this.players[i].addHandCard(this.deck.pop());
                this.players[i].addHandCard(this.deck.pop());
                this.players[i].addHandCard(this.deck.pop());
                this.players[i].addHandCard(this.deck.pop());
                this.players[i].setChanged();
            }
        },
        
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