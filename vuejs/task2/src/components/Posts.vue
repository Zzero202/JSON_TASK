<template>
 <h2 @click="show()" style="text-align:center;color:#fff">World News</h2>

    <div v-if="posts.length" id="content">
   <div v-for="post in posts" :key="post.id" class='post-content'>
        <div class='post'>
       <h4>{{post.title}}</h4>
       <p>{{post.body}}</p>
       </div>
       <button @click="display($event)" :id="post.id" class="info"><img src='../../public/images/comment.png' width='15'> Read More</button>
       <button :id="post.id+'hide'" @click="hide($event)" class="read-less info"><img src='../../public/images/comment.png' width='15'>Read less</button>

   <!-- <PostDetails v-show="ShowPosts=false" :id="post.id" />      -->
   <PostDetails v-show="ShowPosts" :id="post.id" />
</div>
    </div>
    <div v-else>
        <h1>loading</h1>
    </div>
</template>

<script>
import axios from 'axios'
import PostDetails from './PostDetails.vue'
    export default {
        name: 'Posts',
        components:{
            PostDetails,
        },
    data(){
        return{
            posts:[],
            ShowPosts:false,
        }
    },
     methods:{
        getallposts(){
                        
           axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            this.posts = res.data
            // console.log(res)
        }).catch((err)=>{
            console.log(err);
        })             
                        
                        
    },
    display(e){
        // console.log(e.target.id)
        let id = e.target.id;
        let readMore =document.getElementById(id); 
       let detail =  document.getElementById(id+'detail');
    //    console.log(detail);
       detail.style.display='block'
       readMore.style.display='none';
       let readLess = document.getElementById(id+'hide');
       readLess.style.display = 'block'
       
    },
    hide(e){
     let id = e.target.id;
    //  console.log(id)
     let readLess = document.getElementById(id) 
     readLess.style.display = 'none';
     const removeChar = id.replace(/[A-z]/g,'')
     let detail =  document.getElementById(removeChar+'detail');
     console.log(detail)
     detail.style.display='none'
     let readMore = document.getElementById(removeChar)
     readMore.style.display ='block'
    }
        },
    mounted(){
     this.getallposts()
    }
    
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
.read-less{
    display: none;
}



</style>