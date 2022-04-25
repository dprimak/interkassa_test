import React, { useState, useEffect } from "react";
import css from "./index.module.scss";
import Button from "../UI/Button";
import {getHash, setHash} from "../../helpers/hash.helper";
import {IconArrowBack} from "../UI/Icons";
import Success from "../Success"

function PaymentMethod({iconUrl, name, title, category, isActive}) {
  const [openMethod, setOpenMethod] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);

  const open = () => {
    setHash(category, name);
    setOpenMethod(name);
  }

  const close = () => {
    setHash(category);
    setOpenMethod(null);
  }

  useEffect(() => {
    const isActive = getHash(2) === name;
    setOpenMethod(isActive ? name : null);
  }, [isActive, name])

  return(
    <>
      <div className={css.item} onClick={open}>
        <div className={css.icon}>
          <img src={iconUrl} alt={name}/>
        </div>
        <div className={css.title}>{title.en}</div>
      </div>
      {openMethod === name && (
        <div className={css.form}>
          <div className={css.header}>
            <button className={css.buttonBack} onClick={close}>
              <IconArrowBack />
              <img src={iconUrl} alt={name}/>
              {title.en}
            </button>
          </div>
          <div className={css.body}>
            <Button onClick={() => {setOpenPopup(true)}}>
              Pay with {title.en}
            </Button>
          </div>
        </div>
      )}
      {
        <Success
          openPopup={openPopup}
          onClose={() => setOpenPopup(false)}
        />
      }
    </>
  )
}

export default PaymentMethod;