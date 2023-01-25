import React from "react";
import {Row, Col} from 'antd'

import { awards } from "../data/awards";
function Awards() {
  return (
    <div className="awards-list container-custom">
      <h2 className="title-medium">An <span className="highlight-text">Award winning</span> Consultancy</h2>
      <Row gutter={[80,160]}>
        {awards.map((award,i) => {
          return (
            <Col xs={12} sm={12} md={8} lg={6} key={i} className="award-card">
              <img src={award.image} alt={award.alt} />
            </Col>
            
          );
        })}
      </Row>
    </div>
  );
}

export default Awards;
