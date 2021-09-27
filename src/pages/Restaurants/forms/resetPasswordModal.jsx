import { Button, Modal } from 'react-bootstrap';
import { func, Proptypes } from 'prop-types'
import React from 'react'

function ModalResetPasswordForm({show, handleClose, handleRaz, emplacement}){

  return (
    <React.Fragment>
      <Modal animation={false}
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <ResetPasswordForm 
          closer={handleClose} 
          handler={handleRaz}
          emplacement={emplacement}
          />
      </Modal>
    </React.Fragment>
  )
}

function ResetPasswordForm({closer, handler, emplacement}){

  const handleClick = () => {
    handler({id: emplacement.id, restaurantId: emplacement.restaurant.id, force: false, password: ""}).then( () => {
      closer(false)
    })
  }

  return (
    <div className="modal-content">
      <div className="modal-header bg-danger white">
        <h4 className="modal-title" id="myModalLabel10">Réinitialisation de mot de passe</h4>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => closer(false)}>
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div className="modal-body">
        <h5>Voulez vous vraiment réninitialiser le mot de passe de l'emplacement ?</h5>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn grey btn-outline-secondary" data-dismiss="modal" onClick={() => closer(false)}>Close</button>
        <button type="button" className="btn btn-outline-danger" onClick={handleClick}>Réinitialiser</button>
      </div>
    </div>
  )
}

export default ModalResetPasswordForm;