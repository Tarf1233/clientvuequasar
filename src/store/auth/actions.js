import Vue from 'vue'
import { LocalStorage } from 'quasar'
const Login = ({ commit }, params) => {
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios.post(process.env.API + 'auth/login', {
      email: params.email,
      password: params.password
    }).then((response) => {
      commit('SET_AUTH', response.data.token)
      LocalStorage.set('token', response.data.token) // guardando token em localstore let value = LocalStorage.getItem(key) para recuperar
    })
      .catch((error) => {
        commit('SET_AUTH', 'cant login')
        console.log(error)
      })
  })
}

const CheckAuth = ({ commit }, params) => {
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios.post(process.env.API + 'auth/login', {
      email: params.email,
      password: params.password
    }).then((response) => {
      commit('SET_AUTH', response.data.token)
      LocalStorage.set('token', response.data.token) // guardando token em localstore let value = LocalStorage.getItem(key) para recuperar
    })
      .catch((error) => {
        commit('SET_AUTH', 'cant login')
        console.log(error)
      })
  })
}

export {
  Login,
  CheckAuth
}
