import axios from "../enabler/Axios"

const COMMANDES_PAYEES = "COMMANDES_PAYEES"
const COMMANDES_LIVREES = "COMMANDES_LIVREES"
const COMMANDES_DETAILS = "COMMANDES_DETAILS"

export function getCommandesPayees(){
    return dispatch => {
        return axios.get(`/backoffice/commandes/payees`)
            .then((response) => {
                dispatch({
                    type: COMMANDES_PAYEES,
                    payload: response.data
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

export function getCommandesLivrees(){
    return dispatch => {
        return axios.get(`/backoffice/commandes/livrees`)
            .then((response) => {
                dispatch({
                    type: COMMANDES_LIVREES,
                    payload: response.data
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

export function getCommandeDetails(reference){
    return dispatch => {
        return axios.get(`/backoffice/commandes/details/${reference}`)
            .then((response) => {
                dispatch({
                    type: COMMANDES_DETAILS,
                    payload: response.data
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

const initialState = [];
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case COMMANDES_PAYEES :
            return action.payload
        case COMMANDES_LIVREES :
            return action.payload
        case COMMANDES_DETAILS :
            return action.payload
        case "@@router/LOCATION_CHANGE" :
            return initialState
        default :
            return state
    }
}

const CommandesRx = {
    reducer : reducer,
    commandesPayees : getCommandesPayees,
    commandesLivrees : getCommandesLivrees,
    commandeDetails : getCommandeDetails,
}

export default CommandesRx;