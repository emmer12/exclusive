export default {
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
        updateData(context,data){
            axios.defaults.headers.common['Authorization']='Bearer ' + context.state.token
            return new Promise((resolve,reject)=>{
                let formData1=new FormData();
                formData1.append('id',data.id);
                formData1.append('display',data.fileUp);
                formData1.append('title',data.title);
                formData1.append('description',data.description);
                
                axios.post('/updatepost',formData1)
                .then(response=>{
                   console.log("sucessss");
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
                context.commit('loading',true)
            return new Promise((resolve,reject)=>{
                axios.get('/allpost')
                .then(response=>{
                    context.commit('loading',false)
                    context.commit("getPost",response.data.data)
                    resolve(response.data)
                })
                .catch(err=>{
                    context.commit('loading',false)
                    console.log(err);
            })
         })
        },
        getById(context,id){
            axios.defaults.headers.common['Authorization']="Bearer " + context.state.token
                return new Promise((resolve,reject)=>{
                axios.get('/getpost/' + id)
                .then(response=>{
                    context.commit("getById",response.data.data)
                    resolve(response.data.data)
                })
                .catch(err=>{
                    console.log(err);
         })
        })
        },
        deletePost(context,id){
            axios.defaults.headers.common['Authorization']="Bearer " + context.state.token
            console.log(id,'sent isds');
            
            axios.delete('/deletePost',{
                data:{
                    ids:id
                }
            })
            .then(response=>{
                context.commit("deletePost",id)
            })
            .catch(err=>{
                console.log(err);
            })  
        },

        uploadFile(context,data){
            axios.defaults.headers.common['Authorization']='Bearer ' + context.state.token
            return new Promise((resolve,reject)=>{                
                let formData=new FormData();
                
                formData.append('file',data);

                axios.post('/upload-file',formData,{
                    onUploadProgress:progressEvent=>{
                        let progress=Math.round(progressEvent.loaded/progressEvent.total*100)
                        context.commit("uploadProgress",progress)
                        
                    }
                })
                .then(response=>{                    // context.commit("retrieveToken",token)
                    resolve(response)
                })
                .catch(err=>{
                    console.log("fail");
                    
                    reject(err)
                })
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