import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import VilleRx from '../../reducer/ville'
import VilleListe from './liste'

const VillePage = (props) => {
  return (
    <Switch>
      <Route path="/parametres/villes" exact strict>
        <VilleListe 
          data={props.data} 
          getData={props.getListe} 
          ajouter={props.addVille}
          modifier={props.majVille}
          />
      </Route>            
    </Switch>)
}

const getListe = VilleRx.liste
const addVille = VilleRx.ajouter
const majVille = VilleRx.modifier

const mapDispatchToProps = {
  getListe, addVille, majVille
}

const mapStateToProps = store => {
  return {
    data: store.context.villes,
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (VillePage);