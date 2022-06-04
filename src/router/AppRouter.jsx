import { React } from "react";
import { Route, Routes } from "react-router-dom";
import CommandePage from "../pages/Commandes";
import DashboardPage from "../pages/Dashboad";
import RestaurantPage from "../pages/Restaurants";
import UtilisateurPage from "../pages/Utilisateurs";
import LivreurPage from "../pages/Livreurs";
import AccompagnementPage from "../pages/Accompagnements";
import ClientPage from "../pages/Clients";
import Rapports from "../pages/Rapports";
import VillePage from "../pages/Villes";

export default function AppRouter(props) {
  return(
    <Routes>
      <Route path="/" exact element={<DashboardPage/>}  />
      <Route path="/commandes/*"  element={<CommandePage/>} />
      <Route path="/restaurants/*" element={<RestaurantPage/>} />
      <Route path="/utilisateurs/*" element={<UtilisateurPage/>} />           
      <Route path="/livreurs/*" element={<LivreurPage/>} />       
      <Route path="/parametres/accompagnements/*" element={<AccompagnementPage/>} />    
      <Route path="/parametres/villes/*" element={<VillePage/>} />   
      <Route path="/client/*" element={<ClientPage/>} /> 
      <Route path="/rapports/*" element={<Rapports/>} />
    </Routes>
  )
}