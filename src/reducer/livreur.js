import axios from "../enabler/Axios"

const LIVREUR_POSITION = "LIVREUR_POSITION"

export function handleLivreurPosition(data){
    return dispatch => {
        dispatch({
            type: LIVREUR_POSITION,
            payload: data
        })
    }
}

const initialState = {}
export const reducer = (oldState = initialState, action) => {
    
}

const LivreurRx = {
    reducer : reducer,
    handleLivreurPosition: handleLivreurPosition,
}

export default LivreurRx