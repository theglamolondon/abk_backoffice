import { React } from "react";
import { Switch, Route } from "react-router-dom";
import CommandePage from "../pages/Commandes";
import DashboardPage from "../pages/Dashboad";
import RestaurantPage from "../pages/Restaurants";
import UtilisateurPage from "../pages/Utilisateurs";
import LivreurPage from "../pages/Livreurs";

export default function AppRouter(props) {
    return(
        <Switch>
            <Route path="/" exact>
                <DashboardPage/>
            </Route>
            <Route path="/commandes" >
                <CommandePage/>
            </Route>
            <Route path="/restaurants" >
                <RestaurantPage/>
            </Route>
            <Route path="/utilisateurs" >
                <UtilisateurPage/>
            </Route>            
            <Route path="/livreurs" >
                <LivreurPage/>
            </Route>
        </Switch>
    )
}