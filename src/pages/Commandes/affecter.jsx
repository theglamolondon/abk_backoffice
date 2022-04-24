import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import OpenMap from '../../component/Map/OpenMap';
import MapIcon from '../../component/Map/icons';
import ChatManager from '../../component/chat';
import DetailsCommandeItem from './detailsItem'
import { Button, Card, Form } from 'react-bootstrap';
import { StatutCommandeEnum } from './liste';

function AffectCommande({details, getData, getEmplacement, restaurant, affecter, mode, sendChat}) {

  const [livreur,setLivreur] = useState({id: 0, label: ''})
  const [emplacement,setEmplacement] = useState({id: 0, label: ''})

  const affecterSubmit = () =>{
    affecter({
      IdCommande: details.data.id,
      IdLivreur: livreur.id,
      IdEmplacement: emplacement.id,
    }).then(flag => {
        
    })
  }
    
  let { reference } = useParams();
  let points = [];

  useEffect(() => getData(reference), [])

  let commande = null;
  if(details !== undefined){
    commande = details.data
  }

  useEffect(() => { 
    if(details.data.emplacement !== undefined && mode === ModeAffectation.RESTAURANT){ //Seulement si la commande n'est pas encore affectée
      getEmplacement(details.data.emplacement.restaurant.id) 
    }           
  },[commande])

  if(details.data.emplacement !== undefined){
    if(mode === ModeAffectation.LIVREUR){
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
    }
    
    if(mode === ModeAffectation.RESTAURANT){
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
    }else{ //On prend l'emplacement du resto déjà affecté
      points.push( { 
        position: [details.data.emplacement.lattitude, details.data.emplacement.longitude], 
        icon: MapIcon.resto, 
        type: 'R',
        id: details.data.emplacement.id,
        title: details.data.emplacement.restaurant.nom + ' - ' + details.data.emplacement.adresse
      })
    }
  
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
  }
  
  //let clientPosition = details.data.adresse !== undefined ? [details.data.adresse.lattitude, details.data.adresse.longitude] : null  
  
  return (details.data !== undefined && <React.Fragment>
      <div className="col-md-12"></div>      
      <div style={{position: 'relative'}}>
        <div>
          <OpenMap 
            data={points} 
            //location={clientPosition}
            controls={<AffectFormCard livreur={livreur} emplacement={emplacement} affecterHandle={affecterSubmit} mode={mode} />}
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
      <br />
      <DetailsCommandeItem commande={details}/>
      { details.data.statut >= StatutCommandeEnum.AFFECTEE && 
        <ChatManager 
          reference={details.data.reference} 
          handleChat={sendChat} 
          chatMessages={details.data.commentaires}
          /> 
      }
    </React.Fragment>)
}

AffectCommande.propTypes = {
  getData : PropTypes.func.isRequired,
  details : PropTypes.object.isRequired,
  mode    : PropTypes.number.isRequired
}

export const ModeAffectation = {
  LIVREUR    : 1,
  RESTAURANT : 2,
}

function AffectFormCard({emplacement, livreur, affecterHandle, mode}){

  const handleClick = (e) =>{
    affecterHandle();
  }

  return(
    <div style={{position: 'relative', width: '250px', height: '300px', zIndex: '1037', bottom: "-405px" }}>
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Affecter commande</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        <Form>
          { mode === ModeAffectation.RESTAURANT && 
            <Form.Group controlId="formBasicEmplacement">
              <Form.Label>Emplacement</Form.Label>
              <Form.Control type="text" placeholder="Emplacement du resto" readOnly value={emplacement.label} />
            </Form.Group>
          }          
          { mode === ModeAffectation.LIVREUR && 
            <Form.Group controlId="formBasicLivreur">
              <Form.Label>Livreur</Form.Label>
              <Form.Control type="text" placeholder="Nom du livreur" readOnly value={livreur.label}/>
            </Form.Group>
          }
        </Form>
        <Button variant="primary" onClick={handleClick}>Affecter la commande</Button>
      </Card.Body>
    </Card>
  </div>
  )
}

export default connect(undefined, undefined) (AffectCommande)