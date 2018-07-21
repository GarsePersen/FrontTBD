import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '../components/index/Index.vue';
import gustosArtistas from  '../components/gGustosArtistas/gGustos.vue';
import graficoSimple from  '../components/graficoBarra/BarGraph.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/index', alias: '/', component: Index},
    { path: '#/graph', alias: '/graph', component: gustosArtistas},
]

export default new VueRouter({routes})
