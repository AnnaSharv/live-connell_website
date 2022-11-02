import CountUp from 'react-countup'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Header({
  subheading,
  title,
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
      <Row className={`langing-page-header ${myClass} ${order}`} style={{paddingBottom: padding}}>
        {/* title & body */}
        <Col lg={6} md={12} sm={12}>
          {subheading && <h6 className="subheading">{subheading}</h6>}
          <h1 className="title">{title}</h1>

          {paragraphs &&
            paragraphs.map((paragraph, i) => {
              return (
                <p className={`paragraph ${highlight && "highlight"}`} key={i}>
                  {paragraph}
                </p>
              );
            })}

          {statistics && (
            <div className="statistics">
              <div>
                {/* <span className="numbers">423</span> */}
                <CountUp className="numbers" end={423} suffix="%" duration={2} style={{"minWidth":"115px"}}/>
                <span>
                  Over <br /> engagements
                </span>
              </div>
              <div>
                {/* <span className="numbers"> 67%</span> */}
                <CountUp className="numbers" end={67} suffix="%" duration={2} style={{"minWidth":"96px"}}/>
                <span>
                  Repeat <br /> business
                </span>
              </div>
            </div>
          )}
        </Col>

        {img && (
          <Col lg={6} md={12} sm={12}>
          <img src={img} alt="Connell-consulting" className="image" />
        </Col>
        )}

        {imageplural && (
          <Col md={6} sm={12} className="multiImage">
            {imageplural.map((img,i) => {
              return <img src={img} alt="Connell-consulting" className="image" key={i}/>
            })}
          
     
        </Col>
        )}
      </Row>
    </>
  );
}

export default Header;
