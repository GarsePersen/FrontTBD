import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '../components/index/index.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/index', alias: '/', component: Index},
]

export default new VueRouter({routes})

