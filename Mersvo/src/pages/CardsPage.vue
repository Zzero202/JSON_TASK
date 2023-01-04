<template>
  <q-card class="my-card">
    <q-card-section align="center">
      <router-link
        class="text-center"
        style="text-decoration: none"
        :to="routing"
      >
        <q-btn round color="primary" icon="fullscreen" />
      </router-link>
    </q-card-section>
    <q-card-section>
      <div class="text-h6 text-capitalize">{{ title }}</div>
    </q-card-section>
    <q-separator />
    <q-card-section>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
        enim!
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
const props = defineProps({
  title: String,
  routing: String,
});
</script>

<style  scoped>
</style>
