import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { resolve } from 'url';
import { reject } from 'q';
Vue.use(Vuex);
axios.defaults.baseURL="http://localhost:8000/api"

export const store =new Vuex.Store({
    state:{
      feeds:[],
      userFeed:[],
      subCategory:[],
      allCategory:[],
      user:window.loggedUser,
      filterd:"all",
      ajaxLoading:true,
      mentors:[],
      serverError:false
    },
    mutations:{
        getCategory(state,data){
            state.allCategory=data;
        },
       getSubCategory(state,data){
           state.subCategory=data
        },
        getFeeds(state,data){
            state.feeds=data
        },
        subAdded(state,data){
            state.user=data
        },
        filterd(state,data){
            console.log(data)
            state.filterd=data
            },
        isLoading(state,data){
            state.ajaxLoading=data
        },    
        getMentor(state,data){
            state.mentors=data
            console.log(data);
        },
        serverError(state,data){
            state.serverError=true
        },
        getUserFeeds(state,data){
            state.userFeed=data;
            context.commit("isLoading",false)
        }
},
    getters:{
        getSubCategory(state){
            return state.subCategory
        },
        user(state){
            return state.user
        },
        loggedIn(state){
            return state.user
        },
        getMentors(state){
            return state.mentors;
        },
        getFeeds(state){
            return state.feeds
        },
        getUserFeeds(state){
            return state.userFeed
        },
        feedFiltered(state){
            if(state.filterd=="all"){
                return state.feeds.data;
            }else{
               return state.feeds.data.filter(feed=>{
                    if(state.filterd===feed.category.category){
                        return state.feeds;
                   }
                })
            }
          return state.feeds.data
        },
        filterd(state){
            return state.filterd
        },
        isLoading(state){
            return state.ajaxLoading;
        },
        serverError(state){
            return state.serverError;
        }    
        
        
    },
    actions:{
        regiseterUser(context,data){
            return new Promise((resolve,reject)=>{
                axios.post('/register',data)
                .then(response=>{
                    resolve(response)
                })
                .catch(err=>{
                    reject(err)
                })
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