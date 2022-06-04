import React from 'react'
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import AccompagnementListe from './liste';
import AccompagnementRx from '../../reducer/accompagnement'

function AccompagnementPage(props){
  return (
    <Routes>
      <Route path="/" exact strict 
        element={
          <AccompagnementListe 
            data={props.data} 
            getData={props.getListe} 
            addAccmpnt={props.addAccompagnement}
            majAccmpnt={props.majAccompagnement}
            title="Liste des utilisateurs"
          />
        }
      />           
    </Routes>)
}

const getListe = AccompagnementRx.liste
const addAccompagnement  = () => {}
const majAccompagnement  = () => {}

const mapDispatchToProps = {
  getListe, addAccompagnement, majAccompagnement
}

const mapStateToProps = store => {
  return {
    data: store.context.accompagnements,
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (AccompagnementPage);