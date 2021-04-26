import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import PropTypes from 'prop-types';
import OpenMap from '../../component/OpenMap';

function DetailsCommande({data, getData}) {
    
  let { reference } = useParams();
  useEffect(() => getData(reference), [])

  return (
  <React.Fragment>
    <div className="col-md-12">
          
    </div>      
    <div style={{height: '550px', position: 'relative'}}>
      <div>
        <OpenMap />
      </div>
    </div>
  </React.Fragment>
  )
}

DetailsCommande.propTypes = {
    getData : PropTypes.func.isRequired,
    //data : PropTypes.object.isRequired
  }

export default connect(undefined, undefined) (DetailsCommande)