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
        let spades = clubs = hearts = diamonds = false;
        let value = 0;
        if(typeof(this.card) !== 'undefined'){
            if(typeof(this.card.isSpades) === 'undefined') debugger;           
            spades = this.card.isSpades();
            hearts = this.card.isHearts();
            clubs = this.card.isClubs();
            diamonds = this.card.isDiamonds();
            value = CONST.indVALUES[this.card.value];
        }

        return {
            spades,
            clubs,
            hearts,
            diamonds,
            value,
        }
    },
    mounted: function(){
        //$("#hello").css("border", "1px solid red");
    }
});