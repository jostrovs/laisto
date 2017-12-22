let CONST = require("../const.js");
let Card = require("../card.js");

Vue.component('vue-card', {
    template:` 
    <v-chip label>
        <img v-if="spades" src="pics/spades.png" style="height: 16px;">
        <img v-if="hearts" src="pics/hearts.png" style="height: 14px;">
        <img v-if="diamonds" src="pics/diamonds.png" style="height: 16px;">
        <img v-if="clubs" src="pics/clubs.png" style="height: 16px;">
        <span style="font-size: 20px">{{value}}</span>&nbsp;
        <span v-if="p_val < 0"></span>
        <span v-else-if="p_val < 5" style="font-size: 10px; background: lightgreen; padding: 1px 3px; border-radius: 4px;">{{p_val}}</span>
        <span v-else-if="p_val < 100" style="font-size: 10px; background: yellow; padding: 1px 3px; border-radius: 4px;">{{p_val}}</span>
        <span v-else style="font-size: 10px; background: red; padding: 1px 3px; border-radius: 4px; color: white;">{{p_val}}</span>
    </v-chip>                                                                                         
    `,
    props: ['card', 'play_value'],
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

        let p_val = this.play_value;
        if(typeof(p_val) === 'undefined') p_val = -1;
        return {
            p_val,
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