<template>
    <div >
        <slider-view></slider-view>
    </div> 

</template>
<script>
   import SliderView from "../sliders/SliderView.vue";
   
   export default {
       components: {
          SliderView,
        },
        data(){ 
            return {
                
            } 
        }, 
        methods:{

        },
        mounted() {

        },
        computed:{
           LoggedUser(){
            if(window.loggedUser){
                return true;
            }else{
                return false;
            }
           }
        }
    }
</script>


<style lang="scss">

</style>