import React from 'react'
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import AccompagnementListe from './liste';
import AccompagnementRx from '../../reducer/accompagnement'

function AccompagnementPage(props){
  return (
    <Switch>
      <Route path="/accompagnements" exact strict>
        <AccompagnementListe 
          data={props.data} 
          getData={props.getListe} 
          addAccmpnt={props.addAccompagnement}
          majAccmpnt={props.majAccompagnement}
          title="Liste des utilisateurs"
          />
      </Route>            
    </Switch>)
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