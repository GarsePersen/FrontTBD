import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '../components/index/Index.vue';
import graficoEval from  '../components/graficoBarra2/BarGraph.vue';
import graficoSimple from  '../components/graficoBarra/BarGraph.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/index', alias: '/', component: Index},
    { path: '#/graph', alias: '/graph', component: graficoEval},
    { path: '#/graficoSimple', alias: '/gbarra', component: graficoSimple},
]

export default new VueRouter({routes})
