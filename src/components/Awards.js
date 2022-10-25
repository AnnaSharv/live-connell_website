import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "../assets/images/Clare-Goncalo-and-team-scaled 6.jpg";

import { awards } from "../data/awards";
import Header from "./Header";
function Awards() {
  return (
    <div className="awards-container">
      <img src={Image} alt="team-work-connell" />
      <div className="awards-list">
        <h2>Awards Achieved</h2>
        <Row>
          {awards.map((award,i) => {
            return (
              <Col md={12} lg={6} key={i}>
               <div className="award-card" key={award.id}>
                <img src={award.image} alt={award.alt} />
                <div>
                  <h2>{award.header}</h2>
                  <p>{award.body}</p>
                </div>
              </div>
              </Col>
             
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default Awards;
