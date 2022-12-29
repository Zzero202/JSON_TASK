import appServices from '../services/service'
import { defineStore } from 'pinia'
import { ref } from 'vue'
export const usePostStore = defineStore('poster', () => {

    const name = ref('World News')
    const posts = ref([]);


    function showPosts() {
        appServices.getPosts().then((res) => {
            posts.value = res.data
            console.log(posts.value)
        }).catch((err) => {
            console.log(err);
        })
    }
    return { name, posts, showPosts }

})