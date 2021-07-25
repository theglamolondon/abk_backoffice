import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import CommandesRx from '../../reducer/commandes';
import RestaurantRx from '../../reducer/restaurants';
import AffectCommande, { ModeAffectation } from './affecter';
import DetailsCommande from './details';
import CommandeListe from './liste';

function CommandePage (props){
    
  return (
    <Switch>
      <Route path="/commandes/a-affecter" exact strict>
        <CommandeListe 
          commandes={props.data.liste} 
          getData={props.getCommandePayees} 
          title="à affecter à un restaurant"
          />
      </Route>            
      <Route path="/commandes/a-recuperer" exact strict>
        <CommandeListe 
          commandes={props.data.liste} 
          getData={props.getCommandePreparees} 
          title="à recupérer par un livreur"
          />
      </Route>
      <Route path="/commandes/livrees" exact strict>
        <CommandeListe 
          commandes={props.data.liste} 
          getData={props.getCommandeLivrees} 
          title="Livrées"
          />
      </Route>
      <Route path="/commandes/liste" exact strict>
        <CommandeListe 
          commandes={props.data.liste} 
          getData={props.getAllCommandes} 
          title="Toutes les commandes"
          />
      </Route>
      <Route path="/commandes/affecter/:reference" exact strict>
        <AffectCommande 
          restaurant={props.resto} 
          details={props.data.details} 
          getData={props.getCommandeAffectation} 
          getEmplacement={props.getRestoEmplacements}
          affecter={props.affecterCommande}
          mode={ModeAffectation.RESTAURANT}
          />
      </Route>            
      <Route path="/commandes/recuperer/:reference" exact strict>
        <AffectCommande 
          restaurant={props.resto} 
          details={props.data.details} 
          getData={props.getCommandeAffectation} 
          getEmplacement={props.getRestoEmplacements}
          affecter={props.affecterCommande}
          mode={ModeAffectation.LIVREUR}
          />
      </Route>
      <Route path="/commandes/details/:reference" exact strict>
        <DetailsCommande 
          data={props.data.details} 
          getData={props.getCommandeDetails} 
          />
      </Route>
    </Switch>
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

const mapDispatchToProps = {
    getAllCommandes, getCommandePayees, getCommandePreparees, getCommandeLivrees, getCommandeDetails, 
    getCommandeAffectation, getRestoEmplacements, affecterCommande
}

const mapStateToProps = state => {
    return {
        data: state.context.commandes,
        resto: state.context.restaurants,
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CommandePage)