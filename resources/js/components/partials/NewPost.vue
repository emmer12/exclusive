<template>
    <div class="post-container">
        <div class="back" @click="backList">
            <i  class="arrow left icon"></i>
        </div>
        <transition name="fade wow fadeIn" enter-active-class="animated fadeIn" >
            <form class="ui form" @submit.prevent="processPost" enctype="multipart/formd-data" :class="{loading:loading}">
             <div v-if="serverErrors">
                 <div class="ui negative message" v-for="(error, index) in serverErrors" :key="index">
                 {{error[0]}}
             </div>
             </div>
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
                    <textarea name="description" class="form-control" id="" cols="30" rows="10" v-model="newPost.description"></textarea> 
                    <span class="error" style="color:#9f3a38">{{errors[0]}}</span>
                </div>
             </validation-provider>
            <div class="field">
                <label for="display-pic"><div class="ui btn">Upload <i class="upload icon"></i></div></label>
                <input type="file" name="display" id="display-pic" style="display:none" v-on:change="processForm" >
            </div>
            <button class="ui button inverted green" type="submit">Submit</button>
            </form>``
        </transition>
    </div>
</template>


<script>
import { ValidationProvider } from 'vee-validate';
export default {
        components:{
            ValidationProvider
        },
        data() {
            return {
                newPost:{
                    title:"",
                    description:"",  
                    fileUp:""
                },  
                loading:false,
                serverErrors:null
            }
        },
        methods: {
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
               let tatget_e=e.target.files[0];
               this.newPost.fileUp=tatget_e;               
           },
           backList:function(){
               this.$emit('backList');
           }
            
        },
}
</script>

<style lang="scss" scoped>
   .post-container{
       width: 400px;
       padding: 10px;
       margin: 0px auto;
        & .back{
           height: 50px;
           width: 50px;
           background-color: white;
        //    line-height: 50px;
           text-align: center;
           text-align: center;
           padding: 10px;
           border-radius: 50%;
           box-shadow: 2px 2px 3px #ccc;
           cursor:pointer;
       }
   }
</style>