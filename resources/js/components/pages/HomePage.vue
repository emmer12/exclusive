<template>
    <div>
        <!-- <slider-view></slider-view> -->
      <!-- <div style="position:relative;width:400px;margin:0px auto">
        <slick ref="slick" :options="slickOptions" style="width:100%">
          <img src="/images/slider/big_img1.jpg" alt="slider" title="#slider-direction-1" width="100%" />
          <img src="/images/slider/big_img2.jpg" alt="slider" title="#slider-direction-2" width="100%" />
          <img src="/images/slider/big_img3.jpg" alt="slider" title="#slider-direction-3" width="100%" />
        </slick>

      </div> -->

    
      
      
      <!-- Button trigger modal -->
      <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#modelId">
        Launch
      </button>
      
      <!-- Modal -->
      <div class="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
          <div class="modal-dialog" role="document">
              <div class="modal-content">
                  <div class="modal-header">
                      <h5 class="modal-title">Modal title</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                          </button>
                  </div>
                  <div class="modal-body">
                      Body
                  </div>
                  <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary">Save</button>
                  </div>
              </div>
          </div>
      </div>

        
    </div> 

</template>
<style src="slick-carousel/slick/slick.css"></style>

<script>
   import SliderView from "../sliders/SliderView.vue";
   import Slick from 'vue-slick';
   export default {
       components: {
           SliderView,
          Slick
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
           $(".slider").slick({
                    // normal options...
                    infinite: false,

                    // the magic
                    responsive: [{

                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            infinite: true
                        }

                        }, {

                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            dots: true
                        }

                        }, {

                        breakpoint: 300,
                        settings: "unslick" // destroys slick

                        }]
                    });
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