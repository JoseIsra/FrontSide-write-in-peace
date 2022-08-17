<template>
  <base-form class="signUp" @submit-form="submitSignUp">
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
import { errorNotification, successNotification } from '@/utils/notification';
import { userService } from '@/api/userApi';
import { useUser } from '@/composables/user';

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
    const { setUser, setToken } = useUser();

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

    const submitSignUp = async () => {
      const res = await v$.value.$validate();
      if (!res)
        return errorNotification('Complete correctamente el formulario');

      const { data } = await userService.signUpUser({
        email: form.email,
        password: form.password,
        name: form.userName,
        lastName: form.lastName,
      });
      if (!data.user) {
        errorNotification('El correo ya está en uso');
        return;
      }
      setToken(data.token);
      setUser(data.user);
      successNotification('Sesión iniciada');
      void router.push({
        name: 'emotional',
      });
    };

    return {
      form,
      v$,
      submitSignUp,
    };
  },
});
</script>

<style scoped lang="scss">
@import './signUp.scss';
</style>
