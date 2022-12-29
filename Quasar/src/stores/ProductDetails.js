import appService from '../services/services'
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProductDetail = defineStore('detail', () => {
  const products = ref(null);

  function getProductDetails(id) {
    appService.getProductById(id).then((res) => {
      products.value = res.data
      console.log(res.data)
    })
  }


  return { getProductDetails, products }
})
