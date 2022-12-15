<template>
    
 <h2 style="text-align:center;color:#fff">World News</h2>
    <div v-if="posts.length" id="content">
   <div v-for="post in posts" :key="post.id" class='post-content'>
        <div class='post'>
       <h4>{{post.title}}</h4>
       <p>{{post.body}}</p>
       </div>
        <router-link style="text-decoration:none" :to="{name :'PostDetails',params:{id:post.id} }">
            <button class='info'><img src='../../public/images/comment.png' width='15'> Read More</button>
            </router-link>        

</div>
        
    </div>
    <div v-else>
        <h1>loading</h1>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name: 'Posts',
    data(){
        return{
            posts:[]
        }
    },
    mounted(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            this.posts = res.data
            console.log(res)
        }).catch((err)=>{
            console.log(err);
        })
    }
    // async created(){
    //     try{
    //         const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    //         this.posts = res.data
    //         console.log(this.posts)
    //     }catch(e){
    //         console.log(e)
    //     }
    // }
    }
</script>

<style scoped>

#content{
    width:60%;
    margin:auto;
}
.post-content{
    padding:20px 0;
}
#content .post{
    margin:auto;
    text-align: center;
    padding: 40px;
    background:#dcdcdc;
    border-radius: 10px;
}
#content .post p{
  overflow:ellipsis;  
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
button{
    color:#f5f5f5;
    outline:none;
    border-radius:5px;
    text-align: center;
    border:none;
    background:rgb(165, 135, 3);
    margin:auto;
    display: block;
    margin-top: 5px;
    cursor:pointer;
    font-size:16px;
    padding:8px 10px;
    transition: all .7s;
}
button:hover{
    color:#f5f5f5;
    border:1px solid #f5f5f5;
    background:rgb(192, 192, 192)
}



</style>