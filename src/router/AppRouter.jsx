import { React } from "react";
import { Route, Switch } from "react-router-dom";
import CommandePage from "../pages/Commandes";
import DashboardPage from "../pages/Dashboad";
import RestaurantPage from "../pages/Restaurants";
import UtilisateurPage from "../pages/Utilisateurs";
import LivreurPage from "../pages/Livreurs";
import AccompagnementPage from "../pages/Accompagnements";
import ClientPage from "../pages/Clients";

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
      <Route path="/accompagnements" >
        <AccompagnementPage/>
      </Route>     
      <Route path="/client" >
        <ClientPage/>
      </Route>
    </Switch>
  )
}