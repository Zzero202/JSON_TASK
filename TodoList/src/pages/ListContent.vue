<template>
  <div class="row text-center q-mt-lg">
    <q-card v-if="items.length" class="my-card col-4">
      <h5 class="text-left q-px-sm text-weight-bolder">To Do</h5>
      <q-card-section
        class="row q-mt-lg"
        v-for="(item, index) in items"
        :key="index"
      >
        <div class="col-6">
          <p style="font-size: 20px">{{ item.value }}</p>
        </div>
        <div class="col-6">
          <q-btn round dense flat icon="login" @click="progress(index)" />
          <q-btn round dense flat icon="cancel" @click="removeItem(index)" />
        </div>
      </q-card-section>
    </q-card>
    <q-card class="my-card col-4" v-else>
      <h5 class="text-left q-px-sm text-weight-bolder">To Do</h5>
      <q-card-section>
        <p>nothing in the list</p>
      </q-card-section>
    </q-card>
    <q-card v-if="progressItems.length" class="my-card col-4">
      <h5 class="text-warning text-left q-px-sm text-weight-bolder">
        In Progress
      </h5>
      <q-card-section
        v-for="(progress, index) in progressItems"
        :key="index"
        class="row q-mt-lg"
      >
        <div class="col-6">
          <p style="font-size: 20px">{{ progress.value }}</p>
        </div>
        <div class="col-6">
          <q-btn round dense flat icon="undo" @click="undo(index)" />
          <q-btn round dense flat icon="login" @click="compelete(index)" />
        </div>
      </q-card-section>
    </q-card>
    <q-card class="my-card col-4" v-else>
      <h5 class="text-left text-warning q-px-sm text-weight-bolder">
        In Progress
      </h5>
      <q-card-section>
        <p>nothing in the list</p>
      </q-card-section>
    </q-card>
    <q-card class="my-card col-4" v-if="compeletedItems.length">
      <h5 class="text-green text-left q-px-sm text-weight-bolder">Completed</h5>
      <q-card-section
        v-for="(compelete, index) in compeletedItems"
        :key="index"
        class="row q-mt-lg"
      >
        <div class="col-6">
          <p :id="index" style="font-size: 20px">{{ compelete.value }}</p>
        </div>
        <div class="col-6">
          <q-btn round dense flat icon="undo" @click="undoCompelete(index)" />
          <q-btn round dense flat icon="delete" @click="CompeleteItem(index)" />
          <!-- <q-btn round dense flat icon="done" @click="done(index)" /> -->
        </div>
      </q-card-section>
    </q-card>
    <q-card class="my-card col-4" v-else>
      <h5 class="text-left text-green q-px-sm text-weight-bolder">Completed</h5>
      <q-card-section>
        <p>nothing in the list</p>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  items: Array,
  compeletedItems: Array,
  progressItems: Array,
});
const emit = defineEmits([
  "removeItem",
  "CompeleteItem",
  "progress",
  "undo",
  "compelete",
  "undoCompelete",
  "done",
]);
function removeItem(index) {
  emit("removeItem", index);
}
function CompeleteItem(index) {
  emit("CompeleteItem", index);
}
function progress(index) {
  emit("progress", index);
}
function undo(index) {
  emit("undo", index);
}
function compelete(index) {
  emit("compelete", index);
}
function undoCompelete(index) {
  emit("undoCompelete", index);
}
// function done(index){
//   // eslint-disable-next-line vue/no-mutating-props
//   // let x = document.getElementById(index)
//   // x.style.background ='green';
//   console.log(props.compeletedItems[index].value);
//   emit("done")
// }
</script>

<style lang="scss" scoped>
</style>
