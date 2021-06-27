import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import PropTypes from 'prop-types';
import DetailsCommandeItem from './detailsItem'

function DetailsCommande({data, getData}) {
    
  let { reference } = useParams();
  useEffect(() => getData(reference), [])

  return (
  <React.Fragment>
    <DetailsCommandeItem commande={data}/>
  </React.Fragment>
  )
}

DetailsCommande.propTypes = {
    getData : PropTypes.func.isRequired,
    //data : PropTypes.object.isRequired
  }

export default connect(undefined, undefined) (DetailsCommande)