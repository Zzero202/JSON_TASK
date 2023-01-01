import { defineStore } from 'pinia';
import { ref } from "vue";

export const useForm = defineStore('form', () => {
  const toDoAdd = ref("");
  const items = ref([]);
  const progressItems = ref([]);
  const compeletedItems = ref([]);
  function addItem() {
    if (!toDoAdd.value == "") {
      items.value.push({ value: toDoAdd.value });
      toDoAdd.value = "";
      console.log(items.value)
    }
  }
  function removeItem(index) {
    items.value.splice(index, 1);
  }
  function CompeleteItem(index) {
    compeletedItems.value.splice(index, 1);

  }
  function progress(index) {
    progressItems.value.push(items.value[index]);
    items.value.splice(index, 1);

  }
  function undo(index) {
    items.value.push(progressItems.value[index]);
    progressItems.value.splice(index, 1);

  }
  function compelete(index) {
    compeletedItems.value.push(progressItems.value[index]);
    progressItems.value.splice(index, 1);
  }
  function undoCompelete(index) {
    progressItems.value.push(compeletedItems.value[index]);
    compeletedItems.value.splice(index, 1);
  }
  return { toDoAdd, items, progressItems, compeletedItems, addItem, undoCompelete, compelete, progress, undo, removeItem, CompeleteItem }
});
