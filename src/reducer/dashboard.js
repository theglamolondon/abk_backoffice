import axios from "../enabler/Axios"

const DASHBOARD_COMMANDES = "DASHBOARD_COMMANDES"

export function getRecentCommandes(){
  return dispatch => {
    return axios.get(`/backoffice/dashboard/commandes/recentes`)
      .then((response) => {
        console.log(response)
        dispatch({
          type: DASHBOARD_COMMANDES,
          payload: response.data
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

const initialState = {commandes:[], statistics:{}, historique:{}};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DASHBOARD_COMMANDES :
      return {
        ...state,
        commandes: action.payload
      }
    case "@@router/LOCATION_CHANGE" :
      return initialState
    default :
      return {...state}
  }
}

const DashboardRx = {
  getRecents: getRecentCommandes,
  reducer : reducer,
}

export default DashboardRx;