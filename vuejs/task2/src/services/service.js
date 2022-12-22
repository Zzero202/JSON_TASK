import { api } from "@/axios/axios";

export default {
    getPosts : () => api.get('/posts'),
    getPostById:(id)=>api.get(`/posts/${id}`),
    getComments:(id)=>api.get(`/posts/${id}/comments`)
}