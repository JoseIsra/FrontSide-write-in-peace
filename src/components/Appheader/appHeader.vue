<template>
  <q-header elevated class="head q-pa-sm">
    <nav class="row items-center no-wrap">
      <aside class="col-2 col-md-1 row no-wrap">
        <q-btn
          dense
          flat
          icon="menu"
          text-color="primary"
          class="q-mr-sm sm"
          @click="$emit('toggle-drawer')"
        />
        <h4 class="no-margin text-weight-bolder dark-word text-md">MyPeace</h4>
      </aside>
      <q-tabs
        v-if="$q.screen.gt.sm"
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
      <q-space />
      <aside
        class="head__profile q-py-xs q-px-sm dark-word col-md-2 col-1 row items-center justify-between"
      >
        <div class="md">
          <label class="ellipsis">{{ user.name }}</label>
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
import { useUser } from '@/composables/user';
import { userService } from '@/api/userApi';
import { successNotification } from '@/utils/notification';

export default defineComponent({
  name: 'AppHeader',
  emits: ['toggle-drawer'],
  setup() {
    const router = useRouter();
    const currentTab = ref('trunk');
    const tabs = ref<AppTabs[]>(appTabs);
    const profileOptions = ref<MenuProfile[]>(menuProfile);

    const menuProfileActions = reactive<MenuProfileActions>({
      logout: () => logout(),
      profile: () => redirectToProfile(),
    });

    const { user } = useUser();

    const logout = () => {
      userService
        .logoutUser()
        .then(() => {
          successNotification('Hasta la próxima 😀');
          void router.push({
            name: 'landing',
          });
        })
        .catch(() => {
          console.error('error on logout');
        })
        .finally(() => {
          void router.push({
            name: 'landing',
          });
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
      user,
    };
  },
});
</script>

<style scoped lang="scss">
@import './appHeader.scss';
</style>
