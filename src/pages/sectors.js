import React from "react";
import Image from '../assets/images/banners/sectors.png'
import Header from "../components/Header.js";
import SectorCards from "../components/SectorCards";

function sectors() {
  return (
    <div>
      <Header
        subheading={"Sectors"}
        title={"A consultancy that understands your sector."}
        paragraphs={["We have extensive experience in strategy and due diligence across the spectrum of health, social care and education. We are able to work with clients on all aspects from market research, deal origination and commercial due diligence to portfolio company strategy and management."]}
        image={Image}
        myClass={"smaller-padding-header"}
      />

      <p className="text-decor mblock-80 mvertical-80 container-custom-margin">
       <strong>
          We have extensive experience in strategy and due diligence across the spectrum of health, social care and education. We are able to work with clients on all aspects from market research, deal origination and commercial due diligence to portfolio company strategy and management.
       </strong> 
      </p>
      <SectorCards/>
    </div>
  );
}

export default sectors;
