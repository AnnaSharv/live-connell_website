import React from "react";
import {Row, Col} from 'antd'

import Header from "../components/Header.js";
import { team } from "../data/team.js";

import Image from "../../src/assets/images/Full-Team-A-Hi-Res-scaled.jpg";
import Modal from '../components/Modal'


function Team() {
  return (
    <div>
      <Header
        subheading={"Recent transactions"}
        title={ "Connell Consulting has worked on a large volume of transactions in the health, social care and special education space."}
        img={Image}
        myClass={"banner-title-long"}
      />


      <p className="text-decor mblock-80  container-custom-margin">
       <strong>Connell Consulting </strong> has a reputation for delivering reliable and well-researched commercial due diligence and strategic projects, delivered by a full-time team of experienced consultants and talented researchers who share a passion for the care sector, pharma and life sciences. Clients know they are hiring a team that has worked on a large volume of transactions and projects within health, social care, education, pharma, biotech, vets and student accommodation​.
      </p>
     

      <Row className="team_image_container gx-5  container-custom" gutter={[20, 60]}>
        {team?.map((teamMember) => {
          return (
           
              <Col key={teamMember.id} className="member_card" sm={12} md={6}>
                <div className="member_img">
                  <img
                  className="team_member_img"
                    src={Object.values(teamMember.image)[0]}
                    alt="connell_staff"
                    width="100"
                  />
                </div>
                <div className="member_text">
                  <h1 className="member_text-header">{teamMember.name}</h1>
                  <h6 className="member_text-subheader">CEO and Founder</h6>
                  <Modal memberImg={Object.values(teamMember.image)[0]} memberName={teamMember.name} memberDescription={teamMember.description} memberMail={teamMember.mail} memberPosition="CEO & Founder"/>
                </div>
              </Col>
            
          );
        })}
      </Row>
    </div>
  );
}

export default Team;
