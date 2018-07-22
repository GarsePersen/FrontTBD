import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '../components/index/Index.vue';
import peores10A from  '../components/gOdioArtistas/gOdioA.vue';
import peores10G from  '../components/gOdioGenero/gOdioG.vue';
import mejores10A from  '../components/gGustosArtistas/gGustosA.vue';
import mejores10G from  '../components/gGustosGenero/gGustosG.vue';
import crecimiento from  '../components/grafCrecimiento/grafCrecimiento.vue';
import masComentados from  '../components/gArtistasComentados/gMasComentados.vue';

import graficoSimple from  '../components/graficoBarra/BarGraph.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/index', alias: '/', component: Index},
    { path: '#/gmejoresart', alias: '/gbestart', component: mejores10A},
    { path: '#/gpeoresart', alias: '/gworstart', component: peores10A},
    { path: '#/gmejoresgen', alias: '/gbestgen', component: mejores10G},
    { path: '#/gpeoresgen', alias: '/gworstgen', component: peores10G},
    { path: '#/gmascomentados', alias: '/gcomentados', component: masComentados},
    { path: '#/gcrecimientoartista', alias: '/gcrecimiento', component: crecimiento}
]

export default new VueRouter({routes})
