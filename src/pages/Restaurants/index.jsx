import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import RestaurantRx from '../../reducer/restaurants';
import DetailsCommande from './details';
import EmplacementPage from './emplacement';
import ListeRestaurant from './liste';
import PlatPage from './plats';

function Restaurants(props) {
    return (
    <Switch>
        <Route path="/restaurants" exact strict>
            <ListeRestaurant 
                data={props.data.liste} 
                getData={props.getListe}
                addNew={props.addNewResto}
                />
        </Route>
        <Route path="/restaurants/:id/details" exact strict>
            <DetailsCommande 
                data={props.data.details} 
                getData={props.getDetails}
                />
        </Route>
        <Route path="/restaurants/:id/emplacements" exact strict>
            <EmplacementPage 
                data={props.data.emplacements} 
                getData={props.getEmplacements}
                />
        </Route>
        <Route path="/restaurants/:id/plats" exact strict>
            <PlatPage 
                data={props.liste} 
                getData={true}
                />
        </Route>
    </Switch>
    )
}

const getListe = RestaurantRx.liste
const getEmplacements = RestaurantRx.emplacement
const getDetails = RestaurantRx.details
const addNewResto = RestaurantRx.ajouter

const mapDispatchToProps = {
    getListe, getEmplacements, getDetails, addNewResto
}
const mapStateToProps = state => {
    return {
        data: state.context.restaurants,
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Restaurants)