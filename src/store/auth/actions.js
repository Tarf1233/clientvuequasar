import Vue from 'vue'
import { LocalStorage } from 'quasar'
const SetLogin = ({ commit }, params) => {
  return Vue.prototype.$axios.post(process.env.API + 'auth/login', {
    email: params.email,
    password: params.password
  }).then((response) => {
    if (response.status !== 200) {
      commit('SET_LOGIN_STATE', false)
      LocalStorage.set('token', null)
      LocalStorage.set('session', false)
    } else {
      commit('SET_LOGIN_STATE', true)
      LocalStorage.set('token', response.data.token) // guardando token em localstore let value = LocalStorage.getItem(key) para recuperar
      LocalStorage.set('session', true)
    }
  })
    .catch((error) => {
      commit('SET_LOGIN_STATE', false)
      LocalStorage.set('token', null)
      LocalStorage.set('session', false)
      console.log(error)
    })
}
const SetAuth = ({ commit }, params) => {
  return Vue.prototype.$axios.get(params.url, {
    headers: {
      Authorization: 'Bearer ' + LocalStorage.getItem('token') }
  }).then(async (response) => {
    if (response.status !== 200) {
      commit('SET_LOGIN_STATE', 'false')
      await LocalStorage.set('session', false)
      await LocalStorage.set('token', null)
      console.log(response)
    } else {
      commit('SET_LOGIN_STATE', true)
      LocalStorage.set('session', true)
      console.log(response)
    }
  })
    .catch((error) => {
      commit('SET_LOGIN_STATE', false)
      LocalStorage.set('session', false)
      LocalStorage.set('token', null)
      console.log(error)
    })
}

const ClearAuth = ({ commit }, params) => {
  return new Promise((resolve, reject) => {
    commit('CLEAR_LOGIN_STATE')
    LocalStorage.set('token', false)
    LocalStorage.set('session', false)
  })
}

export {
  SetLogin,
  SetAuth,
  ClearAuth
}
