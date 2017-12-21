let Player = require("js/player.js");
let Hand = require("js/hand.js");
let Card = require("js/card.js");
let bus = require("js/bus.js");


Vue.component('vue-player', {
    template:` 
    <v-container>
        <h3>
            Hand
            <span v-if="in_turn" style="padding: 2px 5px 2px 5px; border-radius: 4px; background: red; color: white;">{{name}}</span>
            <span v-else>{{name}}</span>
        </h3>
        <vue-card v-if="show_cards" v-for="card in cards" :card="card" :key="card.id"></vue-card>
    </v-container>                                                                                         
    `,
    props: ['player_in'],
    data: function(){
        return {
            show_cards: this.player_in.hand.cards.length > 0,
            cards: this.player_in.hand.cards,
            name: this.player_in.hand.name,
            in_turn: this.player_in.turn,
        }
    },
    mounted: function(){
        //$("#hello").css("border", "1px solid red");
    },
});