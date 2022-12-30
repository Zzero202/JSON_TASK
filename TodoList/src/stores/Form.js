import { defineStore } from 'pinia';
import { ref } from "vue";

export const useForm = defineStore('form',()=> {
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
return {toDoAdd,items,progressItems,compeletedItems,addItem}
});
