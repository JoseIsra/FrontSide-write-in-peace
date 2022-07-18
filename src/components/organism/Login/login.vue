<template>
  <base-form class="login">
    <template #title>
      <h5 class="no-margin no-padding brand text-weight-bolder">MyPeace</h5>
    </template>
    <template #content>
      <basic-input v-model="email" label="Correo" />
      <basic-input v-model="password" type="password" label="Contraseña" />
      <router-link to="#">Olvidé mi contraseña</router-link>
    </template>
    <template #action>
      <q-btn
        text-color="white"
        color="primary full-width"
        label="Iniciar sesión"
        class="login__btn text-weight-bolder q-py-md"
        no-caps
      />
    </template>
  </base-form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import BaseForm from '@/components/organism/BaseForm';
import BasicInput from '@/components/atoms/BasicInput';

export default defineComponent({
  name: 'Login',
  components: { BaseForm, BasicInput },
  setup() {
    const email = ref<string>('');
    const password = ref<string>('');
    return {
      email,
      password,
    };
  },
});
</script>

<style scoped lang="scss">
@import './login.scss';
</style>
