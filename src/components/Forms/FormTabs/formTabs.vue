<template>
  <q-card class="form-tabs" flat>
    <q-tabs
      v-model="currentTab"
      indicator-color="white"
      align="justify"
      class="text-grey-5 q-mb-xs"
      active-color="white"
      narrow-indicator
      no-caps
    >
      <q-tab name="login" label="Iniciar sesión" />
      <q-tab name="signup" label="Regístrate" />
    </q-tabs>

    <q-tab-panels
      v-model="currentTab"
      animated
      class="form-tabs__panel"
      transition-prev="scale"
      transition-next="scale"
      transition-duration="450"
    >
      <q-tab-panel name="login" class="no-padding">
        <login />
      </q-tab-panel>

      <q-tab-panel name="signup" class="form-tabs__signup no-padding">
        <sign-up />
      </q-tab-panel>
    </q-tab-panels>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Login from '@/components/Forms/Login';
import SignUp from '@/components/Forms/SignUp';

export default defineComponent({
  name: 'FormTabs',
  components: { Login, SignUp },
  setup() {
    const currentTab = ref<string>('login');

    return {
      currentTab,
    };
  },
});
</script>

<style scoped lang="scss">
@import './formTabs.scss';
</style>
