const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/Home'),
  },
  {
    path: '/cards',
    name: 'cards',
    component: () => import('../pages/Cards'),
  },
  {
    path: '/payments',
    name: 'payments',
    component: () => import('../pages/Payments'),
  },
  {
    path: '/credit',
    name: 'credit',
    component: () => import('../pages/Credit'),
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('../pages/Settings'),
  }
]

export default routes
