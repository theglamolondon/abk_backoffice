import { combineReducers } from "redux";
import CommandesRx from "../reducer/commandes";
import UtilisateurRx from "../reducer/user";

let rootReducers = {
    context: combineReducers({
        commandes : CommandesRx.reducer,
    }),
    user: UtilisateurRx.reducer
}

export default rootReducers;
