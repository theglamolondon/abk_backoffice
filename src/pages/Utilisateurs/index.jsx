import React from 'react'
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import UtilisateurRx from '../../reducer/utilisateurs';
import UtilisateursListe from './liste';

function UtilisateurPage(props){

  return (
    <Routes>
      <Route path="/" exact strict 
        element={
          <UtilisateursListe 
            data={props.data.liste} 
            getData={props.getListe} 
            addUser={props.addUser}
            majUser={props.majUser}
            connected={props.user}
            title="Liste des utilisateurs"
          />
        }
      />         
    </Routes>)
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