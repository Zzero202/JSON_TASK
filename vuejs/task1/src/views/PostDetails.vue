<template>
  <div v-if="posts" class="posts-comments-holder">
    <div id="details">
      <h3>Details of the Post</h3>
      <h5 class="body">
        title: <span>{{ posts.title }}</span>
      </h5>
      <p class="desc">
        Description: <span> {{ posts.body }}</span>
      </p>
      <hr />
    </div>

    <div id="comments">
      <div v-for="com in comments" :key="com.id" class="comments-username-body">
        <p class="username">
          <img
            src="../../public/images/img_avatar.png"
            alt="Avatar"
            class="avatar"
          />
          <span>{{ com.name }}</span>
        </p>
        <p class="body">
          <span>{{ com.email }}</span>
        </p>
        <p class="body">
          <span>{{ com.body }}</span>
        </p>
      </div>
    </div>
  </div>
  <div v-else>
    <h2>loading ...</h2>
  </div>
</template>

<script setup>
import { UsePostDetails } from "../stores/details";
import appServices from '../services/service'
import { onMounted, ref } from 'vue'
import { storeToRefs } from "pinia";
const props = defineProps(['id']);

    const store = UsePostDetails()
    const {getpostdetails,getcomments} = store;
    const {posts,comments} = storeToRefs(store)
    getpostdetails(props.id)
    getcomments(props.id)


    // function getpostdetails() {
    //     appServices.getPostById(props.id).then((res) => {
    //         posts.value = res.data

    //     })
    // }
    // function getcomments() {
    //     appServices.getComments(props.id).then((res) => {
    //         comments.value = res.data
    //         // console.log(comments.value)
    //     })
    // }
    // const ShowPostDetail = onMounted(() => {
    //     getpostdetails();
    //     getcomments();
    // })

// // export default {
//     name :'PostDetails',
//     props:['id'],
//     data(){
//         return{
//             posts:null,
//             comments:null
//         }
//     },
//      mounted(){
//         this.getpostdetails();
//         this.getcomments();
//     },
//     methods:{
//         getpostdetails(){
//        axios.get('https://jsonplaceholder.typicode.com/posts/'+ this.id).then((res)=>{
//         this.posts = res.data
//        })
//         },
//        getcomments(){
//         axios.get(`https://jsonplaceholder.typicode.com/posts/${this.id}/comments`).then((res)=>{
//         this.comments = res.data
//         // console.log(this.comments)
//        })
//        }
//     },

// }
</script>

<style scoped>
.posts-comments-holder {
  width: 80%;
  margin: auto;
  margin-top: 50px;
  color: #fff;
}
#comments .comments-username-body {
  text-align: left;
  background: #39393a;
  width: 100%;
  padding: 1px 10px;
  border-radius: 20px;
  margin-bottom: 10px;
  margin: auto;
  margin-bottom: 20px;
}
#comments .username {
  font-weight: bolder;
}
#details h5 {
  font-size: 20px;
  text-transform: capitalize;
}
#details h3 {
  text-decoration: underline;
}
.avatar {
  vertical-align: middle;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
</style>