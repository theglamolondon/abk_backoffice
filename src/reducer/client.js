import axios from "../enabler/Axios"

const CLIENT_SEARCH  = "CLIENT_SEARCH"
const CLIENT_DETAILS = "CLIENT_DETAILS"

export function searchClientByTermes(data){
  return async dispatch => {
    dispatch({
      type: CLIENT_SEARCH,
      payload: {
        termes: data,
        clients: []
      }
    })

    /*try {
      const response = await axios.get(`/backoffice/client/recherche?query=${data}`)
      dispatch({
        type: CLIENT_SEARCH,
        payload: {
          termes: data,
          clients: response.data
        }
      })
    } catch (error) {
      console.log(error)
    }*/
  }
}

const initialState = {recherche: {termes: '', clients: []}, details: null}
export const reducer = (oldState = initialState, action) => {
  switch (action.type) {
    case CLIENT_SEARCH :
      return {
        ...oldState,
        recherche: action.payload
      }
    case "@@router/LOCATION_CHANGE" :
      return initialState
    default :
      return {...oldState}
  }
}

const ClientRx = {
  reducer : reducer,
  recherche: searchClientByTermes,
}

export default ClientRx