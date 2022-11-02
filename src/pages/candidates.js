import React from "react";
import { useLocation } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Candidates() {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <div className="candidates">
      <Row
        className={`langing-page-header`}
        // style={{ paddingBottom: padding }}
      >
        <Col md={6} sm={12}>
          <h6 className="subheading">Careers</h6>
          <h1 className="title">
            {pathname.includes("graduates")
              ? "Graduates recruitment"
              : "Experienced hires"}
          </h1>
        </Col>

        <Col md={6} sm={12} className="service">
          <p className="candidates-header">How to apply</p>
          <ul className="sector-card">
            <li>
              Candidates should email their CV / resume and covering letter to
              careers@connell-consulting.com
            </li>
            <li>
              Successful candidates are then invited to our office in London for
              an interview.
            </li>
            <li>We are now accepting applications for Business Analysts.</li>
          </ul>
        </Col>
      </Row>

      <Row style={{ marginBottom: "140px" }} className="candidates_wrapper">
        <Col className="role-and-package service" md={6} xs={12}>
          <div className="candidates-header">The role</div>
          {pathname.includes("graduates") ? (
            <>
              <p className="paragraph">
                Graduates will join Connell Consulting as Business Analysts.
                Business Analysts play a vital role in the team, conducting
                primary and secondary research, performing quantitative and
                qualitative analysis, drawing strategic conclusions with support
                from the wider team, and developing PowerPoint or Excel output
                for inclusion in the final report.
              </p>

              <p className="paragraph">
                Analysts may have the opportunity to take ownership of smaller
                projects early on, with the support of a Consultant, to help
                build responsibility and support rapid progression.{" "}
              </p>

              <p className="paragraph">
                Analysts will have the opportunity to attend client meetings and
                help present findings back to clients. They will also have the
                opportunity to attend sector conferences and networking events.
              </p>
            </>
          ) : (
            <>
              <p className="paragraph">
                Consultants typically join Connell Consulting as an experienced
                professional, with extensive proven experience of carrying out
                consulting work.
              </p>

              <p className="paragraph">
                As a Consultant you\’ll be responsible for managing teams in the
                design, development, and delivery of consulting projects. In
                delivering projects, you will be working in a team of
                like-minded professionals to create reports.
              </p>
              <p className="paragraph">
                You will be expected to assist with business proposals and
                development initiatives, including supporting the delivery of
                pitches for client work.
              </p>
              <p className="paragraph">
                There will be opportunities to participate in formal and
                informal learning, including attendance at sector conferences.
                There will also be a wide range of opportunities to represent
                Connell Consulting at networking events and awards evenings.
              </p>
            </>
          )}

          <div className="candidates-header">Package</div>
          <ul className="sector-card">
            <li>Full time role </li>
            <li>Competitive salary (subject to experience)</li>
            <li>25 days annual leave plus UK bank holidays</li>
            <li>Company pension scheme</li>
          </ul>
        </Col>

        <Col className="service application-criteria" md={6} xs={12}>
          <div className="candidates-header">Application criteria</div>
          {pathname.includes("graduates") ? (
            <p>
              We are currently looking for a Business Analyst who will
              compliment an existing team of Consultants, Researchers, and
              Knowledge Management staff across our business.
            </p>
          ) : (
            <>
              <p>
                We are always on the look-out for candidates with relevant
                experience, particularly of carrying out qualitative and
                quantitative research, managing others, and interacting with
                clients.
              </p>

              <p>
                Whilst prior experience of conducting consultancy work in the
                health, social care or education sectors is preferable, this is
                not a pre-requisite for the job. We are also keen to receive
                applications from candidates with experience in consulting
                (general), corporate finance or those with corporate
                backgrounds.
              </p>
            </>
          )}

          {pathname.includes("graduates") ? (
            <>
              <ul className="sector-card">
                <li>
                  A strong academic record, including a degree from a
                  world-class university
                </li>
                <li>
                  Self-starter mentality and a curiosity for solving business
                  problems
                </li>
                <li>
                  Excellent numeracy, written and verbal communication skills
                  (completely fluent written and spoken English)
                </li>
                <li>
                  Attention to detail and demonstrable analytical,
                  interpretative and problem-solving skills
                </li>
                <li>Strong team working and interpersonal skills </li>
                <li>
                  Excellent time management with proven ability to multi-task
                  and prioritise workload
                </li>
                <li>
                  Knowledge of key issues and current developments in the
                  health, social care and education sectors is desirable, but
                  not required
                </li>
                <li>
                  Adaptability and an ability to learn quickly and apply new
                  knowledge
                </li>
                <li>
                  Experience of working with MS Office (Word, Excel and
                  PowerPoint)
                </li>
                <li>
                  Experience of using Google apps or a good knowledge of UK
                  geography, as our projects are mainly UK based
                </li>
                <li>Right to work in the UK</li>
              </ul>
            </>
          ) : (
            <>
              <ul className="sector-card">
                <li>
                  A strong academic record, including an MBA from a top business
                  school OR an experienced professional
                </li>
                <li>
                  Self-starter mentality and a curiosity for solving business
                  problems
                </li>
                <li>
                  Excellent numeracy, written and verbal communication skills
                  (completely fluent written and spoken English)
                </li>
                <li>
                  Attention to detail and demonstrable analytical,
                  interpretative and problem-solving skills
                </li>
                <li>Strong team working and interpersonal skills </li>
                <li>
                  Excellent time management with proven ability to multi-task
                  and prioritise workload
                </li>
                <li>
                  Prior experience or avid interest in key issues and current
                  developments in the health, social care and education sectors
                </li>
                <li>Experience managing projects</li>
                <li>
                  Knowledge of consulting methodologies, tools and techniques
                  are desirable
                </li>
                <li>
                  Adaptability and an ability to learn quickly and apply new
                  knowledge
                </li>
                <li>
                  Experience of working with MS Office (Word, Excel and
                  PowerPoint)
                </li>
                <li>
                  Experience of using Google apps or a good knowledge of UK
                  geography, as our projects are mainly UK based
                </li>
                <li>Right to work in the UK</li>
              </ul>
            </>
          )}
        </Col>
      </Row>
    </div>
  );
}

export default Candidates;
