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
        meta: meta.base.home,
      },
      {
        path: 'updates',
        name: 'BaseRoute::updates',
        component: () => import('../views/Updates.vue'),
        meta: meta.base.updates,
      },
      {
        path: 'about-us',
        name: 'BaseRoute::aboutUs',
        component: () => import('../views/About-Us.vue'),
        meta: meta.base.aboutUs,
      },
      {
        path: 'components',
        name: 'BaseRoute::components',
        component: () => import('../views/Components.vue'),
        meta: meta.base.components,
      },
      {
        path: 'layouts',
        name: 'BaseRoute::layouts',
        component: () => import('../views/Layouts.vue'),
        meta: meta.base.layouts,
      },
      {
        path: 'utilities',
        name: 'BaseRoute::utilities',
        component: () => import('../views/Utilities.vue'),
        meta: meta.base.utilities,
      },
      {
        path: 'tools',
        name: 'BaseRoute::tools',
        component: () => import('../views/Tools.vue'),
        meta: meta.base.tools,
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
