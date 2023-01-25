import React from "react";


import Map from "../assets/images/Map.png";
import Header from "../components/Header.js";
import {Row, Col} from 'antd'
import ContactUs from "../components/ContactUs";


function Contact() {
  return (
    <div>
      <Header
        subheading="Contact"
        title="Contact Us"
        padding="0px"
        myClass="noclass"
      />

      <Row className=" container-custom">
        <Col sm={24} md={8} className="contact-card">
            <p className="title">Call:</p>
            <p className="description">+44 (0)20 7371 8142</p>

            <p className="title">Email:</p>
            <p className="description">info@connell-consulting.com</p>

            <p className="title">Location:</p>
            <p className="description">
              9 Catherine Place WestminsterLondon
              <span className="d-block m-0">SW1E 6DX</span>
            </p>

            <p className="title">Directions:</p>
            <p className="description">
              Take the Cardinal Place exit from Victoria Underground Station
            </p>
        </Col>

        <Col sm={24} md={16}>
          <a
            href="https://www.google.com/maps/place/Connell+Consulting/@51.4989905,-0.1410449,17z/data=!3m1!4b1!4m5!3m4!1s0x48760f9cea74d1f3:0x11d65f6fe4a14b60!8m2!3d51.4989956!4d-0.1410673"
            target="_blank"
          >
            <img src={Map} alt="our_location" className="location" />
          </a>
        </Col>
      </Row>

      {/* AIzaSyAqpbEOjSF7oDGaVvio9t5dDMEhM2cQqX8 */}

      <Row className="contact-form mblock-80 container-custom" gutter={[10,30]}>
        <Col sm={24} md={12}>
          <p className=" title-medium text-start mt-0"> Contact us </p>
          <ContactUs />
        </Col>
        <Col sm={24} md={12}>
          <img src="https://www.connell-consulting.com/wp-content/uploads/2022/05/Full-Team-A-Hi-Res-scaled.jpg" alt="" width="100%" 
            style={{
              "borderRadius":"10px",
              "height":"100%",
              "objectFit":"cover"
            }}
          />
        </Col>
      </Row>
    </div>
  );
}

export default Contact;