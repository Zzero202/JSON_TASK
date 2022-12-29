<template>
  <section class="container">
    <div class="row">
    <div class="col-xl-6  col-md-6">
      <q-img
        :src="products.thumbnail"
        :ratio="1"
        spinner-color="primary"
        spinner-size="82px"
        style="width:500px"
      />
    </div>
    <div class="col-xl-6 q-mt-lg q-pt-lg col-md-6">
      <h5>{{ products.title }}</h5>
     <h5> {{ products.description }}</h5>
      <h5>{{ products.price }}</h5>
      <h5>{{ products.category }}</h5>
    </div>
  </div>
  </section>
</template>

<script setup>
import { useProductDetail } from "../stores/ProductDetails";
import { storeToRefs } from "pinia";
const props = defineProps(["id"]);

const store = useProductDetail();
const { getProductDetails } = store;
const { products } = storeToRefs(store);
getProductDetails(props.id);
</script>

<style lang="scss" scoped>
</style>
