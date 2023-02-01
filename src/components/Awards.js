import React from "react";
import {Row, Col} from 'antd'
import Img1 from '../assets/images/logos/black_P502019Winner-Sector-Specialist-SmallBLACK[6].png'
import Img2 from '../assets/images/logos/black_P502018Winner-Sector-Specialist-SmallBLACK[8].jpg'
import Img3 from '../assets/images/logos/black_HIAwards2021Winner-Consultants-transactional-Small-black-01[94].png'
import Img4 from '../assets/images/logos/black_Awards2016WinnerSmall[86].png'


import Img5 from '../assets/images/logos/2019-logo 1.svg'
import Img6 from '../assets/images/logos/2020-logo.svg'
import Img7 from '../assets/images/logos/HealthInvestorPower-Fifty-2022_WINNER-Sector-Specialist_black.svg'
import Img8 from '../assets/images/logos/Proud-to-Support-Badge-e1601549997629 (1) 1.svg'

 

import { awards } from "../data/awards";
function Awards() {
  return (
    <div className="awards-list container-custom">
      <h2 className="title-medium">An <span className="highlight-text">Award winning</span> Consultancy</h2>
      <Row gutter={[{ xs:20, sm: 30, md: 80 }, {xs:60, sm:60, md:160}]}>
        {/* {awards.map((award,i) => {
          return (
            <Col xs={12} sm={12} md={8} lg={6} key={i} className="award-card">
              <img src={award.image} alt={award.alt} />
            </Col>
            
          );
        })} */}


        <Col xs={12} sm={12} md={8} lg={6} className="award-card">
            <img src={Img7} style={{"objectFit": "contain"}} />
        </Col>
         <Col xs={12} sm={12} md={8} lg={6} className="award-card">
              <img src={Img3} />
          </Col>
          <Col xs={12} sm={12} md={8} lg={6} className="award-card">
              <img src={Img6} />
          </Col>
          <Col xs={12} sm={12} md={8} lg={6} className="award-card">
              <img src={Img5} />
          </Col>
          <Col xs={12} sm={12} md={8} lg={6} className="award-card">
              <img src={Img1} />
          </Col>
          <Col xs={12} sm={12} md={8} lg={6} className="award-card">
              <img src={Img2} />
          </Col>
         <Col xs={12} sm={12} md={8} lg={6} className="award-card">
              <img src={Img4} />
          </Col>
          <Col xs={12} sm={12} md={8} lg={6} className="award-card">
              <img src={Img8} style={{"objectFit": "contain"}} />
          </Col>
      </Row>
    </div>
  );
}

export default Awards;
