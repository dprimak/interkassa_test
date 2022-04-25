import React, { useState, useEffect, useRef } from "react";
import css from "./index.module.scss";
import arrayToString from "../../helpers/arrayToString.helper";
import {IconChevron} from "../UI/Icons";
import classNames from 'classnames/bind';
import PaymentMethod from "../PaymentMethod";

let cx = classNames.bind(css);

function Panel({activateTab = () => {}, activeTab, index, data}) {
  const accordionBody = useRef(null);
  const [height, setHeight] = useState(0);
  const isActive = activeTab === index;

  useEffect(() => {
    window.setTimeout(() => {
      if (isActive) {
        setHeight(accordionBody.current.scrollHeight)
      } else {
        setHeight(0)
      }
    }, 100);
  }, [isActive])

  return (
    <div className={cx({active: isActive}, css.item)}>
      <div className={css.header} onClick={() => { activateTab(index) }}>
        <div className={css.icon}>
          <img src={data.iconUrl} alt={data.name} />
        </div>
        <div className={css.name}>
          <div className={css.h}>{data.title.en}</div>
          <div className={css.p}>
            { arrayToString(data.items) }
          </div>
        </div>
        <div className={css.iconChevron}>
          <IconChevron/>
        </div>
      </div>
      <div ref={accordionBody} className={css.body} style={{height: `${height}px`}}>
        <div className={css.content}>
          <div className={css.paymentList}>
            {data.items.map((item, index) =>
              <PaymentMethod
                key={ index }
                isActive={isActive}
                category={data.category}
                {...item} />
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Panel;