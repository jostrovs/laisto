let CONST = require("../const.js");
let Card = require("../card.js");

Vue.component('vue-card', {
    template:` 
    <v-chip label>
        <img v-if="spades" src="pics/spades.png" style="height: 16px;">
        <img v-if="hearts" src="pics/hearts.png" style="height: 14px;">
        <img v-if="diamonds" src="pics/diamonds.png" style="height: 16px;">
        <img v-if="clubs" src="pics/clubs.png" style="height: 16px;">
        <span style="font-size: 20px">{{value}}</span>
    </v-chip>                                                                                         
    `,
    props: ['card'],
    data: function(){
        return {
            spades: this.card.isSpades(),
            clubs: this.card.isClubs(),
            hearts: this.card.isHearts(),
            diamonds: this.card.isDiamonds(),
            value: CONST.indVALUES[this.card.value],
        }
    },
    mounted: function(){
        //$("#hello").css("border", "1px solid red");
    }
});