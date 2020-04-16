<template>
    <div class="" style="background:white">
        <div class="top-nav" id="top-nav">
            <div>
                <ul>
                    <li><a href="">+9090294234</a> </li>
                    <li><a href="">admin@mail.com</a> </li>
                </ul>
            </div>
            <div>
                 <ul>
                    <li><a href=""><i class="facebook icon"></i></a></li>
                    <li><a href=""><i class="twitter icon"></i></a></li>
                    <li><a href=""><i class="youtube icon"></i></a></li>
                    <li><a href=""><i class="instagram icon"></i></a></li>
                </ul>
            </div>                
        </div>
         <div class="bottom-nav-con"  :class="{added:scrollPosition > 30}">

        <div class="container">
            <div class="bottom-nav ">
            <div>
               <img src="/images/logo.png" width="70px" alt="Exclusive Logo">
            </div>
            <div>
                 <ul>
                    <li><router-link to="/service">Service</router-link></li>
                    <li><router-link to="/contact">Contact</router-link></li>
                    <li><router-link to="/about">About</router-link></li>
                    <li><router-link to="/blog">Blog</router-link></li>
                </ul>
            </div>
        </div>
        </div>
         </div>
       

    </div> 


</template>
<script>
   export default {

       data(){ 
            return {
                scrollPosition:null
             } 
        },
        methods:{
            handleScroll:function(e){
               this.scrollPosition=window.scrollY
            }
        },
        created:function(){
            window.addEventListener('scroll',this.handleScroll)
        },
        destroyed:function(){
            window.adEventListener('scroll',this.handleScroll)
        },
        mounted() {

        },
    }
</script>
<style src="cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css"></style>
<style lang="scss" scoped>
    .top-nav{
        display: grid;
        grid-template-columns: repeat(2,3fr);
        background: #222;
        height: 30px;

    }
    .top-nav ul li{
        list-style:none;
        display:inline-block;
        line-height: 30px;

        & a{
            color:rgba(224,224, 224,0.7);
            padding: 0px 10px;
        }
    }
    .top-nav div:nth-child(2){
        text-align: right;
        margin-right: 20px

    }
    .bottom-nav-con{
        box-shadow:1px 2px 3px #9cabc3; 
        transition: 0.3s ease;
          &.added{
            position: fixed;
            top:0px;
            z-index:9;
            left:0px;
            width: 100%;
            animation:fadeInDown 0.3s;
            background: rgba(254,254, 254,0.7)

        }
    }
    .bottom-nav{
        display: grid;
        grid-template-columns:30% 70%;
        // background: white;
        height: 70px;
     
    }
    .bottom-nav ul li{
        display: inline-block;
        list-style: none;
        line-height:70px;
        
        & a{
            position: relative;
            color: #888;
            font-weight: 700;
            text-transform: uppercase;
            padding: 10px 12px;
            &:hover{
                text-decoration: none;
                color:  rgb(16, 32, 102);
            }
            &::after{
                content: "";
                transition: 0.3s ease;
                position: absolute;
                height: 4px;
                width: 0px;
                background: #91959b;
                bottom: 0px;
                // box-shadow: 8px 0px #222, 39px 0px #222;
                text-align: center;
                left: 16px;
            }

            
        }
    }
     .bottom-nav ul li a:hover:after{
        box-shadow: 8px 0px rgb(147, 140, 212), 39px 0px rgb(16, 32, 102);
        width:6px;
     }

    .bottom-nav div:nth-child(1){
        line-height: 70px;
    }

    @media (min-width: 320px) and (max-width: 640px) {
          .bottom-nav div:nth-child(2){
                display: none
         }  
          .top-nav{
                display: none
         }  
    }


    @media screen and (max-width: 320px) {

    }

</style>