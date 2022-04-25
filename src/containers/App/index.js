import React, { useEffect, useState } from "react";
import css from "./index.module.scss";
import Accordion from "../../components/Accordion";
import paymentsMethod from "../../data.json";
import Loader from "../../components/UI/Loader";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setData(paymentsMethod.paymentMethods);
      setLoading(false);
    }, 1500)
  }, [])


  if (loading) return <Loader />;
  return(
    <div className={css.container}>
      <Accordion data={data} />
    </div>
  )
}

export default App;