import axios from "../enabler/Axios"

const DASHBOARD_DATA = "DASHBOARD_DATA"

export function searchClient(subject){
    return dispatch => {
        return axios.get(`/commercial/clients/SearchGeaClient?subject=${subject}`)
            .then((response) => {
                console.log(response)
                dispatch({
                    type: DASHBOARD_DATA,
                    payload: response.data
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

const initialState = {};
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case DASHBOARD_DATA :
            return {
                ...state,
                liste: action.payload
            }
        default :
            return {...state}
    }
}

const ContextRx = {
    reducer : reducer,
}

export default ContextRx;
