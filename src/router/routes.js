import meta from './meta';

const routes = [
  // Base Routes
  {
    path: '/',
    name: 'BaseRoute::index',
    component: () => import('@/components/layouts/Base.vue'),
    redirect: {
      name: 'BaseRoute::home',
    },
    children: [
      {
        path: 'home',
        name: 'BaseRoute::home',
        component: () => import('@/views/Home.vue'),
        meta: meta.base.home,
      },
      {
        path: 'updates',
        name: 'BaseRoute::updates',
        component: () => import('@/views/Updates.vue'),
        meta: meta.base.updates,
      },
      {
        path: 'about-us',
        name: 'BaseRoute::aboutUs',
        component: () => import('@/views/About-Us.vue'),
        meta: meta.base.aboutUs,
      },
      {
        path: 'components',
        component: () => import('@/views/components/Index.vue'),
        children: [
          {
            path: '',
            name: 'BaseRoute::components',
            component: () => import('@/views/components/List.vue'),
            meta: meta.base.components,
          },
          {
            path: 'cards',
            name: 'BaseRoute::components:cards',
            component: () => import('@/views/components/modules/Cards.vue'),
            meta: meta.base.components.modules.cards,
          },
          {
            path: 'buttons',
            name: 'BaseRoute::components:buttons',
            component: () => import('@/views/components/modules/Buttons.vue'),
            meta: meta.base.components.modules.buttons,
          },
        ],
      },
      {
        path: 'layouts',
        name: 'BaseRoute::layouts',
        component: () => import('@/views/Layouts.vue'),
        meta: meta.base.layouts,
      },
      {
        path: 'utilities',
        name: 'BaseRoute::utilities',
        component: () => import('@/views/Utilities.vue'),
        meta: meta.base.utilities,
      },
      {
        path: 'tools',
        name: 'BaseRoute::tools',
        component: () => import('@/views/Tools.vue'),
        meta: meta.base.tools,
      },
    ],
  },

  // Error page catch routes
  {
    path: '/:pathMatch(.*)*',
    name: 'ErrorRoute::404',
    component: () => import('@/views/errors/404.vue'),
  },
];

export default routes;
