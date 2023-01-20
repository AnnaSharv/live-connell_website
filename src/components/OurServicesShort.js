import React from "react";
import {Col, Row, Card} from 'antd'
import Arrow from "../assets/images/arrow.svg";

function OurServicesShort() {
  return (
    <div className="OurServicesShort">
      <h2 className="title-medium">What <span className="highlight-text">we</span> do</h2>

      <div className="OurServicesShort-container">
        <Row gutter={20}>
          <Col span={8}>
            <Card bordered={false} 
            hoverable
            cover={<img alt="example" src="https://www.connell-consulting.com/wp-content/uploads/2022/01/Team-Filipa-focus-scaled.jpg" />
           }>
              <h2 className="title-regular text-start">Commercial Due Diligence <img alt="" src={Arrow} style={{"marginBottom": "5px"}} /></h2>
              <p className="text-regular">We specialise in delivering insightful primary market research incorporating competitor intelligence, funding and regulatory outlook, stakeholder interviews and supply/demand dynamics.</p>
            </Card>
          </Col>
          <Col span={8}>
            <Card bordered={false} 
              hoverable   
              cover={<img alt="example" src="https://www.connell-consulting.com/wp-content/uploads/2022/01/Team-Filipa-focus-scaled.jpg" /> 
            }>
             <h2 className="title-regular text-start">Strategy <img alt="" src={Arrow} style={{"marginBottom": "5px"}} /></h2>
              <p className="text-regular">We help clients assess reasons for sub-optimal performance of assets (property, IT, HR etc), competitor benchmarking and market opportunities</p>
              
            </Card>
          </Col>
          <Col span={8}>
            <Card  bordered={false} hoverable cover={<img alt="example" src="https://www.connell-consulting.com/wp-content/uploads/2022/01/Team-Filipa-focus-scaled.jpg" /> }>
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
