import { React } from "react";
import { Switch, Route } from "react-router-dom";
import Commandes from "../pages/Commandes";
import Dashboard from "../pages/Dashboad";
import Restaurants from "../pages/Restaurants";

export default function AppRouter(props) {
    return(
        <Switch>
            <Route path="/" exact>
                <Dashboard/>
            </Route>
            <Route path="/commandes" >
                <Commandes/>
            </Route>
            <Route path="/restaurants" >
                <Restaurants/>
            </Route>
        </Switch>
    )
}