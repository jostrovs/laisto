let Hand = require("../hand.js");
let Card = require("../card.js");
let bus = require("js/bus.js");


Vue.component('vue-hand', {
    template:` 
    <v-container>
        <h3>Hand {{name}}</h3>
        <vue-card v-if="show_cards" v-for="card in cards" :card="card" :key="card.id"></vue-card>
    </v-container>                                                                                         
    `,
    props: ['cards_in', 'nimi', 'id'],
    data: function(){
        return {
            show_cards: this.cards_in.length > 0,
            cards: this.cards_in,
            name: this.nimi,
        }
    },
    mounted: function(){
        //$("#hello").css("border", "1px solid red");
    },
});