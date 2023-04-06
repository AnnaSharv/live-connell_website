import React, {useEffect} from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import TabsCustom from "../components/Tabs";

import Img from '../assets/images/banners/transactions.jpg'

function Transactions({transactionsfull}) {
  const location = useLocation()
  useEffect(() => {
    location.state?.scrolltop === true && document.documentElement.scrollTo(0, 0);

  }, [])

  
  
  return (
    <div>
      <Header
        subheading={"Recent transactions"}
        title={"Connell Consulting has worked on a large volume of transactions in the health, social care and special education space."}
        image={Img}
        myClass={"recent-transactions banner-title-long"}
      />
      <div className="tabsContent container-custom">
        <h2>Choose year</h2>
        <TabsCustom transactionsfull={transactionsfull}/>
      </div>
    </div>
  );
}

export default Transactions;
