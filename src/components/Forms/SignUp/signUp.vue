<template>
  <base-form class="signUp">
    <template #title>
      <h5 class="no-margin no-padding brand text-weight-bolder">MyPeace</h5>
    </template>
    <template #content>
      <basic-input v-model="v$.userName.$model" label="Nombre" dense />
      <basic-input v-model="v$.lastName.$model" label="Apellidos" dense />
      <basic-input
        v-model="v$.email.$model"
        label="Correo"
        dense
        :error="v$.email.$errors.length > 0"
      >
        <p
          v-for="error of v$.email.$errors"
          :key="error.$uid"
          class="no-margin text-red"
        >
          {{ error.$message }}
        </p>
      </basic-input>
      <basic-input
        v-model="v$.password.$model"
        type="password"
        label="Contraseña"
        dense
        :error="v$.password.$errors.length > 0"
      >
        <p
          v-for="error of v$.password.$errors"
          :key="error.$uid"
          class="no-margin text-red"
        >
          {{ error.$message }}
        </p>
        <template #icon-place>
          <q-icon name="lock" size="18px" />
        </template>
      </basic-input>
    </template>
    <template #action>
      <q-btn
        text-color="white"
        color="primary full-width"
        label="Registrarme"
        class="signUp__btn text-weight-bolder q-py-md"
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
import { errorNotification } from '@/utils/notification';

export default defineComponent({
  name: 'Login',
  components: { BaseForm, BasicInput },
  setup() {
    const router = useRouter();
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
        required,
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
      if (!res)
        return errorNotification('Complete correctamente el formulario');

      void router.push({
        name: 'trunk',
      });
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
