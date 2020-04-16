<template>
    <div>
         <nav-view></nav-view>


         <router-link :to="{name:'about'}" class="btn btn-default btn-flat">About</router-link>

              <router-view></router-view>

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
            console.log('Component mounted dd.');
        
        },
        created(){
            
        },
        
    }
</script>
