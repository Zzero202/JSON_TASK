<template>
  <q-input v-model="toDoAdd" type="text" label="Add Item">
    <template v-slot:after>
      <q-btn round dense flat icon="send" @click="addItem" />
    </template>
  </q-input>
  <div class="row text-center q-mt-lg">
    <!-- <ListContent
    :items="items"
    :progressItems="progressItems"
    :compeletedItems="compeletedItems"
    @removeItem="removeItem"
    @CompeleteItem="CompeleteItem"
    @progress="progress"
    @undo="undo"
    @compelete="compelete"
    @undoCompelete="undoCompelete"
  /> -->
    <ListContent
      :color="lists.color"
      :icon1="lists.icon1"
      :icon2="lists.icon2"
      :name="lists.name"
      :items="lists.items"
      :cancel="lists.cancel"
      :toProgress = "lists.toProgress"

    />

    <ListContent
      :color="progressItems.color"
      :icon1="progressItems.icon1"
      :icon2="progressItems.icon2"
      :name="progressItems.name"
      :items="progressItems.items"
      :toProgress="progressItems.toProgress"
      :cancel="progressItems.cancel"
    />

    <ListContent
      :color="compeletedItems.color"
      :icon1="compeletedItems.icon1"
      :icon2="compeletedItems.icon2"
      :name="compeletedItems.name"
      :items="compeletedItems.items"
      :toProgress="compeletedItems.toProgress"
      :cancel="compeletedItems.cancel"
    />
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import ListContent from "../pages/ListContent.vue";
import { useForm } from "../stores/Form";

const store = useForm();
const { toDoAdd, lists, progressItems, compeletedItems } = storeToRefs(store);
const {
  addItem,
  // undoCompelete,
  // compelete,
  // progress,
  // undo,
  // removeItem,
  // CompeleteItem,
} = store;
</script>

<style lang="scss" scoped>
</style>
