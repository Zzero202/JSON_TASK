import appServices from '../services/service'
import { defineStore } from 'pinia'
import { onMounted, ref } from 'vue'
export const usePostStore = defineStore('poster',()=>{
    
       const name = ref('World News')
    const posts = ref([]);
    
    
  const ShowPosts =  onMounted(()=>{
        appServices.getPosts().then((res)=>{
                posts.value = res.data
                // console.log(res)
            }).catch((err)=>{
                console.log(err);
            })
    })
return {name,posts,ShowPosts}

})