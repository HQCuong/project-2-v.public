/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

window.Vue = require('vue');

// Vue-multiselect
 import Multiselect from 'vue-multiselect'
 Vue.component('multiselect', Multiselect);

// Axios
import axios from 'axios';

// Vue-router
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import routes from './routes.js';

const router = new VueRouter({
    routes, // short for `routes: routes`
    mode: 'history'
})

// Vuex
import Vuex from 'vuex';
Vue.use(Vuex);

import giaovien from './store/GiaoVien.js';
import general from './store/General.js';

const store = new Vuex.Store({
    state: {
        lich_gv: [],
        lich_lab: []
    },
    modules: {
        giaovien: giaovien,
        general: general
    }
});


/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('navbar-component', require('./components/layout/NavbarComponent.vue').default);
Vue.component('sidebar-component', require('./components/layout/SidebarComponent.vue').default);
Vue.component('footer-component', require('./components/layout/FooterComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router,
    store
});
