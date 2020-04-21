import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { resolve } from 'url';
import { reject } from 'q';
Vue.use(Vuex);
axios.defaults.baseURL="http://localhost:8000/api"

export const store =new Vuex.Store({
    state:{
      token:localStorage.getItem('token') || null,
      serverError:false,
      posts:null
    },
    mutations:{
        retrieveToken(state,data){
            state.token=data
        },
        destroyToken(state){
            state.token=null;
        },  
        getPost(state,data){
            state.posts=data;
        },
        deletePost(state,data){
           let index=state.posts.findIndex(item=>item.id == data)
           state.posts.splice(index,1)
        }
 },
    getters:{
        loggedIn(state){
            return state.token
        },
        posts(state){
            return state.posts
        },
        
        // feedFiltered(state){
        //     if(state.filterd=="all"){
        //         return state.feeds.data;
        //     }else{
        //        return state.feeds.data.filter(feed=>{
        //             if(state.filterd===feed.category.category){
        //                 return state.feeds;
        //            }
        //         })
        //     }
        //   return state.feeds.data
        // },

        serverError(state){
            return state.serverError;
        }    
        
        
    },
    actions:{
        loginUser(context,data){
            return new Promise((resolve,reject)=>{
                axios.post('/login',data)
                .then(response=>{
                    let token =response.data.success.token;
                    localStorage.setItem('token',token)
                    
                    context.commit("retrieveToken",token)
                    resolve(response)
                })
                .catch(err=>{
                    reject(err)
                })
            })
        },

        destroyToken(context){
            axios.defaults.headers.common['Authorization']='Bearer ' + context.state.token
            if (context.getters.loggedIn) {
                return new Promise((resolve,reject)=>{
                    axios.post('/logout')
                    .then(response=>{
                        localStorage.removeItem('token')
                        context.commit("destroyToken")
                        resolve(response)
                    })
                    .catch(err=>{
                        reject(err)
                    })
                })
            }
        },
        postData(context,data){
            axios.defaults.headers.common['Authorization']='Bearer ' + context.state.token
            return new Promise((resolve,reject)=>{
                // const config={
                //     headers:{
                //         'content-type':'multipart/formd-data',
                //     }
                // }
                console.log(data);
                
                let formData=new FormData();
                formData.append('display',data.fileUp);
                formData.append('title',data.title);
                formData.append('description',data.description);
                axios.post('/newpost',formData)
                .then(response=>{
                   console.log("sucessss");
                    // context.commit("retrieveToken",token)
                    resolve(response)
                })
                .catch(err=>{
                    console.log("fail");
                    
                    reject(err)
                })
            })
        },

        getPost(context){
            axios.defaults.headers.common['Authorization']="Bearer " + context.state.token
            axios.get('/allpost')
            .then(response=>{
                context.commit("getPost",response.data.data)
            })
            .catch(err=>{
                console.log(err);
            })  
        },
        deletePost(context,index){
            context.commit("deletePost",index)
            // axios.defaults.headers.common['Authorization']="Bearer " + context.state.token
            // axios.get('/allpost')
            // .then(response=>{
            //     context.commit("getPost",response.data.data)
            // })
            // .catch(err=>{
            //     console.log(err);
            // })  
        },

        getSubCategory(context,category){
            context.commit("isLoading",true)
            axios.get('/sub-category/'+category)
            .then(response=>{
                context.commit("getSubCategory",response.data)
            })
            .catch(err=>{
                console.log(err);
            })  
        },
        getCategory(context){
            axios.get('/category')
            .then(response=>{
                context.commit("getCategory",response.data)
            })
            .catch(err=>{
                console.log(err);
            })  
        },
        getFeeds(context){
            context.commit("isLoading",true)
            axios.get('/feeds')
            .then(response=>{
                context.commit("getFeeds",response.data)
                context.commit("isLoading",false)
            })
            .catch(err=>{
                context.commit("serverError");
                
            })  
        },
        getUserFeeds(context,id){
            context.commit("isLoading",true)
            axios.get('/user/feeds/'+id)
            .then(response=>{
                context.commit("getUserFeeds",response.data)
                context.commit("isLoading",false)
            })
            .catch(err=>{
                context.commit("serverError");
                
            })  
        },

        getMentor(context,data){
            context.commit("isLoading",true)
            axios.get('/mentors/?'+'sub_cat='+data)
            .then(response=>{
                context.commit("getMentor",response.data)
                context.commit("isLoading",false)
            })
            .catch(err=>{
                console.log(err);
            })  
        },


         addSubCategory({commit,dispatch},data){
            axios.post("add-sub-category",{'data':data})
            .then(response=>{
                commit("subAdded",response.data);
                dispatch("getMentor",response.data.sub_category)
            })
            .catch(err=>{
                console.log(err);
            })  
        },
        filterd(context,data){
            context.commit("filterd",data)
        },
        
        checkUser(context,data){
            return new Promise((resolve,reject)=>{
                axios.post('/check',data)
                .then(response=>{
                    resolve(response)  
                })
                .catch(err=>{
                    reject(err)
                    
                })
            })
        }

    }
}) 