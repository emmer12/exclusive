<template>
        <!-- <slider-view></slider-view> -->
  <div>

        <!-- Banner Section -->

        <banner-vid></banner-vid>

        <!-- Services Section -->

            
        <!-- What We Do Section -->
            
        <wwdo></wwdo>

        <!-- Portfolio Section -->

        <portfolio></portfolio>


        <br>

        <!-- Testimony Section -->

        <testimony></testimony>
        <!-- <br> -->
        <!-- News Letter -->
        <news-letter></news-letter>


   </div>


    
</template>
<style src="slick-carousel/slick/slick.css"></style>

<script>
   import SliderView from "../sliders/SliderView.vue";
   import Slick from 'vue-slick';
   import Portfolio from "../partials/Portfoleo";
   import BannerAni from "../partials/BannerAni"
   import BannerVid from "../partials/BannerVid"
   import Wwdo from "../partials/Wwdo"
   import Testimony from "../partials/Testimony"
   import NewsLetter from "../partials/NewsLetter"

   export default {
       components: {
           SliderView,
           Slick,
           BannerAni,
           BannerVid,
           Portfolio,
           Wwdo,
           Testimony,
           NewsLetter
           },
        data(){ 
            return {
                slickOptions: {
                  slidesToShow: 2,
                  fade:true,
                  dots: true,
                // Any other options that can be got from plugin documentation
            },
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
// <style src="slick-carousel/slick/slick.css"></style>
<style src="slick-carousel/slick/slick-theme.css"></style>

<style lang="scss" >
@import url('https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap');
  $color: #8783ce;
  $secondary:rgb(86, 79, 204);
  .heading{
      & h1{
          color:#555;
            font-size: 30px;
            padding: 10px;
            letter-spacing: 4px;
            font-family: 'Fugaz One', cursive;
            position: relative;
            margin: 10px;
      }


      & ::after{
          content:'';
          position: absolute;
          height:3px;
          width:100px;
          background: #555;
          bottom: 0px;
          left:0px;

      } 
  }

  @media screen and (max-width:640px){
      .heading h1{
      font-size:20px;
      }

  }
  


</style>