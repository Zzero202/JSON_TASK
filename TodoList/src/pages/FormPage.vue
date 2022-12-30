<template>
  <q-input v-model="toDoAdd" type="text" label="Add Item">
    <template v-slot:after>
      <q-btn round dense flat icon="send" @click="addItem" />
    </template>
  </q-input>
  <ListContent :items="items" :progressItems="progressItems" :compeletedItems="compeletedItems" @removeItem="removeItem" @CompeleteItem="CompeleteItem" @progress="progress" @undo="undo" @compelete="compelete" @undoCompelete="undoCompelete" />
</template>

<script setup>
import { storeToRefs } from "pinia";
import ListContent from "../pages/ListContent.vue";
import { useForm } from "../stores/Form";

const store = useForm();
const {toDoAdd,items,progressItems,compeletedItems} = storeToRefs(store);
const {addItem}  = store;

</script>

<style lang="scss" scoped>
</style>
