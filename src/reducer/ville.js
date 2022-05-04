import axios from "../enabler/Axios"

const VILLE_LISTE  = "VILLE_LISTE"
const VILLE_ADD    = "VILLE_ADD"
const VILLE_UPDATE = "VILLE_UPDATE"

export function getAllVille(){
  return dispatch => {
    return axios.get(`backoffice/ville/`)
      .then((response) => {
        dispatch({
          type: VILLE_LISTE,
          payload: response.data
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export function addVille(data){
  return dispatch => {
    return axios.post(`backoffice/ville/save`, data)
      .then((response) => {
        dispatch({
          type: VILLE_ADD,
          payload: response.data
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export function updateVille(data){
  return dispatch => {
    return axios.put(`backoffice/ville/update`, data)
      .then((response) => {
        dispatch({
          type: VILLE_UPDATE,
          payload: response.data
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

const initialState = {liste : []};
export const reducer = (oldState = initialState, action) => {
    
  switch (action.type) {
    case VILLE_LISTE :
      return { ...oldState, liste:  action.payload }
    case "@@router/LOCATION_CHANGE" :
      return initialState
    default :
      return oldState
  }
}

const VilleRx = {
  reducer : reducer,
  liste : getAllVille,
  ajouter: addVille,
  modifier: updateVille
}

export default VilleRx;