import React from "react";
import {Col, Row, Card} from 'antd'

import {transactions} from '../data/transactions.js'


function Transactions() {

  return (
    <div className="transactions">
      
        <h2 className="title-medium"> Recent Transactions  </h2>
      
        <Row gutter={20}>
          <Col sm={24} md={6}>
            <Card bordered={false} 
            title="Year 2022"
            hoverable
            cover={<img alt="example" src="https://www.connell-consulting.com/wp-content/uploads/2022/01/Tombstone-vendor-CDD-for-the-sale-of-Ludlow-Street-Healthcare-to-Ancala-Partners.png" />
           }>
              <p className="text-regular text-elipse text-elipse-small">We specialise in delivering insightful primary market research incorporating competitor intelligence, funding and regulatory outlook, stakeholder interviews and supply/demand dynamics.</p>
            </Card>
          </Col>
          <Col sm={24} md={6}>
            <Card bordered={false} 
            title="Year 2022"
            hoverable
            cover={<img alt="example" src="https://www.connell-consulting.com/wp-content/uploads/2023/01/Tombstone-Investor-CDD-of-Amesbury-by-Learn-to-live-3.png" />
           }>
              <p className="text-regular text-elipse text-elipse-small">We specialise in delivering insightful primary market research incorporating competitor intelligence, funding and regulatory outlook, stakeholder interviews and supply/demand dynamics.</p>
            </Card>
          </Col>
          <Col sm={24} md={6}>
            <Card bordered={false} 
            title="Year 2022"
            hoverable
            cover={<img alt="example" src="https://www.connell-consulting.com/wp-content/uploads/2023/01/Tombstone-Investor-CDD-of-Cavendish-Care-by-ivolve-3.png" />
           }>
              <p className="text-regular text-elipse text-elipse-small">We specialise in delivering insightful primary market research incorporating competitor intelligence, funding and regulatory outlook, stakeholder interviews and supply/demand dynamics.</p>
            </Card>
          </Col>
          <Col sm={24} md={6}>
            <Card bordered={false} 
            title="Year 2022"
            hoverable
            cover={<img alt="example" src="https://www.connell-consulting.com/wp-content/uploads/2023/01/Tombstone-Investor-CDD-of-Amesbury-by-Learn-to-live-3.png" />
           }>
              <p className="text-regular text-elipse text-elipse-small">We specialise in delivering insightful primary market research incorporating competitor intelligence, funding and regulatory outlook, stakeholder interviews and supply/demand dynamics.</p>
            </Card>
          </Col>
      
        </Row>
    </div>
  );
}

export default Transactions;
