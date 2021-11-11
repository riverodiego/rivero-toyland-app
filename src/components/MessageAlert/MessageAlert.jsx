import React, { useState } from 'react';
import {Modal} from 'react-bootstrap';

const MessageAlert = (ini,msg,titleMsg) => {
  const [show, setShow] = useState(ini)

    return (
      <>
        {/* <Button variant="primary" onClick={() => setShow(true)}>
          Custom Width Modal
        </Button> */}
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              {titleMsg}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              {msg}
            </p>
          </Modal.Body>
        </Modal>
      </>
    )
  }

export default MessageAlert

