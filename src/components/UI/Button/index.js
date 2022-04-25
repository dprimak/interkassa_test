import React from "react";
import PropTypes from 'prop-types';
import css from "./index.module.scss";

function Button({children, onClick = () => {}}) {
  return(
    <button
      className={css.button}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func
}

export default Button;