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
               <router-link to="/">
                 <img src="/images/logo.png" width="70px" alt="Exclusive Logo">
               </router-link>
            </div>
            <div>
                 <ul>
                    <li><router-link to="/service">Service</router-link></li>
                    <li><router-link to="/contact">Contact</router-link></li>
                    <li><router-link to="/about">About</router-link></li>
                    <li><router-link to="/gallery">Gallery</router-link></li>
                    <li><router-link to="/blog">Blog</router-link></li>
                    <li v-if="loggedIn" @click="dropmenuChange"><img  class="logged-avata" src="/images/user.png" width="50px" height="50px" alt="img"> <i class="angle down icon"></i></li>
                </ul>                                                                                                                            
            </div>

           
        </div>                   

         <div class="logged-avata-mobile" v-if="loggedIn" @click="dropmenuChange">
             <img class="logged-avata" src="/images/user.png" width="50px" height="50px" alt="img">
             <i class="angle down icon"></i>
         </div>
             <div class="dropdown" :class="{added:dropmenu}">
                <ul>
                    <li><router-link to="/dashboard"><i class="settings icon"></i> Dashboard</router-link></li>
                    <li><router-link to="/logout"><i class="sign out alternate icon"></i> Logout</router-link></li>
                </ul>
              </div>
         <div class="bar" :class="{added:sidebar}" @click="openSidebar">
                <span></span>
                <span></span>
         </div>
        <div class="sidebar" :class="{added:sidebar}">
            <div  class="s-header">

            </div>
             <ul class="ul">
                <li><router-link to="/service">Service</router-link></li>
                <li><router-link to="/contact">Contact</router-link></li>
                <li><router-link to="/about">About</router-link></li>
                <li><router-link to="/blog">Blog</router-link></li>
            </ul>
            <div class="s-footer">
                <ul>
                    <li><a href=""><i class="facebook icon"></i></a></li>
                    <li><a href=""><i class="twitter icon"></i></a></li>
                    <li><a href=""><i class="youtube icon"></i></a></li>
                    <li><a href=""><i class="instagram icon"></i></a></li>
                </ul>
            </div>
        </div>
        </div>
        
        </div>
         
<!--          
         <div class="spacer">

         </div> -->

    </div> 


</template>
<script>
   export default {

       data(){ 
            return {
                scrollPosition:null,
                sidebar:false,
                dropmenu:false
             } 
        },
        methods:{
            handleScroll:function(e){
               this.scrollPosition=window.scrollY
            },
            openSidebar:function () { 
                this.sidebar=!this.sidebar
             },
             dropmenuChange:function(){
                 console.log("clo=ickeddn");
                 
                 this.dropmenu=!this.dropmenu
             }
        },
        computed:{
           loggedIn(){
             return this.$store.getters.loggedIn;
         },
        },
        created:function(){
            window.addEventListener('scroll',this.handleScroll)
        },
        destroyed:function(){
            
        },
        watch:{
            $route(to,from){
                this.sidebar=false;
                this.dropmenu=false;
            }
        },
        mounted() {

        },
    }
</script>
<style src="cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css"></style>
<style lang="scss">
  li{
          list-style: none;
      }
      a{
          text-decoration: none;
      }
      a:hover{
          text-decoration: none;
      }
      i.facebook{

          color: #3b5998
      }
      i.twitter{
          color: #08a0e9
      }   
      i.youtube{
          color:#c4302b
      }
      i.instagram{
          color: #D02A7B
      }
</style>
<style lang="scss" scoped>
      
     .spacer{
         height: 1000px;
         background: #ccc
     } 
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
        // box-shadow:1px 2px 3px #9cabc3; 
        box-shadow: 0px 0px 25px -10px;
        transition: 0.3s ease;
          &.added{
            position: fixed;
            top:0px;
            z-index:999;
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
            // text-transform: uppercase;
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
    .sidebar{
        position: fixed;
        left: 0px;
        top: 70px;
        background: #1f2037;
        width: 0vw;
        overflow: hidden;
        transition: 0.3s ease-in-out;
        height: 100%;
        height: 100%;
        z-index: 999;
        & .ul{
            margin: 0px;
            padding: 0px;
        }
        & .ul li{
            list-style: none;
            
            & a{
                display: block;
                padding: 10px;
                background: #333b54;
                margin: 1px;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                font-weight: 700;
                transition: 0.3s ease;
                color: #ECEDEC;
                &:hover{
                    background: hsl(240, 71%, 8%);
                    color: rgb(174, 188, 226);
                    text-decoration: none;
                }
            }
        }

        &.added{
            width: 80vw;
            }
    }
    .s-footer{
        height: 50px;
        width: 100%;
        bottom: 0px;
        position: relative;
        background: #fff;
        line-height: 50px;

        & ul{
            display: flex;
            justify-content: space-around;
            padding: 0px;
            & li a{
                font-size: 25px;

            }
        }
    }
    .s-header{
        height: 120px;
        width: 100%;
        background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url("/images/slider/sidebar2.jpg");
        background-repeat: no-repeat;
        background-size: cover;
    }
  
    .bar{
            position: absolute;
            right: 20px;
            top: 21px;
            display: none;
            
          &.added{
             & span:nth-child(1){
            width: 30px;
            transform: rotate(140deg) translateX(7px);
            top: 4px;
           }
            & span:nth-child(2){
            transform: rotate(45deg) translateY(-5px);
        }
        }
        & span{
            height: 8px;
            width: 30px;
            background: #3d3df6;
            display: block;
            margin-top: 4px;
            border-radius: 10px;
            transition: 0.25s ease;

        }

        & span:nth-child(1){
           width: 20px;
            position: relative;
            right: -10px;
            transition: 0.5s ease;
        }
    }
    .logged-avata{
        border-radius: 50%;
        border:2px solid #fff;
        box-shadow: 2px 3px 3px #ddd;
        cursor: pointer;
    }
    .logged-avata-mobile{
        display: none
    }


    .dropdown{
        // padding: 10px;
        background: #fff;
        width: 200px;
        position: absolute;
        right: 10px;
        display: none;
        border-radius: 5px;
        box-shadow: 2px 2px 3px #ddd;
        z-index: 999;
        & ul{
            margin: 0px;
            padding: 0px;
           & li a{
               padding: 10px 10px;
                border-bottom: 1px solid #ccc;
                display: block;
            }
            display: block;
        }
        &.added{
            display: block;
            animation: fadeInRight 0.3s;
        }
    }
    
    

    @media (max-width: 640px) {
          .bottom-nav div:nth-child(2){
                display: none
         }  
          .top-nav{
                display: none
         }  
         .bar{
             display:block;
             animation: fadeInRight 0.3s;
         }
         .logged-avata-mobile{
            display: block;
            position: absolute;
            float: right;
            top: 9px;
            right: 60px; 
    }        
    }


    @media screen and (max-width: 320px) {
    }

</style>