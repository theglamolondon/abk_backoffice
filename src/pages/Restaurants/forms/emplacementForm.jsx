import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import L from "leaflet";
import OpenMap from '../../../component/Map/OpenMap';
import { ErrorMessage, Field, Form, Formik, useFormikContext } from 'formik';
import MapIcon from '../../../component/Map/icons';

import "leaflet-control-geocoder/dist/Control.Geocoder.js";

function EmplacementForm({show, handleClose, title, resto, submitAction, refresh, emplacement}){

  return (
    <React.Fragment>
      <Modal animation={false}
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        dialogClassName="modal-90w"
      >
        <Modal.Header closeButton>
          <Modal.Title>{title} - {resto.nom}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormViewEmplacement 
            handleClose={handleClose} 
            submitHandler={submitAction} 
            resto={resto} 
            refresh={refresh}
            data={emplacement}
            />
        </Modal.Body>
      </Modal>
    </React.Fragment>
  )
}

export const EmplacementFormMode = {
  EDIT_INFO : 0,
  EDIT_PASSWORD: 1, 
}

function FormViewEmplacement({resto, handleClose, submitHandler, refresh, mode, data}){

  const latlng = data.id !== 0 ? {latlng:{lat: data.lattitude,lng: data.longitude }} : null
  const [position, setPosition] = useState(latlng)

  let marker = []

  const geocoder = L.Control.Geocoder.nominatim();
  if(position !== null){
    marker = [{ 
      position: [position.latlng.lat, position.latlng.lng], 
      icon: MapIcon.resto, 
      type: 'R',
      id: 0,
      title: resto.nom
    }]
  }

  return(<React.Fragment>
    <Formik
      initialValues={data}
      validate = { values => {
        const errors = {}
        if(values.adresse === ""){
          errors.adresse = "L'adresse de l'emplacement est requis"
        }
        if(values.telephone1 === ""){
          errors.telephone1 = "Le numéro de téléphone est requis"
        }
        if(values.username === ""){
          errors.username = "Le nom d'utilisateur est requis"
        }
        if(values.nomEmplacement === ""){
          errors.nomEmplacement = "Le nom de l'emplacement est requis"
        }
        return errors
      }}
      onSubmit={(values, { setSubmitting }) => {
          let data = {...values, longitude: position.latlng.lng, lattitude: position.latlng.lat, idRestaurant: resto.id}
          submitHandler(data).then( () => refresh(resto.id))  
          handleClose()
      }}
    >        
      <Form className="form-horizontal row form-simple" noValidate>
        <div className="col-md-12">
          <fieldset className="form-group">
            <label>Adresse</label>   
            <Field component="textarea" className="form-control" name="adresse" placeholder="Adresse" />
            <ErrorMessage name="adresse" component="div" className="text-danger"/>
          </fieldset>
        </div>
        <div className="col-md-3">
          <fieldset className="form-group">
            <label>Nom de l'emplacement</label>   
            <Field type="text" className="form-control" name="nomEmplacement" placeholder="Nom emplacement" />
            <ErrorMessage name="nomEmplacement" component="div" className="text-danger"/>
          </fieldset>
        </div>
        <div className="col-md-3">
          <fieldset className="form-group">
            <label>Téléphone 1</label>   
            <Field type="tel" className="form-control" name="telephone1" placeholder="N° de téléphone 1" />
            <ErrorMessage name="telephone1" component="div" className="text-danger"/>
          </fieldset>
        </div>
        <div className="col-md-3">
          <fieldset className="form-group">
            <label>Téléphone 2</label>   
            <Field type="tel" className="form-control" name="telephone2" placeholder="N° de téléphone 2" />
            <ErrorMessage name="telephone2" component="div" className="text-danger" />
          </fieldset>
        </div>            
        <div className="col-md-3">
          <fieldset className="form-group">
            <label>Nom utilisateur</label>   
            <Field type="text" className="form-control" name="username" placeholder="Login" />
            <ErrorMessage name="username" component="div" className="text-danger" />
          </fieldset>
        </div>   
        <div className="col-md-12"> 
          <EmplacementMap 
              marker={marker} 
              geocoder={geocoder}
              positionHandler={setPosition}
            />
        </div>
        
        <div className="col-md-3 mt-2">
          <Button variant="primary" type="submit">Enregistrer</Button>
        </div>            
      </Form>
    </Formik>
  </React.Fragment>)
}

function EmplacementMap({marker, geocoder, positionHandler}){
  
  const {setFieldValue} = useFormikContext()

  return (
    <div style={{position: 'relative'}}>
      <div className="abk-emplacement-resto">
        <OpenMap
          data={marker}
          location={marker.position}
          handleClickEvent={(e, map) => {
            positionHandler(e); 
            geocoder.reverse(e.latlng,
              map.options.crs.scale(map.getZoom()),
              results => {
                setFieldValue("adresse", results[0].name)
              })
            }
          }
        />
      </div>
    </div>
  )
}

export default EmplacementForm