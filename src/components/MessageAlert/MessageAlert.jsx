import React, { useState } from 'react';
import {Modal, Button} from 'react-bootstrap';

const MessageAlert = (msg,btName,titleMsg) => {
    const [show, setShow] = useState(false);

    return (
      <>
        <Button variant="primary" size="sm" onClick={() => setShow(true)}>
          {btName}
        </Button>
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
    );
  }

export default MessageAlert

