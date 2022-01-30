import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import SearchPage from './search'

const ClientPage = (props) => {

  return (
  <Switch>
    <Route path="/client/recherche" exact strict>
      <SearchPage searchData={props.client.recherche} />
    </Route>
    <Route path="/client/:id/details" exact strict>
      <h1>Details client</h1>
    </Route>
  </Switch>
  )
}

const mapDispatchToProps = {}
const mapStateToProps = state => {
  return {
    client: state.context.clients,
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (ClientPage)