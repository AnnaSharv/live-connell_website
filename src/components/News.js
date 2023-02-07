import React, {useEffect, useState} from "react";
import {Col, Row} from 'antd'

import {transactions} from '../data/transactions.js'

import parse from 'html-react-parser';
import Img1 from '../assets/images/Clare-Goncalo-and-team-scaled 18.jpg'


import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import {db} from '../firebase.js'
import { LazyLoadImage } from "react-lazy-load-image-component";

function News() {
  const [news, setNews] = useState([])

  useEffect(() => {
    async function getData() {
      const list = []
      const q = query(collection(db, "blogs"), orderBy("blog_date", "desc"), limit(5));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        list.push({id: doc.id, data: doc.data()})
      });
      setNews(list)
    }
    getData() 
  }, [])

  return (
    <div className="news container-custom">
      
        <h2 className="title-medium text-start text-center">Our <span className="highlight-text">latest</span> news </h2>
      
     <Row gutter={[20, 30]} className="mbottom-80">
       <Col lg={12} md={12} sm={24}>
          
          <LazyLoadImage title={news[0]?.data?.imgArr[0]?.blog_image_name} alt={news[0]?.data?.imgArr[0]?.blog_image_name} src={news[0]?.data?.imgArr[0]?.blog_image} width="100%" effect="blur" style={{"maxHeight": "383px", "objectFit": "cover"}}/>

          <div className="recent-news">
              <h6 className="sup">{news[0]?.data?.blog_date}</h6>
              <h2 className="title-regular text-start text-elipse text-elipse-two-lines" style={{"marginBottom": "10px"}}>{news[0]?.data?.blog_title}</h2>
              <div className="text-regular text-elipse">{news[0]?.data?.blog_body && parse(news[0].data.blog_body)}</div>
          </div>
        </Col>
        <Col lg={12} md={12} sm={24} style={{"display":"flex", "flexWrap":"wrap"}}>

            <div className="news-grid-small">
                <div className="news-card">
                    <p className="header text-elipse text-elipse-small">{news[1]?.data?.blog_title}</p>
                    <button className="read-more-btn"> Read more </button>
                </div>
                <div className="news-card">
                    <p className="header text-elipse text-elipse-small">{news[2]?.data?.blog_title}</p>
                    <button className="read-more-btn"> Read more </button>
                </div>
                <div className="news-card">
                    <p className="header text-elipse text-elipse-small">{news[3]?.data?.blog_title}</p>
                    <button className="read-more-btn"> Read more </button>
                </div>
                <div className="news-card">
                    <p className="header text-elipse text-elipse-small">{news[4]?.data?.blog_title}</p>
                    <button className="read-more-btn"> Read more </button>
                </div>

                     
                
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
