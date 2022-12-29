import { api } from "../boot/axios";

export default {
  getProducts: () => api.get('/products'),
  getProductById: (id) => api.get('/products/'+id)
}
