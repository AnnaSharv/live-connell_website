import React from "react";

import Header from "../components/Header";
import TabsCustom from "../components/Tabs";

import Image from "../../src/assets/images/Patrick-Alex-Cheran_WEB-RES_012.jpg";

function Transactions() {
  
  return (
    <div>
      <Header
        subheading={"Recent transactions"}
        title={"Connell Consulting has worked on a large volume of transactions in the health, social care and special education space."}
        img={Image}
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
