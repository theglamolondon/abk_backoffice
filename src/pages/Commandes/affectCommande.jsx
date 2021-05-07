import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import PropTypes from 'prop-types';
import OpenMap from '../../component/Map/OpenMap';
import MapIcon from '../../component/Map/icons';

function AffectCommande({details, getData, getEmplacement, restaurant}) {
    
  let { reference } = useParams();
  let points = [];

  useEffect(() => getData(reference), [])

  useEffect(() => { 
    if(details.data.emplacement !== undefined){
      getEmplacement(details.data.emplacement.restaurant.id)
    }           
  },[details.data])

  //Les livreurs
  if(details !== undefined ){
    details.livreurs.map(livreur => {
      if(livreur !== undefined){
        points.push( { 
          position: [livreur.data.lat,livreur.data.long], 
          icon: MapIcon.livreur, 
          title: livreur.data.fullname + ' / ' + livreur.data.telephone
        })
      }
      return null
    })
  }

  //Les emplacements du restaurant
  restaurant.emplacements.map(emplacement => {
    points.push( { 
      position: [emplacement.lattitude, emplacement.longitude], 
      icon: MapIcon.resto, 
      title: emplacement.restaurant.nom + ' - ' + emplacement.adresse
    })
    return null;
  })

  //Le client
  if(details.data.adresse !== undefined ){
    points.push(
      { 
        position: [details.data.adresse.lattitude, details.data.adresse.longitude], 
        icon: MapIcon.client, 
        title: details.data.adresse.client.nom + ' ' + details.data.adresse.client.prenoms + ' / ' + details.data.adresse.client.telephone
      }
    )
  }

  let clientPosition = details.data.adresse !== undefined ? [details.data.adresse.lattitude, details.data.adresse.longitude] : null


  return (
  <React.Fragment>
    <div className="col-md-12"></div>      
    <div style={{position: 'relative'}}>
      <div>
        <OpenMap 
          data={points} 
          location={clientPosition}
          handleMarkerClick={(icon) => {
            console.log("icon popup open", icon)
          }}
          />
      </div>
    </div>
  </React.Fragment>
  )
}

AffectCommande.propTypes = {
  getData : PropTypes.func.isRequired,
  details : PropTypes.object.isRequired
}

export default connect(undefined, undefined) (AffectCommande)