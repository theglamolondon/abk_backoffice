import React from 'react'
import { connect } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import VilleRx from '../../reducer/ville'
import VilleListe from './liste'

const VillePage = (props) => {
  return (
    <Routes>
      <Route path="/" exact strict 
        element={<VilleListe 
          data={props.data} 
          getData={props.getListe} 
          ajouter={props.addVille}
          modifier={props.majVille}
          />} 
        />           
    </Routes>)
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