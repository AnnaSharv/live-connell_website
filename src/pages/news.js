import React from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import Img1 from "../assets/images/Saiyna-George-Charlotte-Lilya_WEB-RES_009 2-2.jpg";
// import "Img2" from "../assets/images/Saiyna-George-Charlotte-Lilya_WEB-RES_009 2-1.jpg";

function news() {
  return (
    <div className="news">
      <div className="news-header">
        <h6 className="subheading text-center">News</h6>
        <h1 className="title text-center w-100 mx-auto">Our latest news</h1>
        <nav
          className="nav-left mx-auto "
          style={{ width: "fit-content", gridGap: "30px" }}
        >
          <Link to="all"><li> All </li>
          </Link>
          <Link to="awards"><li> Awards </li>
          </Link>
          <Link to="articles"><li> Articles </li>
          </Link>
          <Link to="deals"><li> Deals </li>
          </Link>
        </nav>
      </div>

      <Row className="newsfeed justify-content-between">
        <Col className="col news-card">
          <Card className="border-0" style={{ width: "270px" }}>
            <Card.Img variant="top" src={"Img1"} />
            <Card.Body className="px-0">
              <Card.Title>
                Connell Consulting produced vendor commercial due diligence to
                support the sale of Balhousie Care Group to AcalisCare.
              </Card.Title>
              <Card.Text>
                The award-winning Balhousie Care Group is entering a new chapter
                of growth thanks to a purchase deal with
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col news-card">
          <Card className="border-0" style={{ width: "270px" }}>
            <Card.Img variant="top" src={"Img2"} />
            <Card.Body className="px-0">
              <Card.Title>
                Connell Consulting produced vendor commercial due diligence to
                support the sale of Balhousie Care Group to AcalisCare.
              </Card.Title>
              <Card.Text>
                The award-winning Balhousie Care Group is entering a new chapter
                of growth thanks to a purchase deal with
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col news-card">
          <Card className="border-0" style={{ width: "270px" }}>
            <Card.Img variant="top" src={"Img2"} />
            <Card.Body className="px-0">
              <Card.Title>
                Connell Consulting produced vendor commercial due diligence to
                support the sale of Balhousie Care Group to AcalisCare.
              </Card.Title>
              <Card.Text>
                The award-winning Balhousie Care Group is entering a new chapter
                of growth thanks to a purchase deal with
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col news-card">
        <Card className="border-0" style={{ width: "270px" }}>
          <Card.Img variant="top" src={"Img2"} />
          <Card.Body className="px-0">
            <Card.Title>
              Connell Consulting produced vendor commercial due diligence to
              support the sale of Balhousie Care Group to AcalisCare.
            </Card.Title>
            <Card.Text>
              The award-winning Balhousie Care Group is entering a new chapter
              of growth thanks to a purchase deal with
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
        <Col className="col news-card">
          <Card className="border-0" style={{ width: "270px" }}>
            <Card.Img variant="top" src={"Img2"} />
            <Card.Body className="px-0">
              <Card.Title>
                Connell Consulting produced vendor commercial due diligence to
                support the sale of Balhousie Care Group to AcalisCare.
              </Card.Title>
              <Card.Text>
                The award-winning Balhousie Care Group is entering a new chapter
                of growth thanks to a purchase deal with
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>


      <button className="d-flex justify-content-center align-items-center border-0 btn-custom mx-auto" style={{"margin": "60px 0 160px"}}>More articles</button>
    </div>
  );
}

export default news;
