<template>
  <q-header elevated class="head default-white q-pa-sm">
    <nav class="row items-center no-wrap">
      <aside class="col-2 col-md-1">
        <h4 class="no-margin text-weight-bolder dark-word text-md">MyPeace</h4>
      </aside>
      <q-tabs
        v-model="currentTab"
        indicator-color="primary"
        shrink
        align="justify"
        active-color="primary"
        narrow-indicator
        content-class="text-blue-grey-8 col-auto "
        no-caps
        inline-label
      >
        <q-route-tab
          v-for="tab in tabs"
          :key="tab.name"
          :name="tab.name"
          :label="tab.label"
          :to="tab.redirect"
          :icon="tab.icon"
        />
      </q-tabs>
      <q-space class="md" />
      <aside
        class="head__profile q-py-xs q-px-sm dark-word col-md-2 col-1 row items-center justify-between"
      >
        <div class="md">
          <label>Mi nombre</label>
        </div>
        <q-btn dense round icon="keyboard_arrow_down" flat>
          <q-menu
            :offset="[0, 10]"
            auto-close
            class="rounded-borders"
            transition-show="scale"
            transition-hide="scale"
          >
            <q-list dense bordered class="dark-word">
              <q-item
                v-for="option in profileOptions"
                :key="option.action"
                clickable
                @click="handleOption(option.action)"
              >
                <q-item-section avatar>
                  <q-icon :name="option.icon" />
                </q-item-section>
                <q-item-section>{{ option.label }}</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </aside>
    </nav>
  </q-header>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
import { appTabs, menuProfile } from '@/utils/constants';
import { AppTabs, MenuProfile, MenuProfileActions } from '@/utils/types';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'AppHeader',
  setup() {
    const router = useRouter();
    const currentTab = ref('trunk');
    const tabs = ref<AppTabs[]>(appTabs);
    const profileOptions = ref<MenuProfile[]>(menuProfile);

    const menuProfileActions = reactive<MenuProfileActions>({
      logout: () => logout(),
      profile: () => redirectToProfile(),
    });

    const logout = () => {
      void router.push({
        name: 'landing',
      });
    };

    const redirectToProfile = () => {
      console.log('to profile');
    };

    const handleOption = (action: string) => {
      menuProfileActions[action as keyof MenuProfileActions]();
    };

    return {
      currentTab,
      tabs,
      profileOptions,
      handleOption,
    };
  },
});
</script>

<style scoped lang="scss">
@import './appHeader.scss';
</style>
