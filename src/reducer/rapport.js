import axios from "../enabler/Axios"

const RAPPORT_DATA = "RAPPORT_DATA"

export function getReportData(data){
  return dispatch => {
    return axios.get(`/backoffice/rapport/restaurant?page=${data.page}&dateDebut=${data.dateDebut}&dateFin=${data.dateFin}`)
      .then((response) => {
        dispatch({
          type: RAPPORT_DATA,
          payload: response.data
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

const initialState = {data: [], nombrePage: 0};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RAPPORT_DATA :
      return {
        ...state,
        data: action.payload
      }
    case "@@router/LOCATION_CHANGE" :
      return initialState
    default :
      return {...state}
  }
}

const RapportRx = {
  getReport: getReportData,
  reducer : reducer,
}

export default RapportRx;