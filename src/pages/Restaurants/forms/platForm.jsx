
import React from 'react';
import PropTypes from 'prop-types'
import { Button, Modal } from 'react-bootstrap';
import { ErrorMessage, Field, Form, Formik, useFormikContext } from 'formik';
import InputFile from '../../../component/Input/Input';

function PlatForm({show, handleClose, handleShow, title, resto}){

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
          <FormViewPlat handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </React.Fragment>)
}

function FormViewPlat({handleClose}){
    
    return (
        <Formik
            initialValues = {{id: 0, titre: "", image:"", description: "", prix: 100, actif: true}}
            validate = { values => {
                const errors = {}
                if(values.titre === ""){
                    errors.titre = "Le nom du restaurant requis"
                }
                if(!values.description === ""){
                    errors.description = "La description est requise"
                }
                if(!values.prix === "" || values.prix === 0){
                    errors.description = "Le prix ne peut pas être vide ou égale à 0"
                }
            }}
            onSubmit={(values, { setSubmitting }) => { 
                console.log("submit", values)
                handleClose()
            }}
        >
            <Form className="form-horizontal form-simple" noValidate>
                <fieldset className="form-group position-relative mb-2">
                    <Field type="text" className="form-control form-control-lg" name="titre" placeholder="Nom du plat" />
                </fieldset>
                <ErrorMessage name="titre" component="div" />

                <fieldset className="form-group position-relative mb-2">
                    <Field as="textarea" className="form-control form-control-lg" name="description" placeholder="Description du plat" />
                </fieldset>
                <ErrorMessage name="description" component="div" />

                <div className="row">
                    <div className="col-md-6">
                        <fieldset className="form-group position-relative">
                            <Field type="number" className="form-control form-control-lg" name="prix" placeholder="Prix du plat" />
                        </fieldset>
                        <ErrorMessage name="prix" component="div" />
                    </div>
                    <div className="col-md-6">
                        <h2>F CFA</h2>
                    </div>
                </div>

                <InputFile name="image" placeholder="Image du plat" />

                <hr/>
                <Button variant="primary" type="submit">Enregistrer</Button>
                
            </Form>
        </Formik>
    )
}
 
PlatForm.propTypes = {
    title: PropTypes.string.isRequired,
    handleClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    resto: PropTypes.object.isRequired,
    submitAction: PropTypes.func.isRequired,
}

export default PlatForm