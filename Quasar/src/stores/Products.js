import { defineStore } from 'pinia';
import { ref } from "vue";
import appService from "../services/services";

export const usePostsStore = defineStore('products', () => {
  const name = ref('My Products')
  const products = ref([])

  function getProducts() {
    appService.getProducts().then((res)=>{
      products.value = res.data.products;
      // console.log(res.data);
      // console.log(res.data)
    });

  }

  return { name, products, getProducts }

});
