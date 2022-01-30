import React from 'react'
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
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
          addLivreur={props.addLivreur}
          handleUpdate={props.majLivreur}
          changeMdp={props.changeMdp}
          refresh={props.getListe}
          />
      </Route>            
    </Switch>
  )
}

const getListe   = LivreurRx.liste
const addLivreur = LivreurRx.ajouter
const changeMdp  = LivreurRx.changeMdp
const majLivreur = LivreurRx.modifier

const mapDispatchToProps = {
  getListe, addLivreur, changeMdp, majLivreur
}

const mapStateToProps = state => {
  return {
    data: state.context.livreurs,
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (LivreurPage)