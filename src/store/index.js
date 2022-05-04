import { combineReducers } from "redux";
import AccompagnementRx from "../reducer/accompagnement";
import AuthRx from "../reducer/auth";
import ClientRx from "../reducer/client";
import CommandesRx from "../reducer/commandes";
import DashboardRx from "../reducer/dashboard";
import LivreurRx from "../reducer/livreur";
import RapportRx from "../reducer/rapport";
import RestaurantRx from "../reducer/restaurants";
import UtilisateurRx from "../reducer/utilisateurs";
import VilleRx from "../reducer/ville";

let rootReducers = {
  context: combineReducers({
    dashboard : DashboardRx.reducer,
    commandes : CommandesRx.reducer,
    restaurants : RestaurantRx.reducer,
    accompagnements : AccompagnementRx.reducer,
    utilisateurs : UtilisateurRx.reducer,
    livreurs : LivreurRx.reducer,
    clients : ClientRx.reducer,
    rapport : RapportRx.reducer,
    villes : VilleRx.reducer,
  }),
  user : AuthRx.reducer
}

export default rootReducers;