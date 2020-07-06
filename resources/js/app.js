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
window.axios = require('axios');

// Vue-router
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import routes from './routes.js';

const router = new VueRouter({
    base: 'project-2/public',
    routes, // short for `routes: routes`
    mode: 'history'
})

// Vuex
import Vuex from 'vuex';
Vue.use(Vuex);

import content from './store/Content.js';
import giaovien from './store/GiaoVien.js';
import general from './store/General.js';

const store = new Vuex.Store({
    modules: {
        giaovien: giaovien,
        general: general,
        content: content
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

Vue.component('navbar-component', require('./layout/NavbarComponent.vue').default);
Vue.component('sidebar-component', require('./layout/SidebarComponent.vue').default);
Vue.component('footer-component', require('./layout/FooterComponent.vue').default);
Vue.component('login-component', require('./components/LoginComponent.vue').default);


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
