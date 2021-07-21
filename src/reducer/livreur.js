import axios from "../enabler/Axios"

const LIVREUR_POSITION = "LIVREUR_POSITION"
const LIVREUR_LISTE = "LIVREUR_LISTE"
const LIVREUR_ADD = "LIVREUR_ADD"

export function handleLivreurPosition(data){
  return dispatch => {
    dispatch({
      type: LIVREUR_POSITION,
      payload: data
    })
  }
}

export function listeLivreur(){
  return dispatch => {
    return axios.get(`/backoffice/livreur/`)
      .then((response) => {
        dispatch({
          type: LIVREUR_LISTE,
          payload: response.data
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export function ajouter(data){
  return dispatch => {
    return axios.post(`/backoffice/livreur/save`, data)
      .then((response) => {
        dispatch({
          type: LIVREUR_ADD,
          payload: response.data
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

const initialState = {liste: []}
export const reducer = (oldState = initialState, action) => {
  switch (action.type) {
    case LIVREUR_LISTE :
      return {
        ...oldState,
        liste: action.payload
      }
    case "@@router/LOCATION_CHANGE" :
      return initialState
    default :
      return {...oldState}
  }
}

const LivreurRx = {
  reducer : reducer,
  handleLivreurPosition: handleLivreurPosition,
  liste: listeLivreur,
  ajouter: ajouter,
}

export default LivreurRx