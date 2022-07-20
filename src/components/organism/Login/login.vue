<template>
  <base-form class="login">
    <template #title>
      <h5 class="no-margin no-padding brand text-weight-bolder">MyPeace</h5>
    </template>
    <template #content>
      <basic-input v-model="v$.email.$model" label="Correo" />
      <p
        v-for="error of v$.email.$errors"
        :key="error.$uid"
        class="no-margin text-red"
      >
        {{ error.$message }}
      </p>
      <basic-input
        v-model="v$.password.$model"
        type="password"
        label="Contraseña"
      />
      <p
        v-for="error of v$.password.$errors"
        :key="error.$uid"
        class="text-red no-margin"
      >
        {{ error.$message }}
      </p>
      <router-link to="#">Olvidé mi contraseña</router-link>
    </template>
    <template #action>
      <q-btn
        text-color="white"
        color="primary full-width"
        label="Iniciar sesión"
        class="login__btn text-weight-bolder q-py-md"
        no-caps
        @click="submitLogin"
      />
    </template>
  </base-form>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from 'vue';
import BaseForm from '@/components/organism/BaseForm';
import BasicInput from '@/components/atoms/BasicInput';
import useVuelidate from '@vuelidate/core';
import { required, email, minLength, helpers } from '@vuelidate/validators';

export default defineComponent({
  name: 'Login',
  components: { BaseForm, BasicInput },
  setup() {
    const state = reactive({
      email: '',
      password: '',
    });

    const rules = computed(() => ({
      email: {
        required: helpers.withMessage('No has escrito tu correo', required),
        email: helpers.withMessage('No es un correo válido', email),
      },
      password: {
        required: helpers.withMessage('No has escrito tu contraseña', required),
        minLength: helpers.withMessage(
          'La contraseña necesita mínimo 8 carácteres',
          minLength(8)
        ),
      },
    }));

    const v$ = useVuelidate(rules, state);

    const submitLogin = async () => {
      const res = await v$.value.$validate();
      alert(res);
    };

    return {
      v$,
      state,
      submitLogin,
    };
  },
});
</script>

<style scoped lang="scss">
@import './login.scss';
</style>
