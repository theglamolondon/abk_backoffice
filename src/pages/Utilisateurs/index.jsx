import React from 'react'
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import UtilisateurRx from '../../reducer/utilisateurs';
import UtilisateursListe from './liste';

function UtilisateurPage(props){

  return (
    <Switch>
      <Route path="/utilisateurs" exact strict>
        <UtilisateursListe 
          data={props.data.liste} 
          getData={props.getListe} 
          addUser={props.addUser}
          majUser={props.majUser}
          connected={props.user}
          title="Liste des utilisateurs"
          />
      </Route>            
    </Switch>)
}

const getListe = UtilisateurRx.liste
const addUser  = UtilisateurRx.ajouter
const majUser  = UtilisateurRx.modifier

const mapDispatchToProps = {
  getListe, addUser, majUser
}

const mapStateToProps = store => {
  return {
    data: store.context.utilisateurs,
    user: store.user,
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (UtilisateurPage)