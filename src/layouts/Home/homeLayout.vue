<template>
  <q-layout view="hHh lpR fff">
    <app-header />

    <q-page-container style="backgroundcolor: #fffffe">
      <router-view />
    </q-page-container>

    <app-footer />
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppHeader from '@/components/Appheader';
import AppFooter from '@/components/AppFooter';

export default defineComponent({
  name: 'Home',
  components: { AppHeader, AppFooter },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
@import './homeLayout.scss';
</style>
