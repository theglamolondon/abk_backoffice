import axios from "../enabler/Axios"

const ACCOMPAGNEMENT_LISTE = "ACCOMPAGNEMENT_LISTE"

export function getAllAccompagnements(){
    return dispatch => {
        return axios.get(`backoffice/restaurant/accompagnements`)
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
    liste : getAllAccompagnements,
}

export default AccompagnementRx;