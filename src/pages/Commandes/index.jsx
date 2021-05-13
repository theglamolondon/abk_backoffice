import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import CommandesRx from '../../reducer/commandes';
import RestaurantRx from '../../reducer/restaurants';
import AffectCommande from './affecter';
import DetailsCommande from './details';
import CommandeListe from './liste';

function CommandePage (props){
    
    return (
        <Switch>
            <Route path="/commandes/attentes" exact strict>
                <CommandeListe 
                    data={props.data.liste} 
                    getData={props.getCommandePayees} 
                    title="En attente d'affectation"
                    />
            </Route>
            <Route path="/commandes/affectees" exact strict>
                <CommandeListe 
                    data={props.data.liste} 
                    getData={props.getCommandeLivrees} 
                    title="Livrées"
                    />
            </Route>
            <Route path="/commandes/affecter/:reference" exact strict>
                <AffectCommande 
                    restaurant={props.resto} 
                    details={props.data.details} 
                    getData={props.getCommandeAffectation} 
                    getEmplacement={props.getRestoEmplacements}
                    affecter={props.affecterCommande}
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
const getCommandeLivrees = CommandesRx.commandesLivrees
const getCommandeDetails = CommandesRx.commandeDetails 
const getCommandeAffectation = CommandesRx.getCommandeAffectation 
const getRestoEmplacements = RestaurantRx.emplacement
const affecterCommande = CommandesRx.affecterCommande

const mapDispatchToProps = {
    getCommandePayees, getCommandeLivrees, getCommandeDetails, getCommandeAffectation, getRestoEmplacements, affecterCommande
}

const mapStateToProps = state => {
    return {
        data: state.context.commandes,
        resto: state.context.restaurants,
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CommandePage)