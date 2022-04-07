import axios from "../enabler/Axios"

const DASHBOARD_COMMANDES = "DASHBOARD_COMMANDES"
const DASHBOARD_STATISTICS = "DASHBOARD_STATISTICS"

export function getRecentCommandes(data){
  return dispatch => {
    return axios.get(`/backoffice/dashboard/commandes/recentes?page=${data.page}`)
      .then((response) => {
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

export function getStatistiques(page){
  return dispatch => {
    return axios.get(`backoffice/dashboard/commandes/statistics`,)
      .then((response) => {
        dispatch({
          type: DASHBOARD_STATISTICS,
          payload: response.data
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

const initialState = {commandes: {data: [], nombrePage: 0}, statistics:{graphe:[]}, historique:{}};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DASHBOARD_COMMANDES :
      return {
        ...state,
        commandes: action.payload
      }
    case DASHBOARD_STATISTICS :
        return {
          ...state,
          statistics: {graphe: action.payload}
        }
    case "@@router/LOCATION_CHANGE" :
      return initialState
    default :
      return {...state}
  }
}

const DashboardRx = {
  getRecents: getRecentCommandes,
  getStatistics: getStatistiques,
  reducer : reducer,
}

export default DashboardRx;