import axios from "../enabler/Axios"

const RESTO_EMPLACEMENTS    = "RESTO_EMPLACEMENTS"
const RESTO_LISTE           = "RESTO_LISTE"
const RESTO_DETAILS         = "RESTO_DETAILS"
const RESTO_ADD             = "RESTO_ADD"
const RESTO_UPDATE          = "RESTO_UPDATE"
const PLAT_ADD              = "PLAT_ADD"
const PLAT_UPDATE           = "PLAT_UPDATE"
const EMPLACEMENT_ADD       = "EMPLACEMENT_ADD"
const EMPLACEMENT_RAZ       = "EMPLACEMENT_ADD"

export function getEmplacements(restaurantId){
  return async dispatch => {
    try {
      const response = await axios.get(`backoffice/restaurant/${restaurantId}/emplacements`)
      dispatch({
        type: RESTO_EMPLACEMENTS,
        payload: response.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function getDetails(restaurantId){
  return async dispatch => {
    try {
      const response = await axios.get(`backoffice/restaurant/${restaurantId}/details`)
      dispatch({
        type: RESTO_DETAILS,
        payload: response.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function getListeRestaurant(){
  return async dispatch => {
    try {
      const response = await axios.get(`backoffice/restaurant/liste`)
      dispatch({
        type: RESTO_LISTE,
        payload: response.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function addNewRestaurant(data){
  return async dispatch => {
    try {
      const response = await axios.post(`backoffice/restaurant/save`, data)
      console.log("response add new resto", response)
      dispatch({
        type: RESTO_ADD,
        payload: response.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function updateRestaurant(data){
  return async dispatch => {
    try {
      const response = await axios.post(`backoffice/restaurant/update`, data)
      console.log("response update resto", response)
      dispatch({
        type: RESTO_UPDATE,
        payload: response.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function updatePlat(data){
  console.log('data update plat', data)
  return async dispatch => {
    try {
      const response = await axios.post(`backoffice/restaurant/plats/update`, data)
      console.log("response add new plat", response)
      dispatch({
        type: PLAT_UPDATE,
        payload: response.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function addNewPlat(data){
  console.log('data add new plat', data)
  return async dispatch => {
    try {
      const response = await axios.post(`backoffice/restaurant/plats/save`, data)
      console.log("response add new plat", response)
      dispatch({
        type: PLAT_ADD,
        payload: response.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function razEmplacementPassword(data){
  return async dispatch => {
    try {
      const response = await axios.put(`backoffice/restaurant/emplacement/password/reset`, data)
      dispatch({
        type: EMPLACEMENT_RAZ,
        payload: response.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}
export function addEmplacement(data){
  return async dispatch => {
    try {
      const response = await axios.post(`backoffice/restaurant/emplacement/save`, data)
      dispatch({
        type: EMPLACEMENT_ADD,
        payload: response.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

const initialState = {liste : [], emplacements: [], details: {}};
export const reducer = (oldState = initialState, action) => {
    
  switch (action.type) {
    case RESTO_LISTE :
      return { ...oldState, liste:  action.payload }
    case RESTO_DETAILS :
      return {...initialState, restaurant: action.payload }
    case RESTO_EMPLACEMENTS :
      return {...initialState, ...action.payload};
    case "@@router/LOCATION_CHANGE" :
      return initialState
    default :
      return oldState
  }
}

const RestaurantRx = {
  reducer: reducer,
  emplacement: getEmplacements,
  liste: getListeRestaurant,
  details: getDetails,
  ajouter: addNewRestaurant,
  modifier: updateRestaurant,
  ajouterPlat: addNewPlat,
  modifierPlat: updatePlat,
  ajouterEmpl: addEmplacement,
  razEmpl: razEmplacementPassword,
}

export default RestaurantRx;