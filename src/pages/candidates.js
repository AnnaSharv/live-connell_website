import React from "react";
import { useLocation } from "react-router-dom";
import { Row, Col } from "antd";
import Header from "../components/Header";
import Img from '../assets/images/banners/news.png'
import Img_graduates from '../assets/images/careers/Screenshot New 1219 7 5.jpg'
import Img_experienced from '../assets/images/careers/Screenshot New 1219 7 5-1.jpg'
import Banner_graduates from '../assets/images/careers/Graduates Page - Cheran and Safia (1).jpg'
import Banner_experienced from '../assets/images/careers/Experienced Hires Page - Matt Cheran (1).jpg'
import { LazyLoadImage } from "react-lazy-load-image-component";


function Candidates() {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <div className="candidates">
      <Header
        title={
          pathname.includes("graduates")
            ? "Graduates recruitment"
            : "Experienced hires"
        }
        subheading={"Careers"}
        image={
          pathname.includes("graduates")
          ? Banner_graduates
          : Banner_experienced
        }
        imageposition={
          pathname.includes("graduates")
          ? null
          : "candidates_experienced"
        }
      />

      <div className="service container-custom">
        <div className="title-medium text-start mt-0">The role</div>
        {pathname.includes("graduates") ? (
          <Row gutter={20} className="mbottom-80">
            <Col className="text-decor" sm={24} md={12}>
              Graduates will join <strong> Connell Consulting </strong> as
              Business Analysts. Business Analysts play a vital role in the
              team, conducting primary and secondary research, performing
              quantitative and qualitative analysis, drawing strategic
              conclusions with support from the wider team, and developing
              PowerPoint or Excel output for inclusion in the final report.
            </Col>
            <Col className="text-loose" sm={24} md={12}>
              Analysts may have the opportunity to take ownership of smaller
              projects early on, with the support of a Consultant, to help build
              responsibility and support rapid progression. Analysts will have
              the opportunity to attend client meetings and help present
              findings back to clients. They will also have the opportunity to
              attend sector conferences and networking events.
            </Col>
          </Row>
        ) : (
          <Row gutter={20} className="mbottom-80">
            <Col className="text-decor" sm={24} md={12}>
              Consultants typically join Connell Consulting as an experienced
              professional, with extensive proven experience of carrying out
              consulting work. <br /> <br />
              As a Consultant you’ll be responsible for managing teams in the
              design, development, and delivery of consulting projects. In
              delivering projects, you will be working in a team of like-minded
              professionals to create reports.
            </Col>
            <Col className="text-loose" sm={24} md={12}>
              You will be expected to assist with business proposals and
              development initiatives, including supporting the delivery of
              pitches for client work. <br />
              There will be opportunities to participate in formal and informal
              learning, including attendance at sector conferences. There will
              also be a wide range of opportunities to represent Connell
              Consulting at networking events and awards evenings.
            </Col>
          </Row>
        )}
      </div>

      <Row gutter={[20,30]} className="mtop-80 container-custom">
        <Col sm={24} md={12}>
          {location.pathname.includes("graduates") ? (
            <LazyLoadImage effect="blur"
              src={Img_graduates}
              alt="graduates"
              className="image-with-box-shadow img-role"
              style={{ maxWidth: "468px", minHeight: "431px", objectFit: "cover" }}
            />
          ) : (
            <LazyLoadImage effect="blur"
              src={Img_experienced}
              alt="experienced-hires"
              className="image-with-box-shadow img-role"
              style={{ maxWidth: "468px", height: "431px",  objectFit: "cover" }}
            />
          )}
        </Col>
        <Col sm={24} md={12}>
          <div className="title-medium text-start mt-0">
            Application criteria
          </div>

          {location.pathname.includes("graduates") ? (
            <p className="text-regular text-regular-bold">
              We are currently looking for a Business Analyst who will
              compliment an existing team of Consultants, Researchers, and
              Knowledge Management staff across our business.
            </p>
          ) : (
            <p className="text-regular text-regular-bold">
              We are always on the look-out for candidates with relevant
              experience, particularly of carrying out qualitative and
              quantitative research, managing others, and interacting with
              clients. <br /> Whilst prior experience of conducting consultancy
              work in the health, social care or education sectors is
              preferable, this is not a pre-requisite for the job. <br /> We are
              also keen to receive applications from candidates with experience
              in consulting (general), corporate finance or those with corporate
              backgrounds.
            </p>
          )}

          {location.pathname.includes("graduates") ? (
            <div className="ul mt-2">
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
                  Good working knowledge of UK geography
                </li>
                <li>Right to work in the UK</li>
              </ul>
            </div>
          ) : (
            <div className="ul mt-2">
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
                  Good working knowledge of UK geography
                </li>
                <li>Right to work in the UK</li>
              </ul>
            </div>
          )}
        </Col>
      </Row>

      <div className="mtop-80 container-custom news-grid-small packages-grid-small ">
      {location.pathname.includes("graduates") ? (
          <>
            <div className="packages-card">
              <h2 className="title-medium text-start m-0">Package</h2>

              <div className="ul mt-3">
                <ul>
                  <li>Full time, permanent role</li>
                  <li>Competitive salary (subject to experience)</li>
                  <li>
                    25 days annual leave plus UK bank holidays 
                  </li>
                  <li>
                    Company pension
                  </li>
                  <li>Private healthcare and dental insurance</li>
                  <li>Free lunch</li>
                </ul>
              </div>
            </div>
            <div className="packages-card">
              <h2 className="title-medium text-start m-0">How to apply</h2>
              <div className="ul mt-3  ">
                <ul>
                  <li>
                    Candidates should email their CV / resume and covering
                    letter to careers@connell-consulting.com
                  </li>
                  <li>
                    Successful candidates are then invited to our office in
                    London for an interview
                  </li>
                  <li>
                    We are now accepting applications for Business Analysts
                  </li>
                </ul>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="packages-card">
              <h2 className="title-medium text-start m-0">Package</h2>

              <div className="ul mt-3">
                <ul>
                  <li>Full time, permanent role</li>
                  <li>Competitive salary (subject to experience)</li>
                  <li> 25 days annual leave plus UK bank holidays</li>
                  <li>Company pension</li>
                  <li>Private healthcare and dental insurance</li>
                  <li>Free lunch</li>
                </ul>
              </div>
            </div>
            <div className="packages-card">
              <h2 className="title-medium text-start m-0">How to apply</h2>
              <div className="ul mt-3  ">
                <ul>
                  <li>
                    Candidates should email their CV / resume and covering
                    letter to careers@connell-consulting.com
                  </li>
                  <li>
                    Successful candidates are then invited to our office in
                    London for an interview
                  </li>
                  <li>
                    We are now accepting applications for experienced hires
                  </li>
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Candidates;
