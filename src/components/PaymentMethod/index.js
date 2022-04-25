import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import Button from "../UI/Button";
import {getHash, setHash} from "../../helpers/hash.helper";
import {IconArrowBack} from "../UI/Icons";
import Success from "../Success";
import css from "./index.module.scss";
import {CSSTransition} from "react-transition-group";

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

  const animationClasses = {
    enterDone: css.enterDone,
    exitActive: css.exitActive,
    exitDone: css.exitDone
  }

  return(
    <>
      <div className={css.item} onClick={open}>
        <div className={css.icon}>
          <img src={iconUrl} alt={name}/>
        </div>
        <div className={css.title}>{title.en}</div>
      </div>
      <CSSTransition
        in={openMethod === name}
        timeout={300}
        classNames={animationClasses}
        unmountOnExit
      >
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
      </CSSTransition>
      {
        <Success
          openPopup={openPopup}
          onClose={() => setOpenPopup(false)}
        />
      }
    </>
  )
}

PaymentMethod.propTypes = {
  iconUrl: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.object,
  category: PropTypes.string,
  isActive: PropTypes.bool
}

export default PaymentMethod;