import React from "react";

import Team from "../assets/images/team.jpg";

function OurServicesShort() {
  return (
    <div className="OurServicesShort">
      <h2>Our Service</h2>

      <div className="OurServicesShort-container">
        <div className="services-list"> 
          <p>Commercial Due Diligence</p>
          <p>Strategy</p>
          <p>Operational Improvement</p>
        </div>

        <div>
          <img src={Team} alr="team_work" width="100%" className="team-work-image"/>
        </div>
      </div>
    </div>
  );
}

export default OurServicesShort;
