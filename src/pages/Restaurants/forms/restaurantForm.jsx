import React from 'react';
import PropTypes from 'prop-types'
import { Button, Modal } from 'react-bootstrap';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import InputFile from '../../../component/Input/Input';

function RestaurantForm({title, show, handleClose, handleShow, resto, submitAction}){
   
  return (
  <React.Fragment>
    <Modal animation={false}
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormViewRestaurant handleClose={handleClose} resto={resto} submitHandler={submitAction}/>
      </Modal.Body>
    </Modal>
  </React.Fragment>)
}

function FormViewRestaurant({handleClose, resto, submitHandler}){

  return (
    <Formik
      initialValues = {resto}
      validate = { values => {
        const errors = {}
        if(values.nom === ""){
            errors.nom = "Le nom du restaurant requis"
        }
        if(!values.duree === "" || values.duree === 0){
            errors.duree = "La duree est requise"
        }
        return errors
      }}
      onSubmit={(values, {setSubmitting}) => { 
        let data = new FormData(document.forms[0]);
        submitHandler(data)
        handleClose()
      }}
    >
      <Form className="form-horizontal form-simple" noValidate encType="multipart/form-data">
        <Field type="hidden" name="id" />
            
        <fieldset className="form-group position-relative mb-2">
          <label>Nom du restaurant</label>
          <Field type="text" className="form-control" name="nom" placeholder="Nom du restaurant" />
          <ErrorMessage name="nom" component="div" className="text-danger"/>
        </fieldset>

        <div className="row">
          <div className="col-md-6">
            <fieldset className="form-group position-relative">
              <label>Durée</label>
              <div className="input-group">
                <Field type="number" className="form-control" name="duree" placeholder="Durée de livraison" />
                <div className="input-group-append">
                  <span className="input-group-text">minutes</span>
                </div>
              </div>
            </fieldset>
            <ErrorMessage name="duree" component="div" className="text-danger"/>
          </div>
          <div className="col-md-6">
            <fieldset className="form-group position-relative">
              <label>Frais de livraison</label>
              <div className="input-group">
                <Field type="number" className="form-control " name="prixLivraison" placeholder="Prix de la livraison" />
                <div className="input-group-append">
                  <span className="input-group-text">F CFA</span>
                </div>
              </div>
            </fieldset>
            <ErrorMessage name="prixLivraison" component="div" className="text-danger"/>
          </div>
        </div>                

        <InputFile name="image" placeholder="Image du plat" />

        <hr/>
        <Button variant="primary" type="submit" >Enregistrer</Button>            
      </Form>
    </Formik>
  )
}

RestaurantForm.propTypes = {
  title: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired, 
  handleClose: PropTypes.func.isRequired, 
  handleShow: PropTypes.func, 
  resto: PropTypes.object.isRequired,
  submitAction: PropTypes.func.isRequired
}

export default RestaurantForm