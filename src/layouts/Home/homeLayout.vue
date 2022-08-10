<template>
  <q-layout view="hHh lpR fff">
    <app-header @toggle-drawer="leftDrawerOpen = !leftDrawerOpen" />

    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      bordered
      :width="250"
      class="overflow-hidden"
    >
      <p class="q-mt-md q-ml-md text-sm text-blue-grey-8">
        ¿A dónde quieres ir?
      </p>
      <q-tabs
        v-model="currentTab"
        indicator-color="primary"
        vertical
        active-color="primary"
        content-class="text-blue-grey-8 q-px-xs"
        active-bg-color="blue-grey-2"
        no-caps
        switch-indicator
      >
        <q-route-tab
          v-for="tab in tabs"
          :key="tab.name"
          :name="tab.name"
          :label="tab.label"
          :to="tab.redirect"
          :icon="tab.icon"
        />
      </q-tabs>
    </q-drawer>

    <q-page-container style="backgroundcolor: #fffffe">
      <router-view />
    </q-page-container>

    <app-footer />
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import AppHeader from '@/components/Appheader';
import AppFooter from '@/components/AppFooter';
import { appTabs } from '@/utils/constants';
import { AppTabs } from '@/utils/types';

export default defineComponent({
  name: 'Home',
  components: { AppHeader, AppFooter },
  setup() {
    const leftDrawerOpen = ref(false);
    const tabs = ref<AppTabs[]>(appTabs);
    const currentTab = ref('trunk');

    return {
      leftDrawerOpen,
      tabs,
      currentTab,
    };
  },
});
</script>

<style scoped lang="scss">
@import './homeLayout.scss';
</style>
