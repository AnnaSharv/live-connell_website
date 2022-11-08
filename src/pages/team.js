import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
        myClass={"recent-transactions"}
      />
      <Row className="team_image_container gx-5">
        {team?.map((teamMember) => {
          return (
           
              <Col key={teamMember.id} className="member_card" lg={6} md={12} sm={12}>
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
                  <p>{teamMember.description}</p>
                </div>
              </Col>
            
          );
        })}
      </Row>
    </div>
  );
}

export default Team;
