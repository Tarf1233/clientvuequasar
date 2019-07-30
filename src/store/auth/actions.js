import Vue from 'vue'
const Login = ({ commit }) => {
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios.post(process.env.API + 'auth/login', {
      email: 'thomazmatos@gmail.com',
      password: 'e234e234e232'
    }).then((response) => {
      commit('SET_AUTH', response.data)
      console.log(response.data.token)
    })
      .catch((error) => {
        commit('SET_AUTH', 'cant login')
        console.log(error)
      })
  })
}

export {
  Login
}
