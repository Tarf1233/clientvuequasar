const SET_LOGIN_STATE = (state, value) => {
  state.login_state = value
}

const CLEAR_LOGIN_STATE = (state) => {
  state.login_state = false
}

export {
  SET_LOGIN_STATE,
  CLEAR_LOGIN_STATE
}
