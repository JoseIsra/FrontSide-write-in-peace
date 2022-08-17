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
        meta: {
          auth: true,
        },
      },
      {
        path: 'diary-emotional',
        name: 'emotional',
        component: EmotionalDiary,
        meta: {
          auth: true,
        },
      },
      {
        path: 'writting',
        name: 'writting',
        component: Writting,
        meta: {
          auth: true,
        },
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    name: 'forbid',
    component: () => import('@/pages/Error404.vue'),
  },
];

export default routes;
