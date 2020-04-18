<template>
    <div>
         <nav-view></nav-view>
<<<<<<< HEAD
         <!-- <router-link :to="{name:'about'}" class="btn btn-default btn-flat">About</router-link> -->


=======


         <router-link :to="{name:'about'}" class="btn btn-default btn-flat">About</router-link>

>>>>>>> 3b20313a7b1fcebf162ed0cd2ee25a6a7dbe75e8
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
