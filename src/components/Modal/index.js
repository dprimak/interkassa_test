import React from "react";
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import css from "./index.module.scss";
import Button from "../UI/Button";

function Modal({isOpen, onClose, children}) {
  if (!isOpen) return null
  return ReactDOM.createPortal(
    <div className={css.popupWrap}>
      <div className={css.overlay} onClick={onClose} />
      <div className={css.popup}>
        {children}
        <div className={css.buttonWrap}>
          <Button onClick={onClose}>Ok</Button>
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.any
}

export default Modal;