import React from "react";
import {Row, Col} from 'antd'

import { awards } from "../data/awards";
function Awards() {
  return (
    <div className="awards-container">
      <div className="awards-list">
        <h2 className="title-medium">An <span className="highlight-text">Award winning</span> Consultancy</h2>
        <Row gutter={80}>
          {awards.map((award,i) => {
            return (
              <Col md={6} lg={6} key={i} className="award-card">
                <img src={award.image} alt={award.alt} />
              </Col>
             
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default Awards;
