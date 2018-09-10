import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '../components/index/Index.vue';
import peores10A from  '../components/gOdioArtistas/gOdioA.vue';
import peores10G from  '../components/gOdioGenero/gOdioG.vue';
import mejores10A from  '../components/gGustosArtistas/gGustosA.vue';
import mejores10G from  '../components/gGustosGenero/gGustosG.vue';
import crecimiento from  '../components/grafCrecimiento/grafCrecimiento.vue';
import masComentados from  '../components/gArtistasComentados/gMasComentados.vue';
import gArtistas from '../components/gArtistas/gArtistas.vue';
import grafo from '../components/grafo/grafo.vue';
import agregarArtista from '../components/AgregarArtista/addartist.vue';
import mapa from '../components/mapa/mapa.vue';
import prueba from '../components/prueba/prueba.vue';
import nuevoGrafico from '../components/nuevoGrafico/nuevoGrafico.vue';
Vue.use(VueRouter);

const routes = [
    { path: '/index', alias: '/', component: Index},
    { path: '#/graph/gmejoresart', alias: '/graph/gbestart', component: mejores10A},
    { path: '#/graph/gpeoresart', alias: '/graph/gworstart', component: peores10A},
    { path: '#/graph/gmejoresgen', alias: '/graph/gbestgen', component: mejores10G},
    { path: '#/graph/gpeoresgen', alias: '/graph/gworstgen', component: peores10G},
    { path: '#/graph/gcomentados', alias: '/graph/gcomentados', component: masComentados},
    { path: '#/graph/gcrecimientoartista', alias: '/graph/gcrecimiento', component: crecimiento},
    { path: '#/graph/grafo', alias: '/graph/grafo', component: grafo},
    { path: '#/graph/gartistas/:tipo/:name', component: gArtistas},
    { path: '#/agregarartista', alias: '/addartist', component: agregarArtista},
    //{ path: '#/mapa', alias: '/map', component: mapa}
    { path: '#/mapa', alias: '/map', component: prueba},
    { path: '#/nuevo', alias: '/nuevo', component: nuevoGrafico}
];
export default new VueRouter({routes})
