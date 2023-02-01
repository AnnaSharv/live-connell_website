import React from "react";
import {Card} from 'antd'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Transactions(props) {
  const settings = {
 
      infinite: true,
      slidesToShow: props.modal ? 3 : 4,
      slidesToScroll: 1,
      autoplay:  true,
      speed: 4000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
           
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <div className="transactions">
        <h2 className="title-medium mbottom-30 container-custom"> Recent Transactions  </h2>

        <Slider {...settings} className={props.modal ? "container-custom pr-custom" : "container-custom pr-custom"}>
        <Card bordered={false} 
            title="Year 2022"
            hoverable
            cover={<img alt="example" src="https://www.connell-consulting.com/wp-content/uploads/2023/01/Tombstone-Investor-CDD-of-Amesbury-by-Learn-to-live-3.png" />
           }>
              <p className="text-regular text-elipse text-elipse-small">We specialise in delivering insightful primary market research incorporating competitor intelligence, funding and regulatory outlook, stakeholder interviews and supply/demand dynamics.</p>
          </Card>
          <Card bordered={false} 
            title="Year 2022"
            hoverable
            cover={<img alt="example" src="https://www.connell-consulting.com/wp-content/uploads/2023/01/Tombstone-Investor-CDD-of-Amesbury-by-Learn-to-live-3.png" />
           }>
              <p className="text-regular text-elipse text-elipse-small">We specialise in delivering insightful primary market research incorporating competitor intelligence, funding and regulatory outlook, stakeholder interviews and supply/demand dynamics.</p>
          </Card>
          <Card bordered={false} 
            title="Year 2022"
            hoverable
            cover={<img alt="example" src="https://www.connell-consulting.com/wp-content/uploads/2023/01/Tombstone-Investor-CDD-of-Amesbury-by-Learn-to-live-3.png" />
           }>
              <p className="text-regular text-elipse text-elipse-small">We specialise in delivering insightful primary market research incorporating competitor intelligence, funding and regulatory outlook, stakeholder interviews and supply/demand dynamics.</p>
          </Card>
          <Card bordered={false} 
            title="Year 2022"
            hoverable
            cover={<img alt="example" src="https://www.connell-consulting.com/wp-content/uploads/2023/01/Tombstone-Investor-CDD-of-Amesbury-by-Learn-to-live-3.png" />
           }>
              <p className="text-regular text-elipse text-elipse-small">We specialise in delivering insightful primary market research incorporating competitor intelligence, funding and regulatory outlook, stakeholder interviews and supply/demand dynamics.</p>
          </Card>
          <Card bordered={false} 
            title="Year 2022"
            hoverable
            cover={<img alt="example" src="https://www.connell-consulting.com/wp-content/uploads/2023/01/Tombstone-Investor-CDD-of-Amesbury-by-Learn-to-live-3.png" />
           }>
              <p className="text-regular text-elipse text-elipse-small">We specialise in delivering insightful primary market research incorporating competitor intelligence, funding and regulatory outlook, stakeholder interviews and supply/demand dynamics.</p>
          </Card>
        </Slider>

    </div>
  );
}

export default Transactions;
