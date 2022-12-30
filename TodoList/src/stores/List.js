import { defineStore } from 'pinia';
import { ref } from "vue";

export const useList = defineStore('list',()=>{
  function removeItem(index) {
    // eslint-disable-next-line vue/no-mutating-props
    props.items.splice(index, 1);
    emit("removeItem");
  }
  function CompeleteItem(index) {
    // eslint-disable-next-line vue/no-mutating-props
    props.compeletedItems.splice(index, 1);
    emit("CompeleteItem");
  }
  function progress(index) {
    // eslint-disable-next-line vue/no-mutating-props
    props.progressItems.push(props.items[index]);
    // eslint-disable-next-line vue/no-mutating-props
    props.items.splice(index, 1);
    emit("progress");
    // console.log(progressItems.value);
  }
  function undo(index) {
    // eslint-disable-next-line vue/no-mutating-props
    props.items.push(props.progressItems[index]);
      // eslint-disable-next-line vue/no-mutating-props
    props.progressItems.splice(index, 1);
    emit("undo");
  }
  function compelete(index) {
    // eslint-disable-next-line vue/no-mutating-props
    props.compeletedItems.push(props.progressItems[index]);
    // eslint-disable-next-line vue/no-mutating-props
    props.progressItems.splice(index, 1);
    emit("compelete");
  }
  function undoCompelete(index) {
    // eslint-disable-next-line vue/no-mutating-props
    props.progressItems.push(props.compeletedItems[index]);
    // eslint-disable-next-line vue/no-mutating-props
    props.compeletedItems.splice(index, 1);
    emit("undoCompelete");
  }

  return {undoCompelete,undo,compelete,progress,CompeleteItem,removeItem}
})
