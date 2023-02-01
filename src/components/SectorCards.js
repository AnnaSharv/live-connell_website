import React from "react";
import {Row, Col} from 'antd'
import {Link} from 'react-router-dom'

function SectorCards() {
  return (
    <Row className="sectors-container container-custom" gutter={[20,20]}>
      <Col className="sector-card" xs={12} sm={12} md={8}>
        <span> <img src="https://www.connell-consulting.com/wp-content/uploads/2021/06/Patrick-Alex-Cheran_WEB-RES_012.jpg" width="100%" alt="" /></span>
        <Link to="social-care" ><p>Social Care</p></Link> 
      </Col>
      <Col className="sector-card" xs={12} sm={12} md={8}>
        <span> <img src="https://www.connell-consulting.com/wp-content/uploads/2021/06/Patrick-Alex-Cheran_WEB-RES_012.jpg" width="100%" alt="" /></span>
        <Link to="pharma-and-life-sciences"><p>Pharma & <br /> Life Sciences</p></Link>
      </Col>
      <Col className="sector-card" sm={24} md={8}>
        <span> <img src="https://www.connell-consulting.com/wp-content/uploads/2021/06/Patrick-Alex-Cheran_WEB-RES_012.jpg" width="100%" alt="" /></span>
        <Link to="healthcare"><p>Healthcare</p></Link>
      </Col>

      <Col className="sector-card" sm={24} md={12}>
        <span> <img src="https://www.connell-consulting.com/wp-content/uploads/2021/06/Patrick-Alex-Cheran_WEB-RES_012.jpg" width="100%" alt="" /></span>
        <Link to="children-care-and-education"><p>Children’s Care & Education</p></Link>
      </Col>
      <Col className="sector-card" sm={24} md={12}>
        <span> <img src="https://www.connell-consulting.com/wp-content/uploads/2021/06/Patrick-Alex-Cheran_WEB-RES_012.jpg" width="100%" alt="" /></span>
       <Link to="student-accommodation"> <p>Student <br /> Accommodation</p></Link>
      </Col>
    </Row>
  );
}

export default SectorCards;
