<template>
  <q-layout view="hHh lpR fFf">
    <landing />
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Landing from '@/pages/Landing';

export default defineComponent({
  name: 'MainLayout',

  components: {
    Landing,
  },

  setup() {
    return {};
  },
});
</script>
