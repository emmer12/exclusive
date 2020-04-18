<template>
    <div >
        <div class="container">
            this is the about page
        </div>
    </div> 

</template>
<script>
   
   
   export default {
       components: {
          
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