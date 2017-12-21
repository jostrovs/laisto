let Board = require("../board.js");
let Card = require("../card.js");
let bus = require("js/bus.js");


Vue.component('vue-board', {
    template:` 
    <v-container>
        <h3>Board</h3>
        Subsettejä: {{subsets}}
        <vue-card v-for="card in cards" :card="card" :key="card.id"></vue-card>
        Vapaat: <span v-for="i in vapaat">{{i}} </span>
    </v-container>                                                                                         
    `,
    props: ['board_in'],
    data: function(){
        return {
            cards: this.board_in.cards,
            subsets: this.board_in.l_subsets.length,
            vapaat: this.board_in.vapaat,
        }
    },
    mounted: function(){
        //$("#hello").css("border", "1px solid red");
    },
});