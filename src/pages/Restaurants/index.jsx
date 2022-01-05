import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import AccompagnementRx from '../../reducer/accompagnement';
import RestaurantRx from '../../reducer/restaurants';
import DetailsCommande from './details';
import EmplacementPage from './emplacement';
import ListeRestaurant from './liste';
import PlatPage from './plats';

function RestaurantPage(props) {
    return (
    <Switch>
        <Route path="/restaurants" exact strict>
            <ListeRestaurant 
                data={props.data.liste} 
                accompagnements={props.accompagnements.liste}
                getData={props.getListe}
                addNewResto={props.addNewResto}
                updateResto={props.updateResto}
                addNewPlat={props.addPlat}
                getAccompagnements={props.getAccompagnements}
                />
        </Route>
        <Route path="/restaurants/:id/details" exact strict>
            <DetailsCommande 
                accompagnements={props.accompagnements.liste}
                getAccompagnements={props.getAccompagnements}
                addNewPlat={props.addPlat}
                updatePlat={props.updatePlat}
                data={props.data.restaurant} 
                getData={props.getDetails}
                />
        </Route>
        <Route path="/restaurants/:id/emplacements" exact strict>
            <EmplacementPage 
                data={props.data} 
                getData={props.getEmplacements}
                addNewEmpl={props.addEmplmt}
                updtEmpl={()=>{}}
                razPassword={props.razPassword}
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
const addPlat = RestaurantRx.ajouterPlat 
const updatePlat = RestaurantRx.modifierPlat
const addEmplmt = RestaurantRx.ajouterEmpl
const getAccompagnements = AccompagnementRx.liste
const razPassword = RestaurantRx.razEmpl

const mapDispatchToProps = {
    getListe, getEmplacements, getDetails, addNewResto, addPlat, updatePlat, getAccompagnements,updateResto, addEmplmt, razPassword
}
const mapStateToProps = state => {
    return {
        data: state.context.restaurants,
        accompagnements: state.context.accompagnements,
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (RestaurantPage)