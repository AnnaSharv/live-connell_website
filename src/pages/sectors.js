import React from "react";

import Image from "../assets/images/Team_hi-res_015.jpg";

import Header from "../components/Header.js";
import SectorCards from "../components/SectorCards";
function sectors() {
  return (
    <div>
      <Header
        subheading={"Sectors"}
        title={"A consultancy that understands your sector."}
        paragraphs={["We have extensive experience in strategy and due diligence across the spectrum of health, social care and education. We are able to work with clients on all aspects from market research, deal origination and commercial due diligence to portfolio company strategy and management."]}
        img={Image}
        order={"imageText"}
        myClass={"smaller-padding-header"}
      />

      <p className="text-decor mblock-80">
       <strong>
          We have extensive experience in strategy and due diligence across the spectrum of health, social care and education. We are able to work with clients on all aspects from market research, deal origination and commercial due diligence to portfolio company strategy and management.
       </strong> 
      </p>
      <SectorCards />
    </div>
  );
}

export default sectors;
