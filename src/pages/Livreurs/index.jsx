import React from 'react'
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import LivreurRx from '../../reducer/livreur';
import LivreursListe from './liste';

function LivreurPage(props){
  return (
    <Switch>
      <Route path="/livreurs" exact strict>
        <LivreursListe 
          getData={props.getListe}
          data={props.data.liste}
          title="Liste des livreurs"
          addLivreur={addLivreur}
          />
      </Route>            
    </Switch>
  )
}

const getListe = LivreurRx.liste
const addLivreur = LivreurRx.ajouter

const mapDispatchToProps = {
  getListe, addLivreur
}

const mapStateToProps = state => {
  return {
    data: state.context.livreurs,
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (LivreurPage)