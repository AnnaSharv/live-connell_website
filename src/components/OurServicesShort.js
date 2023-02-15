import React from "react";
import {Col, Row, Card} from 'antd'
import Arrow from "../assets/images/arrow.svg";

import Img1 from '../assets/images/home/Rectangle 103.jpg'
import Img2 from '../assets/images/home/Rectangle 91.jpg'
import Img3 from '../assets/images/home/Rectangle 105.jpg'
import { LazyLoadImage } from "react-lazy-load-image-component";

function OurServicesShort() {
  return (
    <div className="OurServicesShort  container-custom">
      <h2 className="title-medium">What <span className="highlight-text">we</span> do</h2>

      <div className="OurServicesShort-container">
        <Row gutter={[20,30]}>
          <Col sm={24} md={8}>
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
              <p className="text-regular">We specialise in delivering insightful primary market research incorporating competitor intelligence, funding and regulatory outlook, stakeholder interviews and supply/demand dynamics.</p>
            </Card>
          </Col>
          <Col sm={24} md={8}>
            <Card bordered={false} 
              hoverable   
              cover={<LazyLoadImage effect="blur" alt="example" src={Img2} height={200} 
              style={{
                'width': '100%',
                'objectFit': 'cover',
                'objectPosition': 'top center',
              }}
              />}>
             <h2 className="title-regular text-start">Strategy <img alt="" src={Arrow} style={{"marginBottom": "5px"}} /></h2>
              <p className="text-regular">We help clients assess reasons for sub-optimal performance of assets (property, IT, HR etc), competitor benchmarking and market opportunities</p>
              
            </Card>
          </Col>
          <Col sm={24} md={8}>
            <Card  bordered={false} hoverable 
               cover={<LazyLoadImage effect="blur" alt="example" src={Img3} height={200} 
               style={{
                'width': '100%',
                'objectFit': 'cover',
                'objectPosition': 'top center',
              }}
               />}>
              <h2 className="title-regular text-start">Operational Improvement <img alt="" src={Arrow} style={{"marginBottom": "5px"}} /></h2>
              <p className="text-regular">As the recruitment market becomes increasingly competitive we can benchmark contracts, terms and pay rates across a local area to find out the optimal package required for each site t</p>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default OurServicesShort;
