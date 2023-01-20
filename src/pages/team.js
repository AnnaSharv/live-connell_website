import React from "react";
import {Row, Col} from 'antd'

import Header from "../components/Header.js";
import { team } from "../data/team.js";

// hederi shecvale border daamate
import Image from "../../src/assets/images/Full-Team-A-Hi-Res-scaled.jpg";
function Team() {
//   React.useEffect(() => {
//     const size = new TextEncoder().encode(JSON.stringify(team)).length
// const kiloBytes = size / 1024;
// const megaBytes = kiloBytes / 1024;

// console.log("size for team json. 100 posts", "kiloBytes", kiloBytes, "megaBytes", megaBytes)
//   }, [])
  return (
    <div>
      <Header
        subheading={"Recent transactions"}
        title={
          "Connell Consulting has worked on a large volume of transactions in the health, social care and special education space."
        }
        img={Image}
        order={"imageText"}
        myClass={"recent-transactions banner-title-long"}
      />


      <p className="text-decor mblock-80">
       <strong>Connell Consulting </strong> has a reputation for delivering reliable and well-researched commercial due diligence and strategic projects, delivered by a full-time team of experienced consultants and talented researchers who share a passion for the care sector, pharma and life sciences. Clients know they are hiring a team that has worked on a large volume of transactions and projects within health, social care, education, pharma, biotech, vets and student accommodation​.
      </p>

      <Row className="team_image_container gx-5" gutter={[20, 60]}>
        {team?.map((teamMember) => {
          return (
           
              <Col key={teamMember.id} className="member_card" sm={12} md={6}>
                <div className="member_img">
                  <img
                    src={Object.values(teamMember.image)[0]}
                    alt="connell_staff"
                    width="100"
                  />
                </div>
                <div className="member_text">
                  <h1>{teamMember.name}</h1>
                  <h6>{teamMember.mail}</h6>
                  {/* <p>{teamMember.description}</p> */}
                </div>
              </Col>
            
          );
        })}
      </Row>
    </div>
  );
}

export default Team;
