import { combineReducers } from "redux";
import CommandesRx from "../reducer/commandes";
import RestaurantRx from "../reducer/restaurants";
import UtilisateurRx from "../reducer/user";

let rootReducers = {
    context: combineReducers({
        commandes : CommandesRx.reducer,
        restaurants : RestaurantRx.reducer,
    }),
    user: UtilisateurRx.reducer
}

export default rootReducers;
