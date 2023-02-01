import React, {useEffect} from "react";
import {Col, Row} from 'antd'

import {transactions} from '../data/transactions.js'

import Img1 from '../assets/images/Clare-Goncalo-and-team-scaled 18.jpg'

function News() {

  useEffect(() => {
    const el = document.querySelector(".recent-news")
    const mycss = window.getComputedStyle(el, null)
    const cssheight = mycss.getPropertyValue("height")


console.log(cssheight)
  }, [])

  return (
    <div className="news container-custom">
      
        <h2 className="title-medium text-start text-center">Our <span className="highlight-text">latest</span> news </h2>
      
     <Row gutter={[20, 30]} className="mbottom-80">
       <Col lg={12} md={12} sm={24}>
          
          <img alt="" src={Img1} width="100%" />

          <div className="recent-news">
              <h6 className="sup">Sep 22/2022</h6>
              <h2 className="title-regular text-start" style={{"marginBottom": "10px"}}>Vendor CDD for the sale of Sequence Care Group to Intriva Capital</h2>
              <p className="text-regular text-elipse">Connell Consulting are delighted to have won the Social Care Premier Supplier Consultancies Award for the second consecutive year. A panel of independent judges, agreed that 'Connell Consulting's advice and diligence provided through both experience and expertise has...ltancies Award for the second consecutive year. A panel of independent judges, agreed that 'Connell Consulting's advice and dil...</p>
          </div>
        </Col>
        <Col lg={12} md={12} sm={24} style={{"display":"flex", "flexWrap":"wrap"}}>
            {/* <Row gutter={[{xs:10, sm:10},20]} className="news-grid">
              {transactions.map((transaction) => {
                  return (
                      <Col className="news-card" key={transaction.id} xs={12} sm={12}  lg={12} >
                          <p className="header text-elipse text-elipse-small">{transaction.header}</p>
                          <button className="read-more-btn"> Read more </button>
                      </Col>
                  )
              })}
             <div className="news-img">
                 <img alt="" src={Img1}/>
                 <p className="p-light">Vendor CDD for the sale of Sequence Care Group to Intriva Capital</p>
              </div>
            </Row> */}

            <div className="news-grid-small">
            {transactions.map((transaction) => {
                  return (
                      <div className="news-card" key={transaction.id} >
                          <p className="header text-elipse text-elipse-small">{transaction.header}</p>
                          <button className="read-more-btn"> Read more </button>
                      </div>
                  )
              })}
             <div className="news-img">
                 <img alt="" src={Img1}/>
                 <p className="p-light">Vendor CDD for the sale of Sequence Care Group to Intriva Capital</p>
              </div>
            </div>

        </Col>
     </Row>
    </div>
  );
}

export default News;
