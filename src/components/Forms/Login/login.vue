<template>
  <base-form class="login">
    <template #title>
      <h5 class="no-margin no-padding brand text-weight-bolder">MyPeace</h5>
    </template>
    <template #content>
      <div class="relative-position">
        <p
          v-for="error of v$.email.$errors"
          :key="error.$uid"
          class="no-margin text-red absolute"
        >
          {{ error.$message }}
        </p>
        <basic-input v-model="v$.email.$model" label="Correo" />
      </div>
      <div class="relative-position">
        <p
          v-for="error of v$.password.$errors"
          :key="error.$uid"
          style="bottom: 100%"
          class="text-red no-margin absolute"
        >
          {{ error.$message }}
        </p>
        <basic-input
          v-model="v$.password.$model"
          type="password"
          label="Contraseña"
        />
      </div>
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
import BaseForm from 'shared/BaseForm';
import BasicInput from 'shared/BasicInput';
import useVuelidate from '@vuelidate/core';
import { required, email, minLength, helpers } from '@vuelidate/validators';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Login',
  components: { BaseForm, BasicInput },
  setup() {
    const router = useRouter();

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

    const submitLogin = () => {
      // const res = await v$.value.$validate();
      void router.push({
        name: 'trunk',
      });
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
