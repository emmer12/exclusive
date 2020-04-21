<template>
    <div class="post-container">
        <div class="add" @click="addPost">
            <i  class="plus icon"></i>
        </div>
        <div class="table-responsive">

        <table class="table table-striped table-inverse ">
            <thead class="thead-inverse">
                <tr>
                    <th>id</th>
                    <th>Display Image</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                            <tr class="post-list" v-for="(post, index) in posts" :key="post.id">
                                <td scope="row">{{post.id}}</td>
                                <td>
                                    <img :src="`/storage/uploads/images/${post.display}`" alt="">
                                </td>
                                <td>{{post.title}}</td>
                                <td>{{post.description}}</td>
                                <td>
                                    <button class="ui button red" @click="deletePost(post.id)"><i class="trash icon"></i></button>
                                    <button class="ui button blue"><i class="edit icon"></i></button>
                                </td>
                            </tr>
                </tbody>
        </table>
        </div>
    </div>
</template>


<script>
import { ValidationProvider } from 'vee-validate';
export default {
        components:{
            ValidationProvider
        },
          props:{
       
        
        },
        data() {
            return {
                loading:true,
                serverErrors:null
            }
        },
        methods: {
            addPost:function(){
                this.$emit("addPost");
            },

            deletePost:function(index){
                console.log(index);
                this.$store.dispatch('deletePost',index)
                this.$swal('Hello Vue world!!!');
            }
        },
        created() {
            this.$store.dispatch('getPost');
        },
        computed: {
            posts(){
                return this.$store.getters.posts
            }
        },
}
</script>

<style lang="scss" scoped>
   .post-container{
       width: 50%;
       padding: 10px;
       margin: 0px auto;

       & .add{
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
   table{
       & thead{
           background: #3f3d56;
           color: white
       }

       & .post-list img{
           width: 150px;
           height: 100px;
       }
   }

   @media (max-width: 640px) {
       .post-container{
            width: 100%;
       }
   }
</style>