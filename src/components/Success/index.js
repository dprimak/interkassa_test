import React from "react";
import {IconCheck} from "../UI/Icons";
import Modal from "../Modal";

function Success({openPopup, onClose}) {
  return (
    <Modal
      isOpen={openPopup}
      onClose={onClose}
    >
      <IconCheck/>
      <h3>Successfully</h3>
      <p>Your payment is successful</p>
    </Modal>
  )
}

export default Success;