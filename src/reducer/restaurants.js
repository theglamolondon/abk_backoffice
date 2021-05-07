import axios from "../enabler/Axios"

const RESTO_EMPLACEMENTS = "RESTO_EMPLACEMENTS"
const RESTO_LISTE = "RESTO_LISTE"

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

const initialState = {liste : [], emplacements: []};
export const reducer = (oldState = initialState, action) => {
    
    switch (action.type) {
        case RESTO_LISTE :
            return { ...oldState, liste:  action.payload }
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
}

export default RestaurantRx;