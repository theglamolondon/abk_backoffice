import axios from "../enabler/Axios"

const COMMANDES_PAYEES      = "COMMANDES_PAYEES"
const COMMANDES_LIVREES     = "COMMANDES_LIVREES"
const COMMANDES_DETAILS     = "COMMANDES_DETAILS"
const COMMANDES_SEND_CHAT   = "COMMANDES_SEND_CHAT"
const COMMANDES_MSG_CHAT    = "COMMANDES_MSG_CHAT"
const COMMANDES_ALL         = "COMMANDES_ALL"
const COMMANDES_PREPAREES   = "COMMANDES_PREPAREES"
const LIVREUR_POSITION      = "LIVREUR_POSITION"



export function sendChatMessage(data){
  return dispatch => {
    return axios.post(`/backoffice/commandes/commenter/${data.reference}`, data)
      .then((response) => {
        dispatch({
          type: COMMANDES_SEND_CHAT,
          payload: response.data
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export function receiveChatMessage(data){
  return dispatch => {
    dispatch({
      type: COMMANDES_MSG_CHAT,
      payload: data
    })
  }
}

export function getAllCommandes(page){
  return dispatch => {
    return axios.get(`/backoffice/commandes/liste?page=${page}`)
      .then((response) => {
        dispatch({
          type: COMMANDES_ALL,
          payload: response.data
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export function getCommandesPayees(page){
  return dispatch => {
    return axios.get(`/backoffice/commandes/payees?page=${page}`)
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

export function getCommandesPreparees(page){
  return dispatch => {
    return axios.get(`/backoffice/commandes/a-recuperer?page=${page}`)
      .then((response) => {
        dispatch({
          type: COMMANDES_PREPAREES,
          payload: response.data
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export function getCommandesLivrees(page){
  return dispatch => {
    return axios.get(`/backoffice/commandes/livrees?page=${page}`)
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

const initialState = {liste : {data: [], nombrePage: 0}, details: {data : {commentaires: []}, livreurs: []}};
export const reducer = (oldState = initialState, action) => {
    
  switch (action.type) {
    case COMMANDES_PAYEES    :
    case COMMANDES_LIVREES   :
    case COMMANDES_PREPAREES :
    case COMMANDES_ALL       :
      return { ...oldState, liste: action.payload }

    case COMMANDES_DETAILS :
      return { ...oldState, details : {...oldState.details, data: action.payload}}

    case LIVREUR_POSITION : 
      let livreurs = oldState.details.livreurs
      livreurs.push(action.payload)            
      return { ...oldState, details: {...oldState.details, livreurs: livreurs}}

    case COMMANDES_MSG_CHAT : 
      let commentaires = oldState.details.data.commentaires
      if(oldState.details.data.reference === action.payload.reference){
        commentaires.push(action.payload)
        let details = oldState.details
        details.data.commentaires = [...commentaires]           
        return { ...oldState, details: {...details}}
      }else{
        return {...oldState}
      }
       
    case "@@router/LOCATION_CHANGE" :
      return initialState
    default :
      return oldState
  }
}

const CommandesRx = {
  reducer : reducer,
  commandesAll: getAllCommandes,
  commandesPayees : getCommandesPayees,
  commandesPreparees: getCommandesPreparees,
  commandesLivrees : getCommandesLivrees,
  commandeDetails : getCommandeDetails,
  getCommandeAffectation : getCommandeAffectation,
  affecterCommande: putCommandeAffectation,
  commandeChat: sendChatMessage,
  commandeMsg: receiveChatMessage,
}

export default CommandesRx;