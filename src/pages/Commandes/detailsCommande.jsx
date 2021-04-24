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
        <h2>{ reference }</h2>        
        <div className="col-xl-12 col-lg-12" style={{maxHeight: '350px'}}>
            <OpenMap />
        </div>
    </React.Fragment>
    )
}

DetailsCommande.propTypes = {
    getData : PropTypes.func.isRequired,
    //data : PropTypes.object.isRequired
  }

export default connect(undefined, undefined) (DetailsCommande)