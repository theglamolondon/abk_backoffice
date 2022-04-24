import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import SwitchInput from '../../../component/Input/Switch'
import { UserRoleEnum } from '../../../enabler/userStatus'

function UtilisateurForm({show, title, handleClose, addHandler, updateHandler, user, refresh, mode, connected}){
  console.log("mode : ", mode)

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
        <FormViewUtilisateur 
          handleClose={handleClose} 
          addHandler={addHandler} 
          updateHandler={updateHandler} 
          data={user}
          refresh={refresh}
          mode={mode}
          />
      </Modal.Body>
    </Modal>
  </React.Fragment>)
}

export const UtilisateurFormMode = {
  EDIT_INFO : 0,
  EDIT_PASSWORD: 1, 
}

function FormViewUtilisateur({addHandler, updateHandler, handleClose, data, refresh, mode, connected}){
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
        if(values.login === ""){
          errors.login = "Le login est requis"
        }
        if(values.role === ""){
          errors.role = "Veuillez sélectionner un role SVP"
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
        
        return errors;
    }}
    onSubmit={(values, { setSubmitting }) => { 
      console.log(values)
      if(values.id === 0 && UtilisateurFormMode.EDIT_INFO === mode){
        addHandler(values).then( () => refresh())
      }else if (values.id !== 0 && UtilisateurFormMode.EDIT_INFO === mode){
        updateHandler(values).then( () => refresh())
      }else if (values.id !== 0 && UtilisateurFormMode.EDIT_PASSWORD === mode){
        //
      }
      handleClose()
    }}
  >
    <Form className="form-horizontal form-simple" noValidate>
      { UtilisateurFormMode.EDIT_INFO === mode &&
      <React.Fragment>
        <fieldset className="form-group position-relative mb-2">
            <label>Nom</label>   
            <Field type="text" className="form-control " name="nom" placeholder="Nom de l'utilisateur" />
            <ErrorMessage name="nom" component="div" className="text-danger"/>
        </fieldset>

        <fieldset className="form-group position-relative mb-2">
            <label>Prénoms</label>   
            <Field type="text" className="form-control " name="prenoms" placeholder="Prénom(s) de l'utilisateur" />
            <ErrorMessage name="role" component="div" className="text-danger"/>
        </fieldset>

        <fieldset className="form-group position-relative mb-2">
            <label>Type d'utilisateur</label>   
            <Field as="select" className="form-control " name="role" placeholder="Role de l'utilisateur">
              <option value="">Choisir le rôle...</option>
              <option value={UserRoleEnum.USER}>Utilisateur simple</option>
              <option value={UserRoleEnum.ADMIN}>Administrateur</option>
            </Field>
            <ErrorMessage name="role" component="div" className="text-danger"/>
        </fieldset>

        <fieldset className="form-group position-relative mb-2">
            <label>Login</label>   
            <Field type="text" className="form-control " name="login" placeholder="Login de connexion" />
            <ErrorMessage name="login" component="div" className="text-danger"/>
        </fieldset>

        <fieldset className="form-group pb-1">
          <Field as={SwitchInput} id="statut" className="switchery" name="statut" label="Activer le compte"/>
        </fieldset>
        </React.Fragment>}

        { (mode === UtilisateurFormMode.EDIT_PASSWORD || data.id === 0) &&
        <React.Fragment>
          <fieldset className="form-group position-relative mb-2">
              <label>Mot de passe</label>   
              <Field type="password" className="form-control " name="password" placeholder="Mot de passe" />
              <ErrorMessage name="password" component="div" className="text-danger"/>
          </fieldset>
          
          <fieldset className="form-group position-relative mb-2">
              <label>Confirmer le mot de passe</label>   
              <Field type="password" className="form-control " name="confirm" placeholder="Ressaisir le mot de passe" />
              <Field type="hidden" name="id" />
              <ErrorMessage name="confirm" component="div" className="text-danger"/>
          </fieldset>
        </React.Fragment>}

        <hr/>
        <Button variant="primary" type="submit">Enregistrer</Button>
    </Form>    
  </Formik>)
}


export default UtilisateurForm