/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import VueRouter from "vue-router";
import CxltToastr from "cxlt-vue2-toastr";
import { extend } from 'vee-validate';
import { required,email} from 'vee-validate/dist/rules';
import { store } from './store/store'

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

// Add the required rule
extend('required', {
  ...required,
  message: 'This field is required'
});
extend('email', {
    ...email,
    message: 'This field must be an email'
  });

const toastConfig={
    position:"bottom right",
    showDuration:2000,
    timeOut:5000,
    progressBar:true,
}

Vue.use(CxltToastr,toastConfig)
Vue.use(VueRouter);

import {routes} from './route/index';

let router = new VueRouter({
    mode: 'history',
    routes
    });
     
router.beforeEach((to,from,next)=>{
    if(to.matched.some(record=>record.meta.requiresAuth)){
        if(!store.getters.loggedIn){
            next({
                name:'skills',
            })
        }
        else{
            next();
        }
    }
    else if(to.matched.some(record=>record.meta.requiresVisitor)){
        if(store.getters.loggedIn){
            next({
                name:'profile',
            })
        }
        else{
            next();
        }
    }else{
        next()
    }
})

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));



// Vue.component(
//     'dashboard', 
//     require('./components/auth/Dashboard.vue').default);



// Vue.component(
//     'articles', 
//     require('./components/dashboard.vue').default);

Vue.component(
        'main-app', 
         require('./components/App.vue').default)
        ;



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
