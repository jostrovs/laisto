let Player = require("js/player.js");
let Hand = require("js/hand.js");
let Card = require("js/card.js");
let bus = require("js/bus.js");
let CONST = require("js/const.js");

Vue.component('vue-player', {
    template:` 
    <v-container>
        <h3>
            Hand
            <span v-if="in_turn" style="padding: 2px 5px 2px 5px; border-radius: 4px; background: red; color: white;">{{name}}</span>
            <span v-else>{{name}}</span>
        </h3>
        <template v-if="show_cards" v-for="card in cards">
            <span @click="valkkaa(card)">
                <vue-card :card="card" :key="card.id"></vue-card>
            </span>
        </template>
        Valittu: {{valittu.value}}
        <v-btn v-if="in_turn && valittu" @click="pelaa">Pelaa</v-btn>
    </v-container>                                                                                         
    `,
    props: ['player_in'],
    data: function(){
        return {
            show_cards: this.player_in.hand.cards.length > 0,
            cards: this.player_in.hand.cards,
            name: this.player_in.hand.name,
            in_turn: this.player_in.turn,
            valittu: "",
        }
    },
    methods: {
        pelaa(){
            bus.emit(CONST.EVENT_PLAY_CARD, this.valittu);
        },
        valkkaa(card){
            this.valittu = card;
        }
    }
});