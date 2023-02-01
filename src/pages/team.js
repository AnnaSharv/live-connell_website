import React, {useState, useEffect} from "react";
import {Row, Col} from 'antd'

import { collection, getDocs } from "firebase/firestore";
import {db} from '../firebase.js'

import Header from "../components/Header.js";
// import { team } from "../data/team.js";

import Image from "../../src/assets/images/Full-Team-A-Hi-Res-scaled.jpg";
import Modal from '../components/Modal'


function Team() {
  const [team, setTeam] = useState([])

  useEffect(() => {

    async function getData() {
      const list = []
      const querySnapshot = await getDocs(collection(db, "team"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        list.push({id: doc.id, data: doc.data()})
      });
      setTeam(list)
    }

    getData()
    console.log("firebase!!!!")
  }, [])

  return (
    <div>
      <Header
        subheading={"Team"}
        title={ "The team"}
        img={Image}
      
      />


      <p className="text-decor mblock-80  container-custom-margin">
       <strong>Connell Consulting </strong> has a reputation for delivering reliable and well-researched commercial due diligence and strategic projects, delivered by a full-time team of experienced consultants and talented researchers who share a passion for the care sector, pharma and life sciences. Clients know they are hiring a team that has worked on a large volume of transactions and projects within health, social care, education, pharma, biotech, vets and student accommodation​.
      </p>
     

      <Row className="team_image_container gx-5 container-custom" gutter={[20, 60]}>
        {team?.map((teamMember) => {
         console.log(teamMember)
         if(teamMember.data.member_status === 'active') {
           return (
            <Col key={teamMember.id} className="member_card" xs={12} sm={12} md={6}>
              <div className="member_img">
                <img
                className="team_member_img"
                  src={teamMember.data.blog_image}
                  alt="connell_staff"
                  width="100"
                />
              </div>
              <div className="member_text">
                <h1 className="member_text-header">{teamMember.data.member_name}</h1>
                <h6 className="member_text-subheader">{teamMember.data.member_position}</h6>
                <Modal memberImg={teamMember.data.blog_image} memberName={teamMember.data.member_name} memberDescription={teamMember.data.member_description} memberMail={teamMember.data.member_contact} memberPosition={teamMember.data.member_position}/>
              </div>
            </Col>
        )}
        
        })}
      </Row>
    </div>
  );
}

export default Team;
