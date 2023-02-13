import {useState, useEffect} from 'react'
import { Col, Row,  Button, Spin } from 'antd';
import {Carousel as Mycarousel} from 'antd'
import Arrow from '../assets/images/arrow.svg'
import {Link} from 'react-router-dom'
import parse from 'html-react-parser';

import { collection, getDocs, query, orderBy, where, limit } from "firebase/firestore";
import {db} from '../firebase.js'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
function Header({carousel, subheading, title, backGroundImageSrc, paragraphs, highlight, img, statistics, imageplural, padding, myClass}) {
  const [sliders, setSliders] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function getData() {
      setLoading(true)
      const list = []
      let q = query(collection(db, "sliders"), orderBy("timeStamp", "desc"))
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        list.push({id: doc.id, data: doc.data()})
      });
      setSliders(list)
      setLoading(false)
    }
    getData()
  }, [])

  return (
    <>
    {
    !carousel 
     ? 
      <Row gutter={[0,30]} className={`langing-page-header mbottom-80 pbottom ${myClass}`} style={{paddingBottom: padding}}>
        <Col sm={24}  md={12} className="container-custom padding-block">
          {subheading && <h6 className="subheading">{subheading}</h6>}
          <h1 className="title m-0">{title}</h1>
        </Col>
         <Col sm={24}  md={12} className="gradient-image-banner"> 
            <img src={"https://www.connell-consulting.com/wp-content/uploads/2019/11/Team_hi-res_015-980x700.jpg"} alt="" width="100%" height="280px"/>
         </Col>
         {/* <Col md={6} sm={12} className="gradient-image" style={{"backgroundImage": "linear-gradient( 60deg, rgba(0, 0, 0, 0.0), rgba(29, 70, 150, 0.6)), url(https://www.connell-consulting.com/wp-content/uploads/2019/11/Team_hi-res_015-980x700.jpg)"}}></Col> */}
      </Row> 
      : 
        <Mycarousel className='my-carousel' >
          {
            sliders.length > 0 ?
              sliders.map((slider,i) => {
                return (
                  slider.data.slider_status === "active" && 
                  <Row
                    key={i}
                    gutter={[0, 30]}
                    className={`langing-page-header ${myClass}`}
                    style={{ paddingBottom: padding }}
                  >
                    <Col
                      sm={24}
                      md={12}
                      className=" container-custom padding-block"
                    >
                      {slider.data.slider_subheading && (
                        <h6 className="subheading">{slider.data.slider_subheading}</h6>
                      )}
                      <h1 className="title text-elipse">{slider.data.slider_description && parse(slider.data.slider_description) }</h1>

                      {
                        slider.data.slider_button !== 'Select button' &&
                        <Link to={slider.data.slider_button === "news" ? "news/all" : slider.data.slider_button}>
                          <Button type="primary button-outline">
                            See more in {slider.data.slider_button.toUpperCase()} <img src={Arrow} width="10" />{" "}
                          </Button>
                        </Link>
                      }
                     
                    </Col>
                    <Col sm={24} md={12} className="gradient-image-banner">
                      <LazyLoadImage
                        src={slider.data.slider_image}
                        alt="carousel-image"
                        width="100%"
                        height="100%"
                        style={{ maxHeight: "437px", zIndex: "1" }}
                        effect="blur"
                      />
                    </Col>
                  </Row>
                );
              })

            : <Spin />
          }
      </Mycarousel>
      }
      

     
    </>
  );
}

export default Header;
