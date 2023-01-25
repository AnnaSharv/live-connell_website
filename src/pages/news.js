import React from "react";
import Header from '../components/Header'
import { Link } from "react-router-dom";
import {Row, Col, Card} from 'antd'
import {useLocation} from 'react-router-dom'



function News() {
  const location = useLocation()
  return (
    <div className="news">
        <Header
          title={"Our latest news"}
          subheading={"News"}
        />
        <nav
          className="nav-right mbottom-80 container-custom"
          style={{ width: "fit-content", gridGap: "30px" }}
        >
          <Link to="all"><li className={location.pathname.includes("all") ? "active-link" : null}> All  </li>
          </Link>
          <Link to="awards" className={location.pathname.includes("awards") ? "active-link" : null}><li> Awards </li>
          </Link>
          <Link to="articles" className={location.pathname.includes("articles") ? "active-link" : null}><li> Articles </li>
          </Link>
          <Link to="deals" className={location.pathname.includes("deals") ? "active-link" : null}><li> Deals </li>
          </Link>
        </nav>
  

     
        <Row gutter={[20,20]} className="transactions news-card-bg-transparent  container-custom">
          <Col xs={12} md={8}>
            <Card bordered={false} 
            hoverable
            cover={<img alt="example" src="https://www.connell-consulting.com/wp-content/uploads/2021/06/Patrick-Alex-Cheran_WEB-RES_012.jpg" />
           }>
              <h6 className="text-elipse text-elipse-small text-regular text-regular-bold">Connell Consulting produced vendor commercial due diligence to support the sale of Balhousie Care Group to AcalisCare.</h6>
              <p className="text-regular text-elipse text-elipse-small">We specialise in delivering insightful primary market research incorporating competitor intelligence, funding and regulatory outlook, stakeholder interviews and supply/demand dynamics.</p>
            </Card>
          </Col>
          <Col xs={12} md={8}>
            <Card bordered={false} 
            hoverable
            cover={<img alt="example" src="https://www.connell-consulting.com/wp-content/uploads/2021/06/Patrick-Alex-Cheran_WEB-RES_012.jpg" />
           }>
              <h6 className="text-elipse text-elipse-small text-regular text-regular-bold">Connell Consulting produced vendor commercial due diligence to support the sale of Balhousie Care Group to AcalisCare.</h6>
              <p className="text-regular text-elipse text-elipse-small">We specialise in delivering insightful primary market research incorporating competitor intelligence, funding and regulatory outlook, stakeholder interviews and supply/demand dynamics.</p>
            </Card>
          </Col>
          <Col xs={12} md={8}>
            <Card bordered={false} 
            hoverable
            cover={<img alt="example" src="https://www.connell-consulting.com/wp-content/uploads/2021/06/Patrick-Alex-Cheran_WEB-RES_012.jpg" />
           }>
              <h6 className="text-elipse text-elipse-small text-regular text-regular-bold">Connell Consulting produced vendor commercial due diligence to support the sale of Balhousie Care Group to AcalisCare.</h6>
              <p className="text-regular text-elipse text-elipse-small">We specialise in delivering insightful primary market research incorporating competitor intelligence, funding and regulatory outlook, stakeholder interviews and supply/demand dynamics.</p>
            </Card>
          </Col>
          
      
        </Row>


      <button className="d-flex justify-content-center align-items-center border-0 button-solid mx-auto" style={{"margin": "60px 0 160px"}}>More articles</button>
    </div>
  );
}

export default News;
