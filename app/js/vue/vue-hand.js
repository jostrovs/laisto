let Hand = require("../hand.js");
let Card = require("../card.js");
let bus = require("js/bus.js");


Vue.component('vue-hand', {
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
    props: ['hand_in'],
    data: function(){
        return {
            show_cards: this.hand_in.cards.length > 0,
            cards: this.hand_in.cards_in,
            name: this.hand_in.name,
            in_turn: this.hand_in.turn,
        }
    },
    mounted: function(){
        //$("#hello").css("border", "1px solid red");
    },
});