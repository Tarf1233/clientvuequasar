
const routes = [
  {
    path: '/auth',
    component: () => import('layouts/minLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'register', component: () => import('pages/Auth/Register.vue') },
      { path: 'login', component: () => import('pages/Auth/Login.vue') },
      { path: 'forgot', component: () => import('pages/Auth/Forgot.vue') }
    ]
  },
  {
    path: '/dashboard',
    component: () => import('layouts/mainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Dashboard/Index.vue') },
      { path: 'Home', component: () => import('pages/Dashboard/Index.vue') },
      { path: 'Venda', component: () => import('pages/Dashboard/Venda/Venda.vue') },
      { path: 'Venda/Details', component: () => import('pages/Dashboard/Venda/VendaDetails.vue') },
      { path: 'Cliente', component: () => import('pages/Dashboard/Cliente/Cliente.vue') },
      { path: 'Venda/Details', component: () => import('pages/Dashboard/Cliente/ClienteDetails.vue') }
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
