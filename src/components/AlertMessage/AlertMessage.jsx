import React from 'react'
import { Modal, Button } from 'react-bootstrap'


function AlertMessage(props) {
    console.log("props", props)
    return (
        <Modal
            show={props.show}
            onHide={props.onHide}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                {props.titleMsg}
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.bodyMsg}
            </Modal.Body>
            <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>

    )}

export default AlertMessage
