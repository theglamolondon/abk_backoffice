import axios from "../enabler/Axios"

const ACCOMPAGNEMENT_LISTE = "ACCOMPAGNEMENT_LISTE"

export function getAllSupplements(id){
    return dispatch => {
        return axios.get(`backoffice/restaurant/${id}/supplements`)
            .then((response) => {
                dispatch({
                    type: ACCOMPAGNEMENT_LISTE,
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
        case ACCOMPAGNEMENT_LISTE :
            return { ...oldState, liste:  action.payload }
        case "@@router/LOCATION_CHANGE" :
            return initialState
        default :
            return oldState
    }
}

const AccompagnementRx = {
    reducer : reducer,
    liste : getAllSupplements,
}

export default AccompagnementRx;