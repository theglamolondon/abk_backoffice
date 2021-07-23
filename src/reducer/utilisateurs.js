import axios from "../enabler/Axios"

const USER_LISTE  = "USER_LISTE"
const USER_SAVE   = "USER_SAVE"
const USER_UPDATE = "USER_UPDATE"


export function getListe(){
  return dispatch => {
    return axios.get(`/backoffice/utilisateurs/liste`)
      .then((response) => {
        dispatch({
          type: USER_LISTE,
          payload: response.data
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export function ajouter(data){
  return async dispatch => {
    try {
      const response = await axios.post(`/backoffice/utilisateurs/save`, data)
      dispatch({
        type: USER_SAVE,
        payload: response.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function modifier(data){
  return async dispatch => {
    try {
      const response = await axios.put(`/backoffice/utilisateurs/update`, data)
      dispatch({
        type: USER_UPDATE,
        payload: response.data
      })
    } catch (error) {
      console.log(error)
    }
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
    ajouter: ajouter,
    modifier: modifier,
}

export default UtilisateurRx;
