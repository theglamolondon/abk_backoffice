import React from 'react'
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import LivreursListe from './liste';

function LivreurPage(props){
    return (
        <Switch>
          <Route path="/livreurs" exact strict>
            <LivreursListe />
          </Route>            
        </Switch>)
}

const mapDispatchToProps = {
   
}

const mapStateToProps = state => {
    return {
        data: state.context.dashboard,
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (LivreurPage)