<template>
  <section class="q-pg-container text-center">
    <h4 class="text-weight-bolder">{{ name }}</h4>
  </section>
  <section v-if="products.length" class="q-pg-container">
    <div class="row">
      <div
        v-for="product in products"
        :key="product.id"
        class="text-center col-xl-4 col-lg-4 col-md-6 col-6"
      >
        <router-link :to="{ name: 'DetailsPage', params: { id: product.id } }">
          <q-img
            :src="product.thumbnail"
            spinner-color="primary"
            spinner-size="82px"
            width="400px"
            height="400px"
          />
        </router-link>
        <h5>{{ product.title }}</h5>
      </div>
    </div>
  </section>
  <section v-else>
    <h2 class="text-center">loading ...</h2>
  </section>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { usePostsStore } from "../stores/Products";
import DetailsPage from "../pages/DetailsPage.vue";

const store = usePostsStore();

const { name, products } = storeToRefs(store);
const { getProducts } = store;
getProducts();
</script>
