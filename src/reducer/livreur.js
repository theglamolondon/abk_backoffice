import axios from "../enabler/Axios"

const LIVREUR_POSITION   = "LIVREUR_POSITION"
const LIVREUR_LISTE      = "LIVREUR_LISTE"
const LIVREUR_ADD        = "LIVREUR_ADD"
const LIVREUR_UPDATE     = "LIVREUR_UPDATE"
const LIVREUR_MAJ        = "LIVREUR_MAJ"
const LIVREUR_DISCONNECT = "LIVREUR_DISCONNECT"

export function handleLivreurPosition(data){
  return dispatch => {
    dispatch({
      type: LIVREUR_POSITION,
      payload: data
    })
  }
}

export function listeLivreur(){
  return async dispatch => {
    try {
      const response = await axios.get(`/backoffice/livreur/`)
      dispatch({
        type: LIVREUR_LISTE,
        payload: response.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function ajouter(data){
  return async dispatch => {
    try {
      const response = await axios.post(`/backoffice/livreur/save`, data)
      dispatch({
        type: LIVREUR_ADD,
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
      const response = await axios.put(`/backoffice/livreur/update`, data)
      dispatch({
        type: LIVREUR_MAJ,
        payload: response.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function changeMdp(data){
  return async dispatch => {
    try {
      const response = await axios.post(`/backoffice/livreur/change/password`, data)
      dispatch({
        type: LIVREUR_UPDATE,
        payload: response.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function disconnect(data){
  axios.post(`/backoffice/auth/signout/livreur`, {id: data})
  return async dispatch => {
    try {
      const response = await axios.post(`/backoffice/auth/signout/livreur`, {id: data})
      dispatch({
        type: LIVREUR_DISCONNECT,
        payload: response.data
      })
    } catch (error) {
      console.log(error)
    }
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
  changeMdp: changeMdp,
  modifier: modifier,
  logout: disconnect,
}

export default LivreurRx