<template>
  <section class="row items-center">
    <slot name="title"></slot>
    <q-icon name="help" class="q-ml-md" size="0.75rem" color="primary">
      <q-tooltip>
        <slot name="hint"></slot>
      </q-tooltip>
    </q-icon>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SectionTitle',
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
@import './sectionTitle.scss';
</style>
