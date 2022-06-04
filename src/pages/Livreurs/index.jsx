import React from 'react'
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import LivreurRx from '../../reducer/livreur';
import LivreursListe from './liste';

function LivreurPage(props){
  return (
    <Routes>
      <Route path="/" exact strict 
        element={
          <LivreursListe 
            getData={props.getListe}
            data={props.data.liste}
            title="Liste des livreurs"
            addLivreur={props.addLivreur}
            handleUpdate={props.majLivreur}
            changeMdp={props.changeMdp}
            refresh={props.getListe}
            disconnect={disconnect}
          />
        }
      />           
    </Routes>
  )
}

const getListe   = LivreurRx.liste
const addLivreur = LivreurRx.ajouter
const changeMdp  = LivreurRx.changeMdp
const majLivreur = LivreurRx.modifier
const disconnect = LivreurRx.logout

const mapDispatchToProps = {
  getListe, addLivreur, changeMdp, majLivreur, disconnect
}

const mapStateToProps = state => {
  return {
    data: state.context.livreurs,
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (LivreurPage)