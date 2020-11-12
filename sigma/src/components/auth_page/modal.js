import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Modal_ = ({toggle, modal}) =>{
    // when you click in the modal shows a message about the information colected
    function reload(){
        toggle()
        window.location.reload();
    }
    return (
        <div>
          <Modal isOpen={modal} toggle={toggle} >
            <ModalHeader toggle={toggle}>User Saved</ModalHeader>
            <ModalBody>
                Tu informacion a sido recibido satisfactoriamente 
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={reload}>Ok</Button>{' '}
              <Button color="secondary" onClick={reload}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>
      );
}

export default Modal_