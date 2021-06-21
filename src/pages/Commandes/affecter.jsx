import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect, useParams } from 'react-router';
import PropTypes from 'prop-types';
import OpenMap from '../../component/Map/OpenMap';
import MapIcon from '../../component/Map/icons';
import { Button, Card, Form } from 'react-bootstrap';

function AffectCommande({details, getData, getEmplacement, restaurant, affecter}) {

  const [livreur,setLivreur] = useState({id: 0, label: ''})
  const [emplacement,setEmplacement] = useState({id: 0, label: ''})
  const [afterSubmit,setAfterSubmit] = useState(false)

  const affecterSubmit = () =>{
    affecter({
      IdCommande: details.data.id,
      IdLivreur: livreur.id,
      IdEmplacement: emplacement.id,
    }).then(flag => {
        setAfterSubmit(flag)
    })
  }
    
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
          type: 'L',
          id: livreur.data.id,
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
      type: 'R',
      id: emplacement.id,
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
        type: 'C',
        id: details.data.adresse.id,
        title: details.data.adresse.client.nom + ' ' + details.data.adresse.client.prenoms + ' / ' + details.data.adresse.client.telephone
      }
    )
  }

  let clientPosition = details.data.adresse !== undefined ? [details.data.adresse.lattitude, details.data.adresse.longitude] : null


  return ( afterSubmit ? <Redirect to="/commandes/attentes" /> : 
  <React.Fragment>
    <div className="col-md-12"></div>      
    <div style={{position: 'relative'}}>
      <div>
        <OpenMap 
          data={points} 
          //location={clientPosition}
          controls={<AffectFormCard livreur={livreur} emplacement={emplacement} affecterHandle={affecterSubmit} />}
          handleMarkerClick={(icon) => {
            let data = {id: icon.id, label: icon.title}
            if(icon.type === 'L'){
              setLivreur(data)
            }
            if(icon.type === 'R'){
              setEmplacement(data)
            }
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

function AffectFormCard({emplacement,livreur, affecterHandle}){

  const handleClick = (e) =>{
    affecterHandle();
  }

  return(
    <div style={{position: 'relative', width: '250px', height: '300px', zIndex: '9999999', bottom: "-317px" }}>
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Affecter commande</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        <Form>
          <Form.Group controlId="formBasicEmplacement">
            <Form.Label>Emplacement</Form.Label>
            <Form.Control type="text" placeholder="Emplacement du resto" readOnly value={emplacement.label} />
          </Form.Group>
          <Form.Group controlId="formBasicLivreur">
            <Form.Label>Livreur</Form.Label>
            <Form.Control type="text" placeholder="Nom du livreur" readOnly value={livreur.label}/>
          </Form.Group>
        </Form>
        <Button variant="primary" onClick={handleClick}>Affecter la commande</Button>
      </Card.Body>
    </Card>
  </div>
  )
}

export default connect(undefined, undefined) (AffectCommande)