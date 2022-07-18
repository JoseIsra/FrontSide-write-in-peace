<template>
  <q-input
    v-bind="$attrs"
    outlined
    :value="value"
    @input="$emit('update:value', $event.target.value)"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BasicInput',
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  emits: ['update:value'],
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
@import './basicInput.scss';
</style>
