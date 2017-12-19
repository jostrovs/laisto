let Board = require("../board.js");
let Card = require("../card.js");
let bus = require("js/bus.js");


Vue.component('vue-board', {
    template:` 
    <v-container>
        <h3>Board</h3>
        <vue-card v-for="card in cards" :card="card"></vue-card>
    </v-container>                                                                                         
    `,
    props: ['cards_in'],
    data: function(){
        return {
            cards: this.cards_in,
        }
    },
    mounted: function(){
        //$("#hello").css("border", "1px solid red");
    },
});