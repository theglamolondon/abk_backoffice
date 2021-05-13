import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import PropTypes from 'prop-types';

function DetailsCommande({data, getData}) {
    
  let { reference } = useParams();
  useEffect(() => getData(reference), [])

  return (
  <React.Fragment>
    <div className="col-md-12">
      <h2>Détails commande {reference}</h2>    
      <p>{JSON.stringify(data)}</p>
    </div>
  </React.Fragment>
  )
}

DetailsCommande.propTypes = {
    getData : PropTypes.func.isRequired,
    //data : PropTypes.object.isRequired
  }

export default connect(undefined, undefined) (DetailsCommande)