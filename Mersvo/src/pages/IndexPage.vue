<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page>
        <HeaderSection />
        <div class="q-mt-xl flex flex-center justify-around">
          <CardsPage :title="events.title" :routing="events.routing" />
          <CardsPage :title="catering.title" :routing="catering.routing" />
          <CardsPage :title="hotDesking.title" :routing="hotDesking.routing" />
          <CardsPage
            class="q-mt-xl"
            :title="NamePlate.title"
            :routing="NamePlate.routing"
          />
          <CardsPage
            class="q-mt-xl"
            :title="visitors.title"
            :routing="visitors.routing"
          />
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { defineComponent } from "vue";
import HeaderSection from "../pages/HeaderSection.vue";
import CardsPage from "../pages/CardsPage.vue";
import { useCardStore } from "../stores/cards";
import { storeToRefs } from "pinia";

const store = useCardStore();
const { events, visitors, catering, NamePlate, hotDesking } =
  storeToRefs(store);
</script>


<style>
</style>
