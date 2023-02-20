import React, {useState, useEffect} from "react";
import Header from '../components/Header'
import { Link } from "react-router-dom";
import {Row, Col, Card, Skeleton, Empty} from 'antd'
import {useLocation} from 'react-router-dom'

import parse from 'html-react-parser';

import { collection, getDocs, query, orderBy, where, limit } from "firebase/firestore";
import {db} from '../firebase.js'

import NoImage from '../assets/images/noimage.jpg'
import Img from '../assets/images/banners/news.png'
import { LazyLoadImage } from "react-lazy-load-image-component";

import formatDate from "../utils/formatBlogDate"; 

function News() { 
  const location = useLocation()
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(false)
  const [limitCount, setLimitCount] = useState(6)

 


  useEffect(() => {
    async function getData() {
      setLoading(true)
      const list = []
      let q;


      if(location.pathname.includes("all")) q = query(collection(db, "blogs"), orderBy("blog_date", "desc"), limit(limitCount));
      if(location.pathname.includes("recent-news")) q = query(collection(db, "blogs"), orderBy("blog_date", "desc"), where("blog_type", "array-contains", "news"), limit(limitCount));
      if(location.pathname.includes("awards")) q = query(collection(db, "blogs"), orderBy("blog_date", "desc"), where("blog_type", "array-contains", "awards"), limit(limitCount));
      if(location.pathname.includes("articles")) q = query(collection(db, "blogs"), orderBy("blog_date", "desc"), where("blog_type", "array-contains", "articles"), limit(limitCount));
      if(location.pathname.includes("deals")) q = query(collection(db, "blogs"), orderBy("blog_date", "desc"), where("blog_type", "array-contains", "deals"), limit(limitCount));
      

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        list.push({id: doc.id, data: doc.data()})
      });
      setNews(list)
      setLoading(false)
    }
    getData()
    // console.log("render")
  }, [location.pathname, limitCount])


  return (
    <div className="news">
      <Header title={"Our latest news"} subheading={"News"} image={Img} />
      <nav
        className="nav-right mbottom-80 container-custom"
        style={{ width: "fit-content", gridGap: "30px" }}
      >
        <Link to="all">
          <li className={location.pathname.includes("all") ? "active-link" : null}>
            All
          </li>
        </Link>
        <Link to="recent-news">
          <li className={location.pathname.includes("recent-news") ? "active-link" : null}>
            News
          </li>
        </Link>
        <Link
          to="awards"
          className={
            location.pathname.includes("awards") ? "active-link" : null
          }
        >
          <li> Awards </li>
        </Link>
        <Link
          to="articles"
          className={
            location.pathname.includes("articles") ? "active-link" : null
          }
        >
          <li> Articles </li>
        </Link>
        <Link
          to="deals"
          className={location.pathname.includes("deals") ? "active-link" : null}
        >
          <li> Deals </li>
        </Link>
      </nav>

      <Row
        gutter={[{xs:20, sm:40, md:60, lg:120}, 60]}
        className="transactions news-card-bg-transparent  container-custom"
      >
        {loading ? (
          <>
            <Col xs={12} md={8}>
              <Card bordered={false}>
                <Skeleton.Image style={{ marginBottom: "10px" }} active />
                <Skeleton active />
              </Card>
            </Col>
            <Col xs={12} md={8}>
              <Card bordered={false}>
                <Skeleton.Image style={{ marginBottom: "10px" }} active />
                <Skeleton active />
              </Card>
            </Col>
            <Col xs={12} md={8}>
              <Card bordered={false}>
                <Skeleton.Image style={{ marginBottom: "10px" }} active />
                <Skeleton active />
              </Card>
            </Col>
          </>
        ) : (
          <>
          {
            news.length > 0 ? news.map((n,i) => {
              let {data} = n 
             let str = data.blog_title.toLowerCase().split(" ").join("-")
             str = str.substring(0, 50);
              if (data.blog_status === 'active') {
                  return (
                  <Col xs={12} md={8} key={i}>
                    <Link to={`blogs/${str}?id=${n.id}`}>
                      <Card
                        bordered={false}
                        hoverable
                        cover={
                          <LazyLoadImage
                            effect="blur"
                            width={'100%'}
                            alt="example"
                            src={data.imgArr[0]?.blog_image || NoImage}
                            // onError={() => setImagePlaceholder(true)}
                          />
                        }
                      >
                        <h6 style={{
                          "fontSize": "12px",
                          "fontFamily": 'MonserratMedium',
                          "marginBottom": "-12px"
                        }}>
                          {/* {data.blog_date} */}
                          {formatDate(data.blog_date)}
                        </h6>
                        <h6 className="text-elipse text-elipse-four-lines text-regular text-regular-bold">
                          {parse(data.blog_title)}
                        </h6>
                        <div className="text-regular text-elipse text-elipse-small">
                          {parse(data.blog_body)}
                        </div>
                      </Card>
                    </Link>
                </Col>
                )
              }
              
            }) :
            <Empty style={{"margin": "auto", "fontFamily": 'MonserratMedium'}}
              description={
                <span>
                  There's no data
                </span>
              }
            />
          }
          </>
        )}
      </Row>

      {news.length > 0 &&
        <button
          className="d-flex justify-content-center align-items-center border-0 button-solid mx-auto"
          style={{ margin: "60px 0 160px" }}
          onClick={() => {
            setLimitCount(limitCount + 6)
          }}
           disabled={limitCount > news.length}
        >
          More articles
        </button>}
    </div>
  );
}

export default News;
