import auth from '../store/auth'
const CheckAuth = (to, from, next) => {
  if (auth.state.login_state && to.name === 'login') {
    next('/dashboard/products')
  }
  if (!auth.state.login_state && to.name !== 'login') {
    next('/auth/login')
  }
  if (!auth.state.login_state && to.name === 'login') {
    next()
  }
  if (auth.state.login_state && to.name !== 'login') {
    next()
  }
}
export {
  CheckAuth
}
