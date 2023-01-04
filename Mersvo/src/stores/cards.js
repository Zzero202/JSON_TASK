import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCardStore = defineStore('card', () => {

  const events = ref({
    title: 'Events',
    routing: '/events'

  })
  const catering = ref({
    title: 'Catering',
    routing: '/catering'

  })
  const hotDesking = ref({
    title: 'Hot Desking',
    routing: '/Hot Desking'

  })
  const NamePlate = ref({
    title: 'Name Plate',
    routing: '/Name Plate'

  })
  const visitors = ref({
    title: 'Visitors',
    routing: '/visitors'

  })
  return { events, visitors, NamePlate, catering, hotDesking }
})
