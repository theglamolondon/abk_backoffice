import axios from "../enabler/Axios"

const COMMANDES_PAYEES = "COMMANDES_PAYEES"
const COMMANDES_LIVREES = "COMMANDES_LIVREES"
const COMMANDES_DETAILS = "COMMANDES_DETAILS"
const LIVREUR_POSITION = "LIVREUR_POSITION"

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

export function getCommandeAffectation(reference){
    const token = sessionStorage.getItem("firebase")
    return dispatch => {
        return axios.get(`/backoffice/commandes/affecter/${reference}?token=${token}`)
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

export function putCommandeAffectation(data){
    return dispatch => {
        return axios.put(`/backoffice/commandes/affecter`,data)
            .then((response) => {
                return true
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

const initialState = {liste : [], details: {data : {}, livreurs: []}};
export const reducer = (oldState = initialState, action) => {
    
    switch (action.type) {
        case COMMANDES_PAYEES :
            return { ...oldState, liste:  action.payload }
        case COMMANDES_LIVREES :
            return { ...oldState, liste: action.payload }
        case COMMANDES_DETAILS :
            return { ...oldState, details : {...oldState.details, data: action.payload}}
        case LIVREUR_POSITION : 
            let livreurs = oldState.details.livreurs
            livreurs.push(action.payload)            
            return { ...oldState, details: {...oldState.details, livreurs: livreurs}}
        case "@@router/LOCATION_CHANGE" :
            return initialState
        default :
            return oldState
    }
}

const CommandesRx = {
    reducer : reducer,
    commandesPayees : getCommandesPayees,
    commandesLivrees : getCommandesLivrees,
    commandeDetails : getCommandeDetails,
    getCommandeAffectation : getCommandeAffectation,
    affecterCommande: putCommandeAffectation,
}

export default CommandesRx;
