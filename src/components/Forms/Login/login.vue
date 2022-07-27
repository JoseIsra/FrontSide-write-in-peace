<template>
  <base-form class="login" @submit-form="submitLogin">
    <template #title>
      <h5 class="no-margin no-padding brand text-weight-bolder">MyPeace</h5>
    </template>
    <template #content>
      <basic-input
        v-model="v$.email.$model"
        label="Correo"
        :error="v$.email.$errors.length > 0"
        ><p
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
        :error="v$.password.$errors.length > 0"
      >
        <p
          v-for="error of v$.password.$errors"
          :key="error.$uid"
          style="bottom: 100%"
          class="text-red no-margin"
        >
          {{ error.$message }}
        </p>
        <template #icon-place>
          <q-icon name="lock" size="18px" />
        </template>
      </basic-input>
      <router-link to="#">Olvidé mi contraseña</router-link>
    </template>
    <template #action>
      <q-btn
        text-color="white"
        color="primary full-width"
        label="Iniciar sesión"
        class="login__btn text-weight-bolder q-py-md"
        no-caps
        type="submit"
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
// import { api } from '@/boot/axios';
// import { BaseResponse } from '@/utils/types';

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

    const submitLogin = async () => {
      const res = await v$.value.$validate();
      if (!res)
        return errorNotification('Complete correctamente el formulario');

      // const json = await api.get<BaseResponse>('/writting');
      // const data = json.data;
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
