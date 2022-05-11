import React from 'react';
import PropTypes from 'prop-types'
import { Button, Modal } from 'react-bootstrap';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import InputFile from '../../../component/Input/Input';

function SupplementForm({show, handleClose, title, resto, supplement, submitAction}){

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
          <FormViewSupplement supplement={supplement} handleClose={handleClose} submitHandler={submitAction} resto={resto} />
        </Modal.Body>
      </Modal>
    </React.Fragment>)
}

function FormViewSupplement({supplement, resto, handleClose, submitHandler}){
    
  return (
    <Formik
      initialValues = {{...supplement, idRestaurant: resto.id}}
      validate = { values => {
        const errors = {}
        if(values.libelle === ""){
          errors.libelle = "Le nom du supplement est requis"
        }
        if(!values.prix === "" || values.prix === 0){
          errors.prix = "Le prix ne peut pas être vide ou égale à 0"
        }
        return errors
      }}
      onSubmit={(values, { setSubmitting }) => { 
        let data = new FormData(document.getElementById("supplementForm"));
        data.append("idRestaurant", resto.id)
        submitHandler(data)
        handleClose()
      }}
    >
      <Form className="form-horizontal form-simple" noValidate id="supplementForm">
        <Field type="hidden" name="id" />
        <fieldset className="form-group position-relative mb-2">
          <label>Nom du supplément</label>   
          <Field type="text" className="form-control " name="libelle" placeholder="Nom supplement" />
        </fieldset>
        <ErrorMessage name="libelle" component="div" className="text-danger" />

        <div className="row">
          <div className="col-md-6">
            <fieldset className="form-group position-relative">
              <label>Prix du plat</label>
              <div className="input-group">
                <Field type="number" className="form-control" name="prix" placeholder="Prix du plat" />
                <div className="input-group-append">
                  <span className="input-group-text">F CFA</span>
                </div>
              </div>                            
            </fieldset>
            <ErrorMessage name="prix" component="div" className="text-danger"/>
          </div>
          <div className="col-md-6">
            <InputFile name="image" placeholder="Image du supplément" />
          </div>
        </div>

        <div className="form-group">
          <label>
            <Field type="checkbox" name="actif" /> Activer du supplément
          </label>
        </div>
        
        <hr/>
        <Button variant="primary" type="submit">Enregistrer</Button>
          
      </Form>
    </Formik>
  )
}
 
SupplementForm.propTypes = {
  title: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  resto: PropTypes.object.isRequired,
  submitAction: PropTypes.func.isRequired,
}

export default SupplementForm