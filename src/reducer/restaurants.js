import axios from "../enabler/Axios"

const RESTO_EMPLACEMENTS = "RESTO_EMPLACEMENTS"
const RESTO_LISTE = "RESTO_LISTE"
const RESTO_DETAILS = "RESTO_DETAILS"
const RESTO_ADD = "RESTO_ADD"
const RESTO_UPDATE = "RESTO_UPDATE"
const PLAT_ADD = "PLAT_ADD"

export function getEmplacements(restaurantId){
    return dispatch => {
        return axios.get(`backoffice/restaurant/${restaurantId}/emplacements`)
            .then((response) => {
                dispatch({
                    type: RESTO_EMPLACEMENTS,
                    payload: response.data
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

export function getDetails(restaurantId){
    return dispatch => {
        return axios.get(`backoffice/restaurant/${restaurantId}/details`)
            .then((response) => {
                dispatch({
                    type: RESTO_DETAILS,
                    payload: response.data
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

export function getListeRestaurant(){
    return dispatch => {
        return axios.get(`backoffice/restaurant/liste`)
            .then((response) => {
                dispatch({
                    type: RESTO_LISTE,
                    payload: response.data
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

export function addNewRestaurant(data){
    return dispatch => {
        return axios.post(`backoffice/restaurant/save`, data)
            .then((response) => {
                console.log("response add new resto",response)
                dispatch({
                    type: RESTO_ADD,
                    payload: response.data
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

export function updateRestaurant(data){
    return dispatch => {
        return axios.post(`backoffice/restaurant/update`, data)
            .then((response) => {
                console.log("response update resto",response)
                dispatch({
                    type: RESTO_UPDATE,
                    payload: response.data
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

export function addNewPlat(data){
    console.log('data add new plat', data)
    return dispatch => {
        return axios.post(`backoffice/restaurant/plats/save`, data)
            .then((response) => {
                console.log("response add new plat",response)
                dispatch({
                    type: PLAT_ADD,
                    payload: response.data
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

const initialState = {liste : [], emplacements: [], details: {}};
export const reducer = (oldState = initialState, action) => {
    
    switch (action.type) {
        case RESTO_LISTE :
            return { ...oldState, liste:  action.payload }
        case RESTO_DETAILS :
            return {...initialState, details: action.payload }
        case RESTO_EMPLACEMENTS :
            return { ...oldState, emplacements: action.payload }
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
}

export default RestaurantRx;