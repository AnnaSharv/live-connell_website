import React from "react";
import { useNavigate } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Img from "../assets/images/door-edit-copy.jpg";
import Map from "../assets/images/Map.png";
import Header from "../components/Header.js";

import ContactUs from "../components/ContactUs";
function Contact() {
  const navigate = useNavigate();
  return (
    <div>
      <Header
        subheading="Contact"
        title="Contact Us"
        padding="0px"
        myClass="noclass"
      />

      <div className="contact-info mb-0">
        <div className="ps-0">
          <p className="title">Call:</p>
          <p className="description">+44 (0)20 7371 8142</p>
        </div>
        <div>
          <p className="title">Email:</p>
          <p className="description">info@connell-consulting.com</p>
        </div>
        <div>
          <p className="title">Location:</p>
          <p className="description">
            9 Catherine Place WestminsterLondon <p className="m-0">SW1E 6DX</p>
          </p>
        </div>
        <div>
          <p className="title">Directions:</p>
          <p className="description">
            Take the Cardinal Place exit from{" "}
            <p className="m-0">Victoria Station</p>
          </p>
        </div>
      </div>

      {/* AIzaSyAqpbEOjSF7oDGaVvio9t5dDMEhM2cQqX8 */}

      <Row className="contact-form">
        <Col>
          <p className="form-title">Fill form</p>

          <ContactUs />
        </Col>
        <Col className="form-image">
          <img src={Img} alt="img" />
        </Col>
      </Row>

      <a href="https://www.google.com/maps/place/Connell+Consulting/@51.4989905,-0.1410449,17z/data=!3m1!4b1!4m5!3m4!1s0x48760f9cea74d1f3:0x11d65f6fe4a14b60!8m2!3d51.4989956!4d-0.1410673"
      target="_blank">
        <img src={Map} alt="our_location" className="location" />
      </a>
    </div>
  );
}

export default Contact;
