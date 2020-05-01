<template>
    <div>

        <!-- nav area -->
        
         <nav-view></nav-view>

        <!-- Body  -->
         <!-- <router-link :to="{name:'about'}" class="btn btn-default btn-flat">About</router-link> -->
              <transition name="fade" enter-active-class="animated fadeIn"  leave-active-class="animated fadeOut" mode="out-in">
                  <router-view></router-view>
              </transition>


              <vue-progress-bar></vue-progress-bar>
        <!-- Footer -->

              <div class="scroll-top" ref="scroll-top" @click="scrollTop">
                  <i class="icon angle double up"></i>
              </div>
        <footer-view></footer-view>
    </div>


</template>

<script>
 import NavView from "./partials/NavView.vue";
 import FooterView from "./partials/FooterView.vue";
    export default {
        components:{
            NavView,
            FooterView
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
        methods: {
            scrollTop:function(e){
                var elem=window.document.body.offsetHeight;
                
                
               let anim =setInterval(() => {
                console.log(elem);
                   window.scrollTo(0,elem)
                   if (elem==0) {
                      clearInterval(anim)
                   }
                   elem--
                },0.3);
                
            }
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

<style lang="scss" scoped>
   .scroll-top{
       height:50px;
       width:50px;
       right:50px;
       bottom: 50px;
       position: fixed;
       background:white;
       border-radius: 50%;
       box-shadow:2px 3px 4px #888;
       line-height: 50px;
       text-align: center;
       font-size: 16px;
       cursor:pointer;
   }
</style>
