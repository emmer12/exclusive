<template>
    <div >
        <div class="container">
            this is the home pageh
           <div class="ui labeled button" tabindex="0">
            <div class="ui red button">
                <i class="heart icon"></i> Like
            </div>
            <a class="ui basic red left pointing label">
                1,048
            </a>
            </div>
            <div class="ui labeled button" tabindex="0">
            <div class="ui basic blue button">
                <i class="fork icon"></i> Forks
            </div>
            <a class="ui basic left pointing blue label">
                1,048
            </a>
            </div>
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