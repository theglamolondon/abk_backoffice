import axios from "../enabler/Axios"

const USER_LOGIN = "USER_LOGIN"
const USER_LISTE = "USER_LISTE"

export function login(credentials){
    return dispatch => {
        return axios.post(`/backoffice/auth/login`, credentials)
            .then((response) => {
                dispatch({
                    type: USER_LOGIN,
                    payload: response.data
                })
                return response.data.token
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

const initialState = {};
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN :
            return { ...action.payload }
        default :
            return {...state}
    }
}

const AuthRx = {
    reducer : reducer,
    login: login,
}

export default AuthRx;
