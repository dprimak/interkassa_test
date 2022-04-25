import React from "react";
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

export default Button;