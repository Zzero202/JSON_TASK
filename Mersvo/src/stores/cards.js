import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCardStore = defineStore('card', () => {

  const events = ref({
    title: 'Events',
    routing: '/events'

  })
  const catering = ref({
    title: 'catering',
    routing: '/catering'

  })
  const hotDesking = ref({
    title: 'hotDesking',
    routing: '/Hot Desking'

  })
  const NamePlate = ref({
    title: 'Name Plate',
    routing: '/Name Plate'

  })
  const visitors = ref({
    title: 'visitors',
    routing: '/visitors'

  })
  return { events, visitors, NamePlate, catering, hotDesking }
})
