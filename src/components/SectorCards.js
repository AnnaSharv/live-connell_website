import React from "react";
import {Row, Col} from 'antd'
import {Link} from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Img1 from '../assets/images/sectors/11 1.jpg'
import Img2 from '../assets/images/sectors/11 6.jpg'
import Img3 from '../assets/images/sectors/11 7.jpg'
import Img4 from '../assets/images/sectors/11 8.jpg'
import Img5 from '../assets/images/sectors/11 9.jpg'


function SectorCards() {
  return (
    <Row className="sectors-container container-custom" gutter={[20,20]}>
      <Col className="sector-card" xs={12} sm={12} md={8}>
        <span> <LazyLoadImage effect="blur" src={Img1} width="100%" alt="" className="sector-cards-img" /></span>
        <Link to="social-care"><p>Social Care</p></Link> 
      </Col>
      <Col className="sector-card" xs={12} sm={12} md={8}>
        <span> <LazyLoadImage effect="blur" src={Img2} width="100%" alt="" className="sector-cards-img" /></span>
        <Link to="pharma-and-life-sciences"><p>Pharma & <br /> Life Sciences</p></Link>
      </Col>
      <Col className="sector-card" sm={24} md={8}>
        <span className="sector-card-healthcare"> <LazyLoadImage effect="blur" src={Img3} width="100%" alt="" className="sector-cards-img" /></span>
        <Link to="healthcare"><p>Healthcare</p></Link>
      </Col>

      <Col className="sector-card" sm={24} md={12}>
        <span> <LazyLoadImage effect="blur" src={Img4} width="100%" alt="" className="sector-cards-img" /></span>
        <Link to="children-care-and-education"><p>Children’s Care & Education</p></Link>
      </Col>
      <Col className="sector-card" sm={24} md={12}>
        <span> <LazyLoadImage effect="blur" src={Img5} width="100%" alt="" className="sector-cards-img" /></span>
       <Link to="student-accommodation"> <p>Student <br /> Accommodation</p></Link>
      </Col>
    </Row>
  );
}

export default SectorCards;
