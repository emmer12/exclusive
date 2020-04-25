<template>
    <div class="post-container">
             <div class="action-con">
                <div class="right">
                    <router-link :to="{name:'dashboard'}">
                       <button class="circular ui icon button small">
                          <i class="icon arrow left"></i>
                        </button>
                    </router-link>
                   
                   <button class="circular ui icon button small green" @click="processPost">
                        <i class="icon save"></i> Save
                    </button>

                </div>
            </div>


            <div class="card">
                <div class="card-header">
                    <ul class="nav nav-tabs card-header-tabs">
                        <li class="nav-item">
                        <a class="nav-link active"  data-toggle="tab" href="#one">Active tab</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" data-toggle="tab"  href="#two">Tab</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" data-toggle="tab"  href="#three">Disabled tab</a>
                        </li>
                    </ul>
                </div>

                <div class="card-body">
                    <form class="ui form" @submit.prevent="processPost" enctype="multipart/formd-data" :class="{loading:loading}">
                        <div v-if="serverErrors">
                            <div class="ui negative message" v-for="(error, index) in serverErrors" :key="index">
                            {{error[0]}}
                          </div>
                          </div>
                            <div class="tab-content">

                                <!-- first data -->

                                <div id="one" class="tab-pane fadein active">
                                    <validation-provider rules="required" v-slot="{ errors }" >
                                        <div class="field" :class="{error:errors[0],success:errors[0]}">
                                            <label>Title</label>
                                            <input type="text" name="title" placeholder="Post title" v-model="newPost.title">
                                            <span class="error" style="color:#9f3a38">{{errors[0]}}</span>
                                        </div>
                                    </validation-provider>   
                                    <validation-provider rules="required" v-slot="{ errors }" >
                                        <div class="field" :class="{error:errors[0],success:errors[0]}">
                                            <label>Description</label>
                                            <ckeditor height="200px" :editor="editor" v-model="newPost.description" :config="editorConfig"></ckeditor>
                                            <span class="error" style="color:#9f3a38">{{errors[0]}}</span>
                                        </div>
                                    </validation-provider>
                                </div>

                                <!-- first data end -->



                                <!-- Second data  -->

                                <div id="two" class="tab-pane">
                                    <div class="field custum-upload-manager" v-show="!src">
                                        <label for="display-pic"><div class="ui btn"> <img src="/images/upload.jpg" width="150px" height="150px" alt=""> </div></label>
                                        <input type="file" name="display" id="display-pic" style="display:none" v-on:change="processForm" >
                                    </div>
                                    <div class="showImg" v-show="src">
                                        <img :src="src" width="100px" height="100px">
                                        <div class="details">
                                           {{filename}}
                                        </div>
                                        <div class="ui button inverted red remove" @click="RemoveFile" >Remove</div>
                                    </div>
                                </div>


                                <!-- Second data end -->



                                <!-- Third data -->

                                <div id="three" class="tab-pane">
                                    <h4 class="card-title">Additional</h4>
                                </div>

                                <!-- Third data end -->

                            </div>
                        </form>
                    
                </div>
            </div>
      </div>
</template>

<script src="/vendor/laravel-filemanager/js/lfm.js"></script>
<script>
import { ValidationProvider } from 'vee-validate';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic" 
export default {
        components:{
            ValidationProvider
        },
        data() {
            return {
                editor:ClassicEditor,
                editorConfig:{},
                newPost:{
                    title:"",
                    description:"",  
                    fileUp:""
                },  
                loading:false,
                serverErrors:null,
                src:"",
                filename:""
            }
        },
        methods: {
           fileOpen:function () { 
               window.open(`/laravel-filemanager"?token=${localStorage.getItem('token')}`,'width=900,height=600');
               var self=this;
               window.opener.SetUrl=function(items){
                   self.image=items[0].url
               }
               return false;
            },
           processPost:function(){
               this.$Progress.start();
               this.loading=true;
               this.$store.dispatch('postData',this.newPost).then((response)=>{
                   this.loading=false;
                   this.$Progress.finish();
                   this.newPost.title="" 
                   this.newPost.description=""
                   this.newPost.fileUp="";
                   this.$toast.success({
                        title:"Post Created",
                        message:"post successfully created "
                    });
                    this.$router.push({name:'dashboard'})
               }).catch(err=>{
                   this.loading=false;
                   this.$Progress.fail()
                    this.serverErrors=Object.values(err.response.data.errors);
                    this.serverError=err.response.data.error;
                    this.$toast.error({
                        title:"Server Error",
                        message:"please make sure that each field are filled correctly"
                    });
               })
               
           },
           processForm:function(e){
               let target_e=e.target.files[0];
               this.newPost.fileUp=target_e; 
                var current=this;
                var reader = new FileReader();
                reader.onload = function(e) {
                    current.src=e.target.result;
                    current.filename=target_e.name;
                };
                reader.readAsDataURL(target_e);
                          
           },
           RemoveFile:function(){
               this.src="";
               this.filename=""
               this.newPost.fileUp=""
           },
           backList:function(){
               this.$emit('backList');
           }
            
        },
}
</script>

<style lang="scss">
    .showImg{
       width: 100%;
        height: 120px;
        background: #f9f9f9;
        position: relative;
        padding: 10px;
        box-sizing: border-box;

        & img{
            float:left;
            border: 1px solid #ddd;
            border-radius: 3px;
        }
        & .details{
            color: #c3c6d8;
            font-weight: 700;
            width: 70%;
            background: transparent;
            float: left;
            line-height: 26px;
            margin-top: 74px;
            margin-left: 10px
        }

        & .remove{
            position: absolute;
            right: 5%;
            top:3%;
        }
    }
</style>