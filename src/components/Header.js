import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Carousel, Button } from 'antd';
import Arrow from '../assets/images/arrow.svg'

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
  order,
  padding,
  myClass
}) {
  return (
    <>
    {
    !carousel 
     ? 
      <Row className={`langing-page-header mbottom-80 ${myClass} ${order}`} style={{paddingBottom: padding}}>
        <Col lg={6} md={12} sm={12}>
          {subheading && <h6 className="subheading">{subheading}</h6>}
          <h1 className="title">{title}</h1>
        </Col>
         <Col md={6} sm={12} className="gradient-image" style={{"backgroundImage": "linear-gradient( 60deg, rgba(0, 0, 0, 0.0), rgba(29, 70, 150, 0.6)), url(https://www.connell-consulting.com/wp-content/uploads/2019/11/Team_hi-res_015-980x700.jpg)"}}></Col>
      </Row> 
      : 
        <Carousel className='my-carousel' >
            <Row className={`langing-page-header ${myClass} ${order}`} style={{paddingBottom: padding}}>
              <Col lg={6} md={12} sm={12}>
                {subheading && <h6 className="subheading">{subheading}</h6>}
                <h1 className="title">{title}</h1>
                <Button type='primary button-outline'>Recent transactions <img src={Arrow} width="10" /> </Button>
              </Col>
              <Col md={6} sm={12} className="gradient-image" style={{"backgroundImage": "linear-gradient( 60deg, rgba(0, 0, 0, 0.0), rgba(29, 70, 150, 0.6)), url(https://www.connell-consulting.com/wp-content/uploads/2022/05/Full-Team-A-Hi-Res-scaled.jpg)"}}>
                
              </Col>
            </Row> 
            <Row className={`langing-page-header ${myClass} ${order}`} style={{paddingBottom: padding}}>
              <Col lg={6} md={12} sm={12}>
                {subheading && <h6 className="subheading">{subheading}</h6>}
                <h1 className="title">{title}</h1>
              </Col>
              <Col md={6} sm={12} className="gradient-image" style={{"backgroundImage": "linear-gradient( 60deg, rgba(0, 0, 0, 0.0), rgba(29, 70, 150, 0.6)), url(https://www.connell-consulting.com/wp-content/uploads/2022/05/Full-Team-A-Hi-Res-scaled.jpg)"}}>
                
              </Col>
            </Row> 
            <Row className={`langing-page-header ${myClass} ${order}`} style={{paddingBottom: padding}}>
              <Col lg={6} md={12} sm={12}>
                {subheading && <h6 className="subheading">{subheading}</h6>}
                <h1 className="title">{title}</h1>
              </Col>
              <Col md={6} sm={12} className="gradient-image" style={{"backgroundImage": "linear-gradient( 60deg, rgba(0, 0, 0, 0.0), rgba(29, 70, 150, 0.6)), url(https://www.connell-consulting.com/wp-content/uploads/2022/05/Full-Team-A-Hi-Res-scaled.jpg)"}}>
                
              </Col>
            </Row> 
        
       
      </Carousel>
      }
      

     
    </>
  );
}

export default Header;
