import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { Modal, Button } from 'react-bootstrap'

function VilleForm({show, title, handleClose, addHandler, updateHandler, ville, refresh}){

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
        <FormViewVille 
          handleClose={handleClose} 
          addHandler={addHandler} 
          updateHandler={updateHandler} 
          data={ville}
          refresh={refresh}
          />
      </Modal.Body>
    </Modal>
  </React.Fragment>)
}

function FormViewVille({addHandler, updateHandler, handleClose, data, refresh}){
  return(
    <Formik
      initialValues = {{...data}}
      validate = { values => {
        const errors = {}
        if(values.libelle === ""){
          errors.libelle = "Le nom de la ville est requis"
        }        
        return errors;
    }}
    onSubmit={(values, { setSubmitting }) => { 
      if(values.id === 0){
        addHandler(values).then( () => refresh())
      }else {
        updateHandler(values).then( () => refresh())
      }
      handleClose()
    }}
  >
    <Form className="form-horizontal form-simple" noValidate>
      <fieldset className="form-group position-relative mb-2">
          <label>Nom</label>   
          <Field type="text" className="form-control " name="libelle" placeholder="Nom de la ville" />
          <ErrorMessage name="libelle" component="div" className="text-danger"/>
      </fieldset>

      <hr/>
      <Button variant="primary" type="submit">Enregistrer</Button>
    </Form>    
  </Formik>)
}

export default VilleForm