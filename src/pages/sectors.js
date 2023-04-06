import React from "react";
import Image from '../assets/images/banners/sectors.jpg'
import Header from "../components/Header.js";
import SectorCards from "../components/SectorCards";

function sectors() {
  return (
    <div className="sectors">
      <Header
        subheading={"Sectors"}
        title={"A consultancy that understands your sector."}
        paragraphs={["We have extensive experience in strategy and due diligence across the spectrum of health, social care and education, pharma & life sciences and student accommodation. We are able to work with clients on all aspects from market research, deal origination and commercial due diligence to portfolio company strategy and management."]}
        image={Image}
        myClass={"smaller-padding-header"}
      />

      <p className="text-decor mblock-80 mvertical-80 container-custom-margin">
       <strong>
       We have extensive experience in commercial due diligence, strategy consulting, financial analysis
        and operational improvement across the spectrum of health, social care, children’s care &amp; education,
        pharma &amp; life sciences and student accommodation. We are able to work with clients on a range of
        projects from market research, deal origination and commercial due diligence to portfolio strategy and
        management.
       </strong> 
      </p>
      <SectorCards/>
    </div>
  );
}

export default sectors;
