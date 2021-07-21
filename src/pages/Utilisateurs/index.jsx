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
          title="Liste des utilisateurs"
          />
      </Route>            
    </Switch>)
}

const getListe = UtilisateurRx.liste
const addUser  = UtilisateurRx.ajouter

const mapDispatchToProps = {
    getListe, addUser
}

const mapStateToProps = state => {
    return {
        data: state.context.utilisateurs
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (UtilisateurPage)