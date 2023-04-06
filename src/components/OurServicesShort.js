import React from "react";
import {Col, Row, Card} from 'antd'
import Arrow from "../assets/images/arrow.svg";

import Img1 from '../assets/images/home/Rectangle 103.jpg'
import Img2 from '../assets/images/home/Rectangle 91.jpg'
import Img3 from '../assets/images/home/Rectangle 105.jpg'
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

function OurServicesShort() {
  return (
    <div className="OurServicesShort  container-custom">
      <h2 className="title-medium">What <span className="highlight-text">we</span> do</h2>

      <div className="OurServicesShort-container">
        <Row gutter={[20,30]}>
          <Col sm={24} md={8}>
            <Link to="services">
              <Card bordered={false} 
                hoverable
                cover={
                  <LazyLoadImage effect="blur" alt="example" src={Img1} height={200}
                    style={{
                      'width': '100%',
                      'objectFit': 'cover',
                      'objectPosition': 'top center',
                    }}
                />
              }>
                  <h2 className="title-regular text-start">Commercial Due Diligence <img alt="" src={Arrow} style={{"marginBottom": "5px"}} /></h2>
                  <p className="text-regular">We specialise in providing buy-side and vendor commercial due diligence to corporate clients,
                    investors, and operators. Our reports are used for a variety of transaction scenarios, including sales
                    processes, acquisitions, refinancing and divestment of assets.
                  </p>
                </Card>
            </Link>
        
          </Col>
          <Col sm={24} md={8}>
          <Link to="services">
            <Card bordered={false} 
              hoverable   
              cover={<LazyLoadImage effect="blur" alt="example" src={Img2} height={200} 
              style={{
                'width': '100%',
                'objectFit': 'cover',
                'objectPosition': 'top center',
              }}
              />}>
             <h2 className="title-regular text-start">Strategy Consulting <img alt="" src={Arrow} style={{"marginBottom": "5px"}} /></h2>
              <p className="text-regular">
                Our highly experienced team of sector experts have worked with clients on many diverse strategy
                consulting projects from investment strategy to market entry, operations and portfolio optimisation.
              </p>
              
            </Card>
          </Link>
          </Col>
          <Col sm={24} md={8}>
          <Link to="services">
            <Card  bordered={false} hoverable 
               cover={<LazyLoadImage effect="blur" alt="example" src={Img3} height={200} 
               style={{
                'width': '100%',
                'objectFit': 'cover',
                'objectPosition': 'top center',
              }}
               />}>
              <h2 className="title-regular text-start">Operational Improvement <img alt="" src={Arrow} style={{"marginBottom": "5px"}} /></h2>
              <p className="text-regular">
                  We also conduct operational improvement projects across health and care portfolios. We have
                  extensive experience of best practice within the sector, from effective governance to recruitment and
                  training.
               </p>
            </Card>
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default OurServicesShort;
