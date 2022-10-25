import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";

import Img from "../assets/images/Team-Filipa-focus-scaled.jpg";

import Header from "../components/Header.js";
import Graduates from "./candidates";

function careers() {
  return (
    <div className="careers">
      <Header
        subheading="Careers"
        title="A rewarding career"
        paragraphs={[
          "Connell Consulting has a highly skilled team of Analysts and Consultants with a wealth of experience across the health, social care and education sectors. As a market leading company that offers our clients detailed sector knowledge combined with commercial insight, we work with leading investors, banks, and operators on new and exciting opportunities.",
          "We are interested in receiving applications from smart and driven candidates who are seeking to support the delivery of commercial due diligence and strategic reports for clients across the health, social care and education sectors.",
        ]}
        img={Img}
        order="imageText"
      />

      <Row className="careers-info">
        <Col md={6} sm={12}>
          <h1 className="candidate-requirements-header">
            Candidates interested in joining Connell Consulting should have:
          </h1>

          <div className="candidate-requirements-container">
            <p>
              A strong academic record, including an MBA from a top business
              school OR an experienced professional
            </p>
            <p>
              Self-starter mentality and a curiosity for solving business
              problems
            </p>
            <p>
              Excellent numeracy, written and verbal communication skills
              (completely fluent written and spoken English)
            </p>
            <p>
              Attention to detail and demonstrable analytical, interpretative
              and problem-solving skills
            </p>
            <p>Strong team working and interpersonal skills</p>
            <p>
              Excellent time management with proven ability to multi-task and
              prioritise workload
            </p>
            <p>
              Knowledge of key issues and current developments in the health,
              social care and education sectors is desirable, but not required
            </p>
            <p>
              Adaptability and an ability to learn quickly and apply new
              knowledge
            </p>
            <p>
              Experience of working with MS Office (Word, Excel and PowerPoint)
            </p>
            <p>
              Experience of using Google apps or a good knowledge of UK
              geography, as our projects are mainly UK based
            </p>
            <p>Right to work in the UK</p>
          </div>
        </Col>
        <Col md={6} sm={12}>
          <p className="paragraph">
            Whilst the nature of consulting means that we are a hardworking
            team, we understand the importance of maintaining a healthy
            work-life balance. We are also committed to building a diverse
            workforce.
          </p>

          <p className="paragraph mb-0">
            The business operates a flat hierarchy system, providing a wide
            range of opportunities for self-starters to get involved from day
            one, be that through contribution to projects and solving client
            problems, attending external engagements and network events, or
            getting involved with internal operations, such as marketing,
            recruitment, or training.
          </p>

          <div className="button-group" md={12} xs={12}>
            <Link to="graduates">
              <Button className="btn-custom">Graduates recruitment</Button>
            </Link>
            <Link to="experienced-hires">
              <Button className="btn-custom">Experienced hires</Button>
            </Link>

           
          </div>

          <h2 className="candidate-requirements-header mb-4">FAQ</h2>

          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Do you sponsor visas for international applicants?
              </Accordion.Header>
              <Accordion.Body>
                Unfortunately, we are not currently able to sponsor visas for
                Interns, Students and graduates, or Experienced hires.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                When do you start to review applications?
              </Accordion.Header>
              <Accordion.Body>
                Applications made to Connell Consulting are reviewed on a
                rolling basis. If we are actively recruiting into a specific
                role, we advise submitting your application in advance of the
                application deadline.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Are there opportunities to intern with Connell Consulting?
              </Accordion.Header>
              <Accordion.Body>
                Internship opportunities may be available over the summer
                period. Please get in touch with careers@connell-consulting.com
                to see if there are any openings before submitting an
                application.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                I’ve been working for a few years but have never worked in
                consulting before. Is there scope to join Connell Consulting as
                an experienced hire?
              </Accordion.Header>
              <Accordion.Body>
                Most of our experienced hires have had some previous experience
                within strategy consulting. We do however accept applications
                for Analyst roles from people who have no directly relevant
                consulting experience.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </div>
  );
}

export default careers;
