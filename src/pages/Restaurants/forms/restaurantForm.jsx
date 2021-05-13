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
          <FormViewRestaurant handleClose={handleClose} resto={resto} hanldeSubmit={submitAction}/>
        </Modal.Body>
      </Modal>
    </React.Fragment>)
}

function FormViewRestaurant({handleClose, resto, hanldeSubmit}){

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
            }}
            onSubmit={(values, { setSubmitting }) => { 
                console.log("submit resto", values.image)
                let data = new FormData();
                data.set("image", values.image);
                console.log("submit resto FormData", data)
                hanldeSubmit(data)
                handleClose()
            }}
        >
            <Form className="form-horizontal form-simple" noValidate encType="multipart/form-data">
                <fieldset className="form-group position-relative mb-2">
                    <Field type="text" className="form-control form-control-lg" name="nom" placeholder="Nom du restaurant" />
                </fieldset>
                <ErrorMessage name="nom" component="div" />

                <div className="row">
                    <div className="col-md-6">
                        <fieldset className="form-group position-relative">
                            <Field type="number" className="form-control form-control-lg" name="duree" placeholder="Durée de livraison" />
                        </fieldset>
                        <ErrorMessage name="duree" component="div" />
                    </div>
                    <div className="col-md-6">
                        <fieldset className="form-group position-relative">
                            <Field type="number" className="form-control form-control-lg" name="prixLivraison" placeholder="Prix de la livraison" />
                        </fieldset>
                        <ErrorMessage name="prixLivraison" component="div" />
                    </div>
                </div>                

                <InputFile name="image" placeholder="Image du plat" />

                <hr/>
                <Button variant="primary" type="submit">Enregistrer</Button>
                
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