const { CheckAuth } = require('./middlewares')
const routes = [
  {
    path: '/',
    component: () => import('layouts/minLayout.vue'),
    beforeEnter: CheckAuth,
    children: [
      { path: '',
        name: 'index',
        component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/auth',
    component: () => import('layouts/minLayout.vue'),
    beforeEnter: CheckAuth,
    children: [
      { path: 'register',
        name: 'register',
        component: () => import('pages/Auth/Register.vue') },
      { path: 'login',
        name: 'login',
        component: () => import('pages/Auth/Login.vue') },
      { path: 'forgot',
        component: () => import('pages/Auth/Forgot.vue') }
    ]
  },
  {
    path: '/dashboard',
    component: () => import('layouts/mainLayout.vue'),
    beforeEnter: CheckAuth,
    children: [
      { path: 'products',
        component: () => import('pages/Dashboard/Products.vue'),
        name: 'products' }
    ]
  }
]
// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
