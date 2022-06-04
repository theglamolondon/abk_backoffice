import React from 'react';
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import CommandesRx from '../../reducer/commandes';
import RestaurantRx from '../../reducer/restaurants';
import AffectCommande, { ModeAffectation } from './affecter';
import DetailsCommande from './details';
import CommandeListe from './liste';

function CommandePage (props){
    
  return (
    <Routes>
      <Route 
        path="/a-affecter" 
        exact 
        strict 
        element={
          <CommandeListe 
            commandes={props.data.liste} 
            getData={props.getCommandePayees} 
            title="à affecter à un restaurant"
          />
        }/>           
      <Route path="/a-recuperer" exact strict 
        element={
          <CommandeListe 
            commandes={props.data.liste} 
            getData={props.getCommandePreparees} 
            title="à recupérer par un livreur"
          />
        }
      />
      <Route path="/livrees" exact strict 
        element={
          <CommandeListe 
            commandes={props.data.liste} 
            getData={props.getCommandeLivrees} 
            title="Livrées"
          />
        }
      />
      <Route path="/liste" exact strict 
        element={
          <CommandeListe 
            commandes={props.data.liste} 
            getData={props.getAllCommandes} 
            title="Toutes les commandes"
          />
        }
      />
      <Route path="/affecter/:reference" exact strict
        element={
          <AffectCommande 
            restaurant={props.resto} 
            details={props.data.details} 
            getData={props.getCommandeAffectation} 
            getEmplacement={props.getRestoEmplacements}
            affecter={props.affecterCommande}
            mode={ModeAffectation.RESTAURANT}
            sendChat={props.sendChat}
          />
        }
      />           
      <Route path="/recuperer/:reference" exact strict 
        element={
          <AffectCommande 
            restaurant={props.resto} 
            details={props.data.details} 
            getData={props.getCommandeAffectation} 
            getEmplacement={props.getRestoEmplacements}
            affecter={props.affecterCommande}
            mode={ModeAffectation.LIVREUR}
            sendChat={props.sendChat}
          />
        }
      />
      <Route path="/details/:reference" exact strict 
        element={
          <DetailsCommande 
          data={props.data.details} 
          getData={props.getCommandeDetails} 
          sendChat={props.sendChat}
          />
        }
      />
    </Routes>
  )
}

const getCommandePayees = CommandesRx.commandesPayees
const getAllCommandes = CommandesRx.commandesAll
const getCommandePreparees = CommandesRx.commandesPreparees
const getCommandeLivrees = CommandesRx.commandesLivrees
const getCommandeDetails = CommandesRx.commandeDetails 
const getCommandeAffectation = CommandesRx.getCommandeAffectation 
const getRestoEmplacements = RestaurantRx.emplacement
const affecterCommande = CommandesRx.affecterCommande
const sendChat = CommandesRx.commandeChat

const mapDispatchToProps = {
    getAllCommandes, getCommandePayees, getCommandePreparees, getCommandeLivrees, getCommandeDetails, 
    getCommandeAffectation, getRestoEmplacements, affecterCommande, sendChat
}

const mapStateToProps = state => {
    return {
        data: state.context.commandes,
        resto: state.context.restaurants,
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CommandePage)