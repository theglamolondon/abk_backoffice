import axios from "../enabler/Axios"

const RESTO_EMPLACEMENTS = "RESTO_EMPLACEMENTS"
const RESTO_LISTE = "RESTO_LISTE"
const RESTO_DETAILS = "RESTO_DETAILS"

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
    reducer : reducer,
    emplacement : getEmplacements,
    liste : getListeRestaurant,
    details : getDetails,
}

export default RestaurantRx;