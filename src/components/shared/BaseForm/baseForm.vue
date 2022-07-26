<template>
  <div class="base-form bg-white q-pa-md">
    <div class="base-form__inner column items-center">
      <section class="q-mb-md">
        <slot name="title">Un titulo</slot>
      </section>
      <section class="column q-gutter-y-md">
        <slot name="content">cool-content</slot>
      </section>
      <section class="q-my-md full-width q-px-lg">
        <slot name="action"> un botón</slot>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseForm',
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
@import './baseForm.scss';
</style>
