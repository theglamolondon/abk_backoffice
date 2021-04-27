import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import PropTypes from 'prop-types';
import OpenMap, { MapPoint } from '../../component/Map/OpenMap';
import MapIcon from '../../component/Map/icons';
import { Marker, Popup } from 'react-leaflet';

function AffectCommande({data, getData}) {
    
  let { reference } = useParams();
  useEffect(() => getData(reference), [])

  console.log("$$$$$$$",data)
  let points =  data.livreurs.map(livreur => {
    if(livreur !== undefined){
      return { position: [livreur.data.lat,livreur.data.long], icon: MapIcon.livreur, title: livreur.data.fullname + ' / ' + livreur.data.telephone}
    } 
    return null
  })

  return (
  <React.Fragment>
    <div className="col-md-12"></div>      
    <div style={{height: '550px', position: 'relative'}}>
      <div>
        <OpenMap data={points} />
      </div>
    </div>
  </React.Fragment>
  )
}

AffectCommande.propTypes = {
  getData : PropTypes.func.isRequired,
  //data : PropTypes.object.isRequired
}

export default connect(undefined, undefined) (AffectCommande)