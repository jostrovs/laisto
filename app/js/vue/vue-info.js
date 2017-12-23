Vue.component('vue-info', {
    template:` 
    <v-container>
        <h3>Infoo</h3>
        <h3 v-if="kasikortit">Käsikortit</h3>
        <h3 v-else>Ei käsi</h3>
        <h3>Viimeisena ottanut: {{vimppa}}</h3>
    </v-container>                                                                                         
    `,
    props: ['kasikortit', 'viimeinen'],
    data: function(){

        return {
            kasi: this.kasikortit,
            vimppa: this.viimeinen,
        }
    },
});