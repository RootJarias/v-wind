import meta from './meta';

const routes = [
  // Base Routes
  {
    path: '/',
    name: 'BaseRoute::index',
    component: () => import('../components/layouts/Base.vue'),
    redirect: {
      name: 'BaseRoute::home',
    },
    children: [
      {
        path: 'home',
        name: 'BaseRoute::home',
        component: () => import('../views/Home.vue'),
        meta: meta.home,
      },
    ],
  },

  // Error page catch routes
  {
    path: '/:pathMatch(.*)*',
    name: 'ErrorRoute::404',
    component: () => import('../views/errors/404.vue'),
  },
];

export default routes;
