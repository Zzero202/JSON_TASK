import appServices from '../services/service'
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const UsePostDetails = defineStore('detail', () => {
    const posts = ref(null);
    const comments = ref(null);
    function getpostdetails(id) {
        appServices.getPostById(id).then((res) => {
            posts.value = res.data

        })
    }
    function getcomments(id) {
        appServices.getComments(id).then((res) => {
            comments.value = res.data
            // console.log(comments.value)
        })
    }

    return {getpostdetails,getcomments, posts, comments }
}) 