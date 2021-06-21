
import React from 'react';
import PropTypes from 'prop-types'
import { Button, Modal } from 'react-bootstrap';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import InputFile from '../../../component/Input/Input';
import SelectMultiple from '../../../component/Input/selectMultiple';

function PlatForm({show, handleClose, handleShow, title, resto, submitAction, accompagnements}){

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
          <FormViewPlat handleClose={handleClose} submitHandler={submitAction} accompagnements={accompagnements} resto={resto} />
        </Modal.Body>
      </Modal>
    </React.Fragment>)
}

function FormViewPlat({resto,handleClose, submitHandler, accompagnements}){
    
    return (
        <Formik
            initialValues = {{id: 0, titre: "", image:"", description: "", prix: 100, actif: true}}
            validate = { values => {
                const errors = {}
                if(values.titre === ""){
                    errors.titre = "Le nom du plat est requis"
                }
                if(!values.description === ""){
                    errors.description = "La description du plat est requise"
                }
                if(!values.prix === "" || values.prix === 0){
                    errors.description = "Le prix ne peut pas être vide ou égale à 0"
                }
            }}
            onSubmit={(values, { setSubmitting }) => { 
                console.log("submit",values)
                let data = new FormData(document.forms[0]);
                data.append("idRestaurant", resto.id)
                submitHandler(data)
                handleClose()
            }}
        >
            <Form className="form-horizontal form-simple" noValidate>
                <fieldset className="form-group position-relative mb-2">
                    <label>Nom du plat</label>   
                    <Field type="text" className="form-control " name="titre" placeholder="Nom du plat" />
                </fieldset>
                <ErrorMessage name="titre" component="div" />

                <fieldset className="form-group position-relative mb-2">
                    <label>Description du plat</label>
                    <Field as="textarea" className="form-control " name="description" placeholder="Description du plat" />
                </fieldset>
                <ErrorMessage name="description" component="div" />

                <fieldset className="form-group position-relative mb-2">
                    <label>Accompagnements</label>
                    <SelectMultiple data={accompagnements} name="accompagnements" display="nom" />
                </fieldset>
                <ErrorMessage name="description" component="div" />

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
                        <ErrorMessage name="prix" component="div" />
                    </div>
                    <div className="col-md-6">
                        <InputFile name="image" placeholder="Image du plat" />
                    </div>
                </div>

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
    accompagnements: PropTypes.array.isRequired,
}

export default PlatForm