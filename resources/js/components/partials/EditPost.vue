<template>
    <div class="post-container">
    <div class="action-con">
                <div class="right">
                    <router-link :to="{name:'dashboard'}">
                       <button class="circular ui icon button large">
                          <i class="icon arrow left"></i>
                        </button>
                    </router-link>
                   
                   <button class="circular ui icon button large green" @click="processUpdate">
                        <i class="icon save"></i> Update
                    </button>
                </div>
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
                    id:"",
                    title:"",
                    description:"",  
                    fileUp:""
                },  
                loading:false,
                serverErrors:null,
                image:""
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
           processUpdate:function(){
               this.$Progress.start();
               this.loading=true;                                                                  
               this.$store.dispatch('updateData',this.newPost).then((response)=>{
                   this.loading=false;
                   this.$Progress.finish();
                   this.newPost.title="" 
                   this.newPost.description=""
                   this.newPost.fileUp="";
                   this.$toast.success({
                        title:"Post Updated",
                        message:"post successfully updated "
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
               let tatget_e=e.target.files[0];
               this.newPost.fileUp=tatget_e;               
           },
           backList:function(){
               this.$emit('backList');
           },
            
        },
        created() {
            this.$store.dispatch("getById",this.$route.params.id).then((res)=>{
                this.newPost.id=res[0].id
                this.newPost.title=res[0].title
                this.newPost.description=res[0].description
            })        
        },
}
</script>

<style lang="scss" scoped>
    
</style>