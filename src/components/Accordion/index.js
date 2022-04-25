import React, { useState, useLayoutEffect } from "react";
import PropTypes from 'prop-types';
import css from "./index.module.scss";
import Panel from "./Panel";
import {getHash, setHash} from "../../helpers/hash.helper";

function Accordion({ data }) {
  const [activeTab, setActiveTab] = useState(null);

  const activateTab = (name) => {
    setHash(name);
    setActiveTab(activeTab === name ? null : name)
  }

  useLayoutEffect(() => {
    setActiveTab(getHash(1))
  }, [])

  return(
    <div className={css.accordion}>
      {data.map((item, index) =>
        <Panel
          key={ index }
          activeTab={ activeTab }
          index={ item.category }
          data={ item }
          activateTab={ activateTab }
        />
      )}
    </div>
  )
}

Accordion.propTypes = {
  data: PropTypes.array
}

export default Accordion;