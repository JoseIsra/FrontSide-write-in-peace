import { RouteRecordRaw } from 'vue-router';
import Home from '@/layouts/Home';
import Trunk from '@/pages/Trunk';
import EmotionalDiary from '@/pages/EmotionalDiary';
import Writting from '@/pages/Writting';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'landing',
    component: () => import('@/layouts/MainLayout.vue'),
  },
  {
    path: '/peace',
    name: 'peace',
    component: Home,
    children: [
      {
        path: 'trunk',
        name: 'trunk',
        component: Trunk,
      },
      {
        path: 'diary-emotional',
        name: 'emotional',
        component: EmotionalDiary,
      },
      {
        path: 'writting',
        name: 'writting',
        component: Writting,
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('@/pages/Error404.vue'),
  },
];

export default routes;
