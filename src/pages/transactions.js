import React from "react";

import Header from "../components/Header";
import TabsCustom from "../components/Tabs";

import Img from '../assets/images/banners/transactions.png'

function Transactions() {
  
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
        <TabsCustom />
      </div>
    </div>
  );
}

export default Transactions;
