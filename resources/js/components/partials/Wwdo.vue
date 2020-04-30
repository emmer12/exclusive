<template>
   <div class="container wwd-con">
            <div class="heading">
              <h1 class="wow bounceInLeft">What we Do</h1>
            </div>
            <div class="row">





              
                <div class="col-md-4">
                    <div class="classic-card">
                       <div>
                           <img v-lazy="'/images/works/w2.jpg'" alt="" width="100%" height="240px">
                       </div>
                       <div class="details">   
                           <h4>Wedding Photography</h4>
                        </div>
                    </div>
                </div>

                 <div class="col-md-4">
                    <div class="classic-card">
                       <div>
                           <img v-lazy="'/images/works/w1.jpg'" alt="" width="100%" height="240px">
                       </div>
                       <div class="details">   
                           <h4>Studio Photography</h4>
                        </div>
                    </div>
                </div>  

                 <div class="col-md-4">
                    <div class="classic-card">
                       <div>
                           <img v-lazy="'/images/works/w10.jpg'" alt="" width="100%" height="240px">
                       </div>
                       <div class="details">   
                           <h4>Wedding Photography</h4>
                        </div>
                    </div>
                </div>  



              


            </div>
        </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
 $color: #8783ce;
 $secondary:rgb(86, 79, 204);
 
 .wwd-con{
    background: url(/images/svg/liveShape-bg.svg) no-repeat;
    background-position: right;
}
.classic-card{
    height: 260px;
    overflow: hidden;
    padding:10px;
    background: white;
    border-radius: 5px;
    border:1px solid #ccc;
    cursor: pointer;
    transition:0.3s;
    & img{
            transition: 0.3s ease;
        }
    &:hover .details{
        color:#fff;
        bottom: 50%;
        background: rgba(0,0,0,0.5);
        transform: scale(1)
        
    }

    &:hover img{
        transform: scale(1.2);
        opacity:0.7;
        bottom:0px;
    }

    & .details{
        position: relative;
        font-family: cursive;
        transition:all 0.3s 0.7s;
        padding: 10px;
        text-align: center;
        transform: scale(0.5);
        bottom: -5px;
        border-left:4px solid $color; 
        border-right:4px solid $color 

    }
}

  @media screen and(max-width:640px) {
  .classic-card{
    height: 260px;
    & .details{
        bottom: 50px;
        color:#fff;
        // bottom: 50%;
        background: rgba(0,0,0,0.5);

        transform: scale(1)

    }
 }
}
    
</style>