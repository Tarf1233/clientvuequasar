
const routes = [
  {
    path: '/',
    component: () => import('layouts/minLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'auth/register', component: () => import('pages/Auth/Register.vue') },
      { path: 'auth/login', component: () => import('pages/Auth/Login.vue') },
      { path: 'auth/forgot', component: () => import('pages/Auth/Forgot.vue') }
    ]
  },
  {
    path: '/dashboard',
    component: () => import('layouts/mainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
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
