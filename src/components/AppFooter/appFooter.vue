<template>
  <q-footer elevated class="primary row justify-center items-center q-pa-md">
    <div class="row items-center justify-center">
      <p class="q-my-none q-mx-md text-white">MyPeace-2022 &copy;</p>
    </div>
  </q-footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppFooter',
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
@import './appFooter.scss';
</style>
