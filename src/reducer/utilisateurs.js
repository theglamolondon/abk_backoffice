import axios from "../enabler/Axios"

const USER_LISTE = "USER_LISTE"


export function getListe(){
    return dispatch => {
        return axios.get(`/backoffice/utilisateurs/liste`)
            .then((response) => {
                dispatch({
                    type: USER_LISTE,
                    payload: response.data
                })
                return response.data.token
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

const initialState = {liste: []};
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LISTE :
            return {...state, liste: action.payload}
        default :
            return {...state}
    }
}

const UtilisateurRx = {
    reducer : reducer,
    liste: getListe,
}

export default UtilisateurRx;
