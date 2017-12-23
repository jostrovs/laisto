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
        kasikortit: false,
        viimeinen: "",
        info: "",
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

        bus.on(CONST.EVENT_PLAY_CARD, this.playCard);
    },
    methods: {
        jaa(){
            this.board.add(this.deck.pop());
            this.board.add(this.deck.pop());
            this.board.add(this.deck.pop());
            this.board.add(this.deck.pop());
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
            this.board.add(card);
        },

        anna_loput_viimeiselle(){
            if(this.deck.cards.length < 1){
                // Oli käsikortit, eli viimeisenä ottaneelle annetaan loput.
                if(this.board.cards.length > 0){
                    this.info = this.viimeinen + " sai loput.";
                    let i=0;
                    for(;i<this.players.length;++i) if(this.players[i].name == this.viimeinen) break;
                    while(this.board.cards.length > 0){
                        let card = this.board.cards[0];
                        this.players[i].addCollectionCard(card);
                        this.board.remove(card);
                    }
                    this.players[i].setChanged();
                }   
            } 
        },

        jaetaanko_lisaa(){

            // Täytyykö jakaa lisää?
            let lisaa = true;
            for(let player of this.players) if(player.hand.cards.length > 0) lisaa = false; 
            if(lisaa){
                this.anna_loput_viimeiselle();
  
                if(this.deck.cards.length < 1) return;

                for(let i=0;i<this.players.length;++i){
                    this.players[i].addHandCard(this.deck.pop());
                    this.players[i].addHandCard(this.deck.pop());
                    this.players[i].addHandCard(this.deck.pop());
                    this.players[i].addHandCard(this.deck.pop());
                    this.players[i].setChanged();
                }
            }

            if(this.deck.cards.length < 1) this.kasikortit = true;
        },

        seuraava(){
            this.jaetaanko_lisaa();

            let i=0;
            for(;i<this.players.length;++i) if(this.players[i].turn) break;

            this.players[i].turn = false;
            this.players[i].setChanged();

            if(++i >= this.players.length) i=0;

            this.players[i].turn = true;
            this.players[i].setChanged();
        },

        playCard(card){
            let i=0;
            for(;i<this.players.length;++i) if(this.players[i].turn) break;

            // Otetaan pöydältä
            let subset = this.board.takeSubset(card.value_hand);
            
            if(subset.length > 0) this.viimeinen = this.players[i].name;

            for(let card of subset){
                this.board.remove(card);
                this.players[i].addCollectionCard(card);
            }

            this.players[i].removeHandCard(card);

            if(subset.length < 1){
                // Laitto
                this.board.add(card);
            } else {
                // Otto
                this.players[i].addCollectionCard(card);
            }
            this.board.laske();

            this.seuraava();
        },

        tick(){
            this.board.laske();
            console.table(this.board.l_take_subsets);

        },

        test(){
            this.board.add(new Card({suite: 1, value: 2}));
            this.board.add(new Card({suite: 1, value: 2}));

            this.board.laske();
        },

        pelaa1(){
            let i=0;
            for(;i<this.players.length;++i) if(this.players[i].turn) break;
            let card = this.players[i].hand.cards[0];
            this.playCard(card);

        },
    }
});