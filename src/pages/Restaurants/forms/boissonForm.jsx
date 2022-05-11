import React from 'react';
import PropTypes from 'prop-types'
import { Button, Modal } from 'react-bootstrap';
import { ErrorMessage, Field, Form, Formik } from 'formik'

function BoissonForm({show, handleClose, title, resto, boisson, submitAction}){

  return (
    <React.Fragment>
      <Modal animation={false}
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{title} - {resto.nom}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormViewBoisson boisson={boisson} handleClose={handleClose} submitHandler={submitAction} resto={resto} />
        </Modal.Body>
      </Modal>
    </React.Fragment>)
}

function FormViewBoisson({boisson, resto, handleClose, submitHandler}){
    
  return (
    <Formik
      initialValues = {{...boisson, idRestaurant: resto.id}}
      validate = { values => {
        const errors = {}
        if(values.libelle === ""){
          errors.libelle = "Le nom de la boisson est requis"
        }
        if(!values.prix === "" || values.prix === 0){
          errors.prix = "Le prix ne peut pas être vide ou égale à 0"
        }
        return errors
      }}
      onSubmit={(values, { setSubmitting }) => { 
        let data = new FormData(document.getElementById("boissonForm"));
        data.append("idRestaurant", resto.id)
        submitHandler(data)
        handleClose()
      }}
    >
          <Form className="form-horizontal form-simple" noValidate id="boissonForm">
            <Field type="hidden" name="id" />
            <fieldset className="form-group position-relative mb-2">
              <label>Nom de la boisson</label>   
              <Field type="text" className="form-control " name="libelle" placeholder="Nom de la boisson" />
            </fieldset>
            <ErrorMessage name="libelle" component="div" className="text-danger" />

            <div className="row">
              <div className="col-md-6">
                <fieldset className="form-group position-relative">
                  <label>Prix de la boisson</label>
                  <div className="input-group">
                    <Field type="number" className="form-control" name="prix" placeholder="Prix de la boisson" />
                    <div className="input-group-append">
                      <span className="input-group-text">F CFA</span>
                    </div>
                  </div>                            
                </fieldset>
                <ErrorMessage name="prix" component="div" className="text-danger"/>
              </div>
            </div>

            <div className="form-group">
              <label>
                <Field type="checkbox" name="actif" /> Activer la boisson
              </label>
            </div>
            
            <hr/>
            <Button variant="primary" type="submit">Enregistrer</Button>
              
          </Form>
      </Formik>
    )
}
 
BoissonForm.propTypes = {
  title: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  resto: PropTypes.object.isRequired,
  submitAction: PropTypes.func.isRequired,
}

export default BoissonForm