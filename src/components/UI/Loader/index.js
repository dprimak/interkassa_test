import React from "react";
import {IconLoader} from "../Icons";
import css from "./index.module.scss";

function Loader() {
  return (
    <div className={css.loader}>
      <IconLoader />
    </div>
  )
}

export default Loader;