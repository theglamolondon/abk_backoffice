import React from 'react'
import PropTypes from 'prop-types'
import { Button, Modal } from 'react-bootstrap';

function EmplacementForm({show, handleClose, title, resto, submitAction}){

    return (
        <React.Fragment>
            <Modal animation={false}
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                dialogClassName="modal-90w"
            >
                <Modal.Header closeButton>
                <Modal.Title>{title} - {resto.nom}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <FormViewEmplacement handleClose={handleClose} submitHandler={submitAction} resto={resto} />
                </Modal.Body>
            </Modal>
        </React.Fragment>
    )
}

function FormViewEmplacement(props){
    return(<React.Fragment>

    </React.Fragment>)
}

export default EmplacementForm