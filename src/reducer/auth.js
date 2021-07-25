import axios from "../enabler/Axios"

const USER_LOGIN = "USER_LOGIN"
const USER_LOGOUT = "USER_LOGOUT"

export const AUTH_ROLE = {
  ADMIN : "ADMIN",
  NUSER: "NUSER"
}

export function login(credentials){
  return dispatch => {
    return axios.post(`/backoffice/auth/login`, credentials)
      .then((response) => {
        dispatch({
          type: USER_LOGIN,
          payload: response.data
        })
        return response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export function logout(){
  sessionStorage.removeItem('abk_user')
  window.location.href = "/"
  return dispatch => {
    dispatch({
      type: USER_LOGOUT,
      payload: {}
    })
  }
}

export function autoLogin(data){
    return dispatch => {
        dispatch({
            type: USER_LOGIN,
            payload: data
        })
    }
}

const initialState = {};
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN :
            return { ...action.payload }
        case USER_LOGOUT :
            return {}
        default :
            return {...state}
    }
}

const AuthRx = {
    reducer : reducer,
    login: login,
    autologin: autoLogin,
    logout: logout,
}

export default AuthRx;
