<template>
    <div>
         <nav-view></nav-view>
         <!-- <router-link :to="{name:'about'}" class="btn btn-default btn-flat">About</router-link> -->
              <transition name="fade" enter-active-class="animated fadeIn"  leave-active-class="animated fadeOut" mode="out-in">


                  <router-view></router-view>
              </transition>
              <vue-progress-bar></vue-progress-bar>

         <h3>Footer</h3>
    </div>
</template>

<script>
 import NavView from "./partials/NavView.vue";
    export default {
        components:{
            NavView
        },
        data(){
            return {
                users:[]
            }
        },
        mounted() {
            this.$Progress.finish()
            console.log('Component mounted dd.');
        },
        created(){
            this.$Progress.start();
            this.$router.beforeEach((to, from, next) => {
                this.$Progress.start();
                console.log('started',this.$Progress);
                
                next()
            })

            this.$router.afterEach( route => {
                //these hooks do not get a next function and cannot affect the navigation}
                this.$Progress.finish()
            })
            
        },
        
    }
</script>
