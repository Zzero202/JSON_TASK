import appServices from '../services/service'
import { onMounted, ref } from 'vue'
import { defineStore } from 'pinia'

export const UsePostDetails = defineStore('detail', () => {
    const props = defineProps(['id']);
    const posts = ref(null);    
    const comments = ref(null);
    function getpostdetails() {
        appServices.getPostById(props.id).then((res) => {
            posts.value = res.data

        })
    }
    function getcomments() {
        appServices.getComments(props.id).then((res) => {
            comments.value = res.data
            console.log(comments.value)
        })
    }
    const ShowPostDetail = onMounted(() => {
        getpostdetails();
        getcomments();
    })

    return { ShowPostDetail, posts, comments }
}) 