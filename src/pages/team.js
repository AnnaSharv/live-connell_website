import React, {useState, useEffect} from "react";
import {Row, Col} from 'antd'
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import {db} from '../firebase.js'

import Header from "../components/Header.js";
// import { team } from "../data/team.js";

import Image from "../../src/assets/images/Full-Team-A-Hi-Res-scaled.jpg";
import Modal from '../components/Modal'

import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

function Team() {
  const [team, setTeam] = useState([])
  const [isModalopen, setIsModalopen] = useState(false)

  useEffect(() => {

    async function getData() {
      const list = []
      const q = query(collection(db, "team"), orderBy("member_name", "asc"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        list.push({id: doc.id, data: doc.data()})
      });
      setTeam(list)
    }

    getData()
 
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
          if(teamMember.data.member_name.includes("Clare Connell") || teamMember.data.member_name.includes("Gonçalo Silva")) {
            return (
              <Col key={teamMember.id} className="member_card" xs={12} sm={12} md={6}>
              <div className="member_img"> 
                <LazyLoadImage
                  effect="blur"
                  className="team_member_img"
                  src={teamMember.data.blog_image || "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"}
                  alt="connell_staff"
                  width="100"
                  onError={() => console.log("error happ")}
                />
              </div>
              <div className="member_text"> 
                <h1 className="member_text-header">{teamMember.data.member_name}</h1>
                <h6 className="member_text-subheader">{teamMember.data.member_position}</h6>
                <Modal memberImg={teamMember.data.blog_image} memberName={teamMember.data.member_name} memberDescription={teamMember.data.member_description} memberMail={teamMember.data.member_contact} memberPosition={teamMember.data.member_position}/>
              </div>
            </Col>
            )
           }
        })}
        {team?.map((teamMember) => {         
         if(teamMember.data.member_status === 'active' && !teamMember.data.member_name.includes("Clare Connell") && !teamMember.data.member_name.includes("Gonçalo Silva")) {
           return (

            <Col key={teamMember.id} className="member_card" xs={12} sm={12} md={6}>
              <div className="member_img">
                <LazyLoadImage
                  effect="blur"
                  className="team_member_img"
                  src={teamMember.data.blog_image || "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"}
                  alt="connell_staff"
                  width="100"
                />
              </div>
              <div className="member_text">
                <h1 className="member_text-header">{teamMember.data.member_name}</h1>
                <h6 className="member_text-subheader">{teamMember.data.member_position}</h6>
                <Modal memberImg={teamMember.data.blog_image} memberName={teamMember.data.member_name} memberDescription={teamMember.data.member_description} memberMail={teamMember.data.member_contact} memberPosition={teamMember.data.member_position}> </Modal> 
              </div>
            </Col>
        )}
        
        })}
      </Row>
    </div>
  );
}

export default Team;
