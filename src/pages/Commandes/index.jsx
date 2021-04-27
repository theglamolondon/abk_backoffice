import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import CommandesRx from '../../reducer/commandes';
import AffectCommande from './affectCommande';
import DetailsCommande from './detailsCommande';
import CommandeListe from './listeCommande';

function CommandePage (props){
    
    return (
        <Switch>
            <Route path="/commandes/attentes" exact strict>
                <CommandeListe data={props.data.liste} getData={props.getCommandePayees} title="En attente d'affectation"/>
            </Route>
            <Route path="/commandes/affectees" exact strict>
                <CommandeListe data={props.data.liste} getData={props.getCommandeLivrees} title="Livrées"/>
            </Route>
            <Route path="/commandes/affecter/:reference" exact strict>
                <AffectCommande data={props.data.details} getData={props.getCommandeAffectation} />
            </Route>
            <Route path="/commandes/details/:reference" exact strict>
                <DetailsCommande data={props.data.details} getData={props.getCommandeDetails} />
            </Route>
        </Switch>
    )
}

const getCommandePayees = CommandesRx.commandesPayees
const getCommandeLivrees = CommandesRx.commandesLivrees
const getCommandeDetails = CommandesRx.commandeDetails 
const getCommandeAffectation = CommandesRx.getCommandeAffectation 

const mapDispatchToProps = {
    getCommandePayees, getCommandeLivrees, getCommandeDetails, getCommandeAffectation
}
const mapStateToProps = state => {
    return {
        data: state.context.commandes,
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CommandePage)