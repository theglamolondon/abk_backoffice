import React from 'react';
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import AccompagnementRx from '../../reducer/accompagnement';
import RestaurantRx from '../../reducer/restaurants';
import VilleRx from '../../reducer/ville';
import CommandeRestoPage from './commandes';
import DetailsRestaurant from './details';
import EmplacementPage from './emplacement';
import ListeRestaurant from './liste';
import PlatPage from './plats';

function RestaurantPage(props) {
  return (
  <Routes>
    <Route path="/" exact strict 
      element={
        <ListeRestaurant 
          data={props.data.liste} 
          accompagnements={props.accompagnements.liste}
          getData={props.getListe}
          addNewResto={props.addNewResto}
          updateResto={props.updateResto}
          addNewPlat={props.addPlat}
          getAccompagnements={props.getSupplements}
          addNewBoisson={props.addBoisson}
          addNewSupplement={props.addSuppl}
        />
      }
    />
    <Route path="/:id/details" exact strict 
      element={
        <DetailsRestaurant 
          accompagnements={props.accompagnements.liste}
          getAccompagnements={props.getSupplements}
          addNewPlat={props.addPlat}
          updatePlat={props.updatePlat}
          data={props.data.details} 
          getData={props.getDetails}
          addNewBoisson={props.addBoisson}
          updateBoisson={props.updateBoisson}
          addNewSupplement={props.addSuppl}
          updateSupplement={props.updateSuppl}
        />
      }
    />
    <Route path="/:id/emplacements" exact strict 
      element={
        <EmplacementPage 
          data={props.data} 
          getData={props.getEmplacements}
          addNewEmpl={props.addEmplmt}
          updtEmpl={()=>{}}
          villes={props.villes}
          getVilles={props.getVilles}
          razPassword={props.razPassword}
        />
      }
    />
    <Route path="/:id/plats" exact strict 
      element={
        <PlatPage 
          data={props.liste} 
          getData={true}
        />
      }
    />
    <Route path="/:id/commandes" exact strict 
      element={
        <CommandeRestoPage 
          data={props.data.commandes} 
          getData={props.getCommandeByResto}
        />
      }
    />
  </Routes>
  )
}

const getListe = RestaurantRx.liste
const getEmplacements = RestaurantRx.emplacement
const getDetails = RestaurantRx.details
const addNewResto = RestaurantRx.ajouter
const updateResto = RestaurantRx.modifier
const addPlat = RestaurantRx.ajouterPlat 
const updatePlat = RestaurantRx.modifierPlat
const addEmplmt = RestaurantRx.ajouterEmpl
const addSuppl = RestaurantRx.ajouterSupplement
const updateSuppl = RestaurantRx.modifierSupplement
const addBoisson = RestaurantRx.ajouterBoisson
const updateBoisson = RestaurantRx.modifierBoisson
const getSupplements = AccompagnementRx.liste
const razPassword = RestaurantRx.razEmpl
const getCommandeByResto = RestaurantRx.commandes
const getVilles = VilleRx.liste

const mapDispatchToProps = {
    getListe, getEmplacements, getDetails, addNewResto, addPlat, updatePlat, getSupplements,updateResto, 
    addEmplmt, razPassword, getCommandeByResto, getVilles, addSuppl, updateSuppl, addBoisson, updateBoisson
}
const mapStateToProps = state => {
    return {
        data: state.context.restaurants,
        villes: state.context.villes.liste,
        accompagnements: state.context.accompagnements,
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (RestaurantPage)