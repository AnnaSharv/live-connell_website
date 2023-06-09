import React from "react";
import Header from "../components/Header.js";
import {Row, Col} from 'antd'
import ContactUs from "../components/ContactUs";
import { LazyLoadImage } from "react-lazy-load-image-component";

import Img from '../assets/images/banners/news.png'
import Map from "../assets/images/contact/Map.png";
import Img1 from "../assets/images/contact/Clare-Goncalo-and-team-scaled 30.jpg";



function Contact() {
  return (
    <div>
      <Header
        // subheading="Contact"
        title="Contact Us"
        padding="0px"
        myClass="noclass"
        image={Img}
      />

      <Row className=" container-custom">
        <Col sm={24} md={8} className="contact-card">
            <p className="title">Call:</p>
            <p className="description">+44 (0)20 7371 8142</p>

            <p className="title">Email:</p>
            <p className="description">info@connell-consulting.com</p>

            <p className="title">Location:</p>
            <p className="description">
              9 Catherine Place, London
              <span className=" m-0"> SW1E 6DX</span>
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
            <LazyLoadImage effect="blur" src={Map}  height="100%" alt="our_location" className="location" />
          </a>
        </Col>
      </Row>

      <Row className="contact-form mblock-80 container-custom" gutter={[20,30]}>
        <Col sm={24} md={12}>
          <p className=" title-medium text-start mt-0"> Contact us </p>
          <ContactUs />
        </Col>
        <Col sm={24} md={12}>
          <LazyLoadImage effect="blur"  height="100%" src={Img1} alt="" width="100%" 
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