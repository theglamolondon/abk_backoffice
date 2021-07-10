import { combineReducers } from "redux";
import AccompagnementRx from "../reducer/accompagnement";
import AuthRx from "../reducer/auth";
import CommandesRx from "../reducer/commandes";
import DashboardRx from "../reducer/dashboard";
import RestaurantRx from "../reducer/restaurants";
import UtilisateurRx from "../reducer/utilisateurs";

let rootReducers = {
    context: combineReducers({
        dashboard : DashboardRx.reducer,
        commandes : CommandesRx.reducer,
        restaurants : RestaurantRx.reducer,
        accompagnements : AccompagnementRx.reducer,
        utilisateurs : UtilisateurRx.reducer,
    }),
    user: AuthRx.reducer
}

export default rootReducers;
