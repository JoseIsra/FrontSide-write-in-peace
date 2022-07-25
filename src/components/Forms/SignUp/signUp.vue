<template>
  <base-form class="signUp">
    <template #title>
      <h5 class="no-margin no-padding brand text-weight-bolder">MyPeace</h5>
    </template>
    <template #content>
      <basic-input v-model="v$.userName.$model" label="Nombre" />
      <basic-input v-model="v$.lastName.$model" label="Apellidos" />
      <basic-input v-model="v$.email.$model" label="Correo" />
      <p
        v-for="error of v$.email.$errors"
        :key="error.$uid"
        class="no-margin text-red"
      >
        {{ error.$message }}
      </p>
      <div class="relative-position">
        <basic-input
          v-model="v$.password.$model"
          type="password"
          label="Contraseña"
        />
        <p
          v-for="error of v$.password.$errors"
          :key="error.$uid"
          class="no-margin text-red absolute"
          style="top: 100%"
        >
          {{ error.$message }}
        </p>
      </div>
    </template>
    <template #action>
      <q-btn
        text-color="white"
        color="primary full-width"
        label="Registrarme"
        class="signUp__btn text-weight-bolder q-py-md"
        no-caps
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

export default defineComponent({
  name: 'Login',
  components: { BaseForm, BasicInput },
  setup() {
    const form = reactive({
      email: '',
      password: '',
      userName: '',
      lastName: '',
    });

    const rules = computed(() => ({
      email: {
        required: helpers.withMessage('No ha escrito un correo', required),
        email: helpers.withMessage('No es un correo válido', email),
      },
      password: {
        required: helpers.withMessage('No has escrito tu contraseña', required),
        minLength: helpers.withMessage(
          'La contraseña necesita mínimo 8 carácteres',
          minLength(8)
        ),
      },
      userName: {
        required: helpers.withMessage('No has escrito tu nombre', required),
      },
      lastName: {
        required: helpers.withMessage('No has escrito tus apellidos', required),
      },
    }));

    const v$ = useVuelidate(rules, form);

    const submitLogin = async () => {
      const res = await v$.value.$validate();
      alert(res);
    };

    return {
      form,
      v$,
      submitLogin,
    };
  },
});
</script>

<style scoped lang="scss">
@import './signUp.scss';
</style>
