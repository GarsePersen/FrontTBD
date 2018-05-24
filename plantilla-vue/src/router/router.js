import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '../components/index/Index.vue';
import Graph from  '../components/graph/graph.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/index', alias: '/', component: Index},
    { path: '#/graph', alias: '/graph', component: Graph},
]

export default new VueRouter({routes})
