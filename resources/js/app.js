/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
require('./fontawesome');

window.Vue = require('vue');

import VueIziToast from 'vue-izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import Authorization from './authorization/authorize';

Vue.use(VueIziToast);
Vue.use(Authorization);




Vue.component('user-info', require('./components/UserInfo.vue').default);
Vue.component('answer', require('./components/Answer.vue').default);
Vue.component('favorite', require('./components/Favorite.vue').default);
Vue.component('accept', require('./components/Accept.vue').default);


const app = new Vue({
    el: '#app',
});
