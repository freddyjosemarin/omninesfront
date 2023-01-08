import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('src/modules/start/layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () =>
          import('src/modules/cotizaciones/pages/UploadPage.vue'),
      },
    ],
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
