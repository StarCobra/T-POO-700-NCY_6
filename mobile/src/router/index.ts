import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Example from '../component/NavBar.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/AppLogin.vue')
  },
  {
    path: '/',
    component: Example,
    children: [
      {
        path: '',
        redirect: '/dashboard',
      },
      {
        path: 'dashboard',
        component: () => import('../views/DashBoardPage.vue'),
      },
      {
        path: 'workingtime',
        component: () => import('../views/WorkingTimePage.vue'),
      },
      {
        path: 'user',
        component: () => import('../views/UserPage.vue'),
      },
      {
        path: 'clock',
        component: () => import('../views/ClockPage.vue'),
      },
      {
        path: 'profile',
        component: () => import('../views/AppProfile.vue')
      }
    ],
  },
];

const router = createRouter({
  // Use: createWebHistory(process.env.BASE_URL) in your app
  history: createWebHistory(),
  routes,
});

export default router;