import { defineStore } from 'pinia';
import { ref } from "vue";

export const useForm = defineStore('form', () => {
  const toDoAdd = ref("");
  const lists = ref({
    name: 'To Do',
    items: [],
    icon1: 'login',
    icon2: 'cancel',
    color: 'black',
    cancel: (index) => {
      lists.value.items.splice(index, 1);
      // console.log(lists.value.items);
    },
    toProgress: (index) => {
      progressItems.value.items.push(lists.value.items[index]);
      lists.value.items.splice(index, 1);
    }
  });
  const progressItems = ref({
    name: 'In Progress',
    items: [],
    icon1: 'login',
    icon2: 'undo',
    color: '#FFCC00',
    toProgress: (index) => {
      compeletedItems.value.items.push(progressItems.value.items[index]);
      progressItems.value.items.splice(index, 1);
    },
    cancel: (index) => {
      lists.value.items.push(progressItems.value.items[index]);
      progressItems.value.items.splice(index, 1);
    }
  });
  const compeletedItems = ref({
    name: 'Completed',
    items: [],
    icon1: 'cancel',
    icon2: 'undo',
    color: 'green',
    toProgress: (index) => {
      compeletedItems.value.items.splice(index, 1);

    },
    cancel: (index) => {
      progressItems.value.items.push(compeletedItems.value.items[index]);
      compeletedItems.value.items.splice(index, 1);
    }
  });
  function addItem() {
    if (!toDoAdd.value == "") {
      lists.value.items.push({ value: toDoAdd.value });
      toDoAdd.value = "";
      // console.log(lists.value.items)
    }
  }
  // function removeItem(index) {
  //   lists.value.items.splice(index, 1);
  // }
  // function CompeleteItem(index) {
  //   compeletedItems.value.items.splice(index, 1);

  // }
  // function progress(index) {
  //   progressItems.value.items.push(lists.value.items[index]);
  //   lists.value.items.splice(index, 1);
  //   //  console.log('t')

  // }
  // function undo(index) {
  //   lists.value.items.push(progressItems.value.items[index]);
  //   progressItems.value.items.splice(index, 1);

  // }
  // function compelete(index) {
  //   compeletedItems.value.items.push(progressItems.value.items[index]);
  //   progressItems.value.items.splice(index, 1);
  // }
  // function undoCompelete(index) {
  //   progressItems.value.items.push(compeletedItems.value.items[index]);
  //   compeletedItems.value.items.splice(index, 1);
  // }
  return {
    toDoAdd, lists, progressItems, compeletedItems, addItem
    // , undoCompelete, compelete, progress, undo, removeItem, CompeleteItem
  }
});
