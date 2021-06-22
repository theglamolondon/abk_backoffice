import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import AccompagnementRx from '../../reducer/accompagnement';
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
                accompagnements={props.accompagnements.liste}
                getData={props.getListe}
                addNewResto={props.addNewResto}
                updateResto={props.updateResto}
                addNewPlat={props.addNewPlat}
                getAccompagnements={props.getAccompagnements}
                />
        </Route>
        <Route path="/restaurants/:id/details" exact strict>
            <DetailsCommande 
                accompagnements={props.accompagnements.liste}
                getAccompagnements={props.getAccompagnements}
                addNewPlat={props.addNewPlat}
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
const updateResto = RestaurantRx.modifier
const addNewPlat = RestaurantRx.ajouterPlat
const getAccompagnements = AccompagnementRx.liste

const mapDispatchToProps = {
    getListe, getEmplacements, getDetails, addNewResto, addNewPlat, getAccompagnements,updateResto
}
const mapStateToProps = state => {
    return {
        data: state.context.restaurants,
        accompagnements: state.context.accompagnements,
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Restaurants)