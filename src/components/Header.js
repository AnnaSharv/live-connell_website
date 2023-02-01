import { Col, Row,  Button } from 'antd';
import {Carousel as Mycarousel} from 'antd'
import Arrow from '../assets/images/arrow.svg'
import {Link} from 'react-router-dom'

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
function Header({
  carousel,
  subheading,
  title,
  backGroundImageSrc,
  paragraphs,
  highlight,
  img,
  statistics,
  imageplural,
  padding,
  myClass
}) {
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
          <Row gutter={[0,30]} className={`langing-page-header ${myClass}`} style={{paddingBottom: padding}}>
            <Col sm={24} md={12} className=" container-custom padding-block">
              {subheading && <h6 className="subheading">{subheading}</h6>}
              <h1 className="title">{title}</h1>
              <Link to="transactions"><Button type='primary button-outline'>Recent transactions <img src={Arrow} width="10" /> </Button></Link>  
            </Col>
            <Col  sm={24} md={12} className="gradient-image-banner">
               <img src={"https://www.connell-consulting.com/wp-content/uploads/2022/05/Full-Team-A-Hi-Res-scaled.jpg"} alt="" width="100%" height="100%" style={{"maxHeight":"437px", "zIndex":"1"}}/>
            </Col>
          </Row> 
          <Row gutter={[0,30]} className={`langing-page-header ${myClass}`} style={{paddingBottom: padding}}>
            <Col sm={24} md={12} className=" container-custom padding-block">
              {subheading && <h6 className="subheading">{subheading}</h6>}
              <h1 className="title">{title}</h1>
            <Link to="transactions"><Button type='primary button-outline'>Recent transactions <img src={Arrow} width="10" /> </Button></Link>  
            </Col>
            <Col  sm={24} md={12} className="gradient-image-banner">
               <img src={"https://www.connell-consulting.com/wp-content/uploads/2022/05/Full-Team-A-Hi-Res-scaled.jpg"} alt="" width="100%" height="100%" style={{"maxHeight":"437px", "zIndex":"1"}}/>
            </Col>
          </Row> 
      </Mycarousel>
      }
      

     
    </>
  );
}

export default Header;
