import React from 'react'
import { connect } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import DetailsPage from './details'
import SearchPage from './search'

const ClientPage = (props) => {

  return (
  <Routes>
    <Route path="/recherche" exact strict  element={<SearchPage searchData={props.client.recherche} />} />
    <Route path="/:id/details" exact strict element={<DetailsPage getData={() => {}}/>} />
  </Routes>
  )
}

const mapDispatchToProps = {}
const mapStateToProps = state => {
  return {
    client: state.context.clients,
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (ClientPage)