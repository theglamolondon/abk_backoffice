import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { Button, Modal } from 'react-bootstrap'

function LivreurForm({show, title, handleClose, submitAction, livreur}){

  return (
  <React.Fragment>
    <Modal animation={false}
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      dialogClassName="modal-60w"
    >
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormViewLivreur handleClose={handleClose} submitHandler={submitAction} data={livreur}/>
      </Modal.Body>
    </Modal>
  </React.Fragment>)
}

function FormViewLivreur({submitHandler, handleClose, data}){
  return(
    <Formik
      initialValues = {{...data, confirm: ""}}
      validate = { values => {
        const errors = {}

        if(values.nom === ""){
          errors.nom = "Le nom est requis"
        }
        if(values.prenoms === ""){
          errors.prenoms = "Le prénom est requis"
        }
        if(values.email === ""){
          errors.email = "Le mail est requis"
        }
        if(values.telephone === ""){
          errors.telephone = "Le numéro GSM est requis"
        }
        if(values.typePiece === ""){
          errors.typePiece = "Veuillez sélectionner le type de la pièce"
        }
        if(values.numeroPiece === ""){
          errors.numeroPiece = "Veuillez renseigner le numéro de la pièce"
        }
        if(values.validitePiece === ""){
          errors.validitePiece = "Veuillez renseigner la date d'expiration de la pièce"
        }
        
        if(values.id === 0){
          if(values.password === ""){
            errors.password = "Saisir un mot de passe pour la connexion"
          }
          if(values.confirm === ""){
            errors.confirm = "Les deux mot de passes ne peuvent pas être vides"
          }
          if(values.confirm !== values.password){
            errors.confirm = "Les deux mot de passes ne correspondent pas"
            errors.password = "Les deux mot de passes ne correspondent pas"
          }
        }
        
        return errors
    }}
    onSubmit={(values, { setSubmitting }) => { 
      submitHandler(values)
      handleClose()
    }}
  >
    <Form className="form-horizontal form" noValidate>
      <h4 className="form-section"><i className="fa fa-eye"></i>Informations livreur</h4>

      <div className="row">
        <div className="col-md-6">
          <fieldset className="form-group position-relative mb-2">
            <label>Nom</label>   
            <Field type="text" className="form-control " name="nom" placeholder="Nom livreur" />
            <ErrorMessage name="nom" component="div" className="text-danger"/>
          </fieldset>
        </div>
        <div className="col-md-6">
          <fieldset className="form-group position-relative mb-2">
            <label>Prénoms</label>   
            <Field type="text" className="form-control " name="prenoms" placeholder="Prenoms livreur" />
            <ErrorMessage name="prenom" component="div" className="text-danger"/>     
          </fieldset>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <fieldset className="form-group position-relative mb-2">
            <label>Type de pièce d'identité</label>   
            <Field as="select" className="form-control " name="typePiece" placeholder="Type pièce d'identité">
              <option value="">Choisir un type...</option>
              <option value="CNI">Carte Nationale d'Identité</option>
              <option value="ATTEST">Attestation d'Identité</option>
              <option value="PASSPORT">Passeport</option>
              <option value="AUTRE">Autre</option>
            </Field>
            <ErrorMessage name="typePiece" component="div" className="text-danger"/>
          </fieldset>
        </div>
        <div className="col-md-6">
          <fieldset className="form-group position-relative mb-2">
            <label>N° de la pièce d'identité</label>   
            <Field type="text" className="form-control " name="numeroPiece" placeholder="n° pièce d'identité" />
            <ErrorMessage name="numeroPiece" component="div" className="text-danger"/>     
          </fieldset>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6"></div>
        <div className="col-md-6">
          <fieldset className="form-group position-relative mb-2">
            <label>Date de validité</label>   
            <Field type="date" className="form-control " name="validitePiece" placeholder="Date de fin de validité" />
            <ErrorMessage name="validitePiece" component="div" className="text-danger"/>     
          </fieldset>
        </div>
      </div>

      <h4 className="form-section"><i className="fa fa-eye"></i>Infos connexion</h4>
      <div className="row">
        <div className="col-md-6">
          <fieldset className="form-group position-relative mb-2">
            <label>Email</label>   
            <Field type="email" className="form-control " name="email" placeholder="Email livreur" />
            <ErrorMessage name="email" component="div" className="text-danger"/>
          </fieldset>
        </div>
        <div className="col-md-6">
          <fieldset className="form-group position-relative mb-2">
            <label>Téléphone</label>   
            <Field type="text" className="form-control " name="telephone" placeholder="N° de téléphone livreur" />
            <ErrorMessage name="telephone" component="div" className="text-danger"/>     
          </fieldset>
        </div>
      </div>
      
      {data.id === 0 &&
      <div className="row">
        <div className="col-md-6">
          <fieldset className="form-group position-relative mb-2">
            <label>Mot de passe</label>   
            <Field type="password" className="form-control " name="password" placeholder="Mot de passe" />
            <ErrorMessage name="password" component="div" className="text-danger"/>
          </fieldset>
        </div>
        <div className="col-md-6">
          <fieldset className="form-group position-relative mb-2">
            <label>Confirmer le mot de passe</label>   
            <Field type="password" className="form-control " name="confirm" placeholder="Confirmer le mot de passe" />
            <Field type="hidden" name="id" />
            <ErrorMessage name="confirm" component="div" className="text-danger"/>     
          </fieldset>
        </div>
      </div>}

      <hr/>
      <Button variant="primary" type="submit">Enregistrer</Button>
    </Form> 
  </Formik>)
}


export default LivreurForm