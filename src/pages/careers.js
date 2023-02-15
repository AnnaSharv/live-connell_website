import React from "react";
import { Link} from "react-router-dom";
import {Row, Col, List} from 'antd'

import Img from '../assets/images/banners/careers.png'
import Img1 from "../assets/images/careers/full-width-img.jpg";


import Header from "../components/Header.js";
import { LazyLoadImage } from "react-lazy-load-image-component";

function careers() {
  const data = [
    {
      question:"Do you sponsor visas for international applicants?",
      answer:"Unfortunately, we are not currently able to sponsor visas for Interns, Students and graduates, or Experienced hires."
    },
    {
      question:"When do you start to review applications?",
      answer:"Applications made to Connell Consulting are reviewed on a rolling basis. If we are actively recruiting into a specific role, we advise submitting your application in advance of the application deadline."
    },
    {
      question:"Are there opportunities to intern with Connell Consulting?",
      answer:"Internship opportunities may be available over the summer period. Please get in touch with careers@connell-consulting.com to see if there are any openings before submitting an application."
    },
    {
      question:"Are there opportunities to intern with Connell Consulting?",
      answer:"Most of our experienced hires have had some previous experience within strategy consulting. We do however accept applications for Analyst roles from people who have no directly relevant consulting experience."
    }
  ];
  return (
    <div className="careers">
      <Header
        subheading="Careers"
        title="A rewarding career"
        paragraphs={[
          "Connell Consulting has a highly skilled team of Analysts and Consultants with a wealth of experience across the health, social care and education sectors. As a market leading company that offers our clients detailed sector knowledge combined with commercial insight, we work with leading investors, banks, and operators on new and exciting opportunities.",
          "We are interested in receiving applications from smart and driven candidates who are seeking to support the delivery of commercial due diligence and strategic reports for clients across the health, social care and education sectors.",
        ]}
        image={Img}
      
      />

      <Row gutter={[20,30]} className="paragraphs mblock-80  container-custom">
        <Col sm={24} md={12} className="text-decor">
          <strong>Connell Consulting</strong> has a highly skilled team of
          Analysts and Consultants with a wealth of experience across the
          health, social care and education sectors. As a market leading company
          that offers our clients detailed sector knowledge combined with
          commercial insight, we work with leading investors, banks, and
          operators on new and exciting opportunities.
        </Col>
        <Col sm={24} md={12} className="text-loose">
          We are interested in receiving applications from smart and driven
          candidates who are seeking to support the delivery of commercial due
          diligence and strategic reports for clients across the health, social
          care and education sectors.
        </Col>
      </Row>


<div className="container-custom mbottom-80 ">
   <LazyLoadImage
        effect="blur"
        src={Img1}
        alt=""
        width="100%"
        className="image-with-box-shadow "
      />
</div>
     

      <p className="text-loose mb-0  container-custom">
        Whilst the nature of consulting means that we are a hardworking team, we
        understand the importance of maintaining a healthy work-life balance. We
        are also committed to building a diverse workforce.
      </p>

      <p className="text-loose mbottom-80  container-custom">
        The business operates a flat hierarchy system, providing a wide range of
        opportunities for self-starters to get involved from day one, be that
        through contribution to projects and solving client problems, attending
        external engagements and network events, or getting involved with
        internal operations, such as marketing, recruitment, or training.
      </p>

      <h1 className="title-medium text-start  container-custom" style={{ maxWidth: "800px" }}>
        Candidates interested in joining Connell Consulting should have:
      </h1>
      <div className="ul mbottom-80  container-custom">
        <ul>
          <li>
            A strong academic record, including an MBA from a top business
            school OR an experienced professional
          </li>
          <li>
            Self-starter mentality and a curiosity for solving business problems
          </li>
          <li>
            Excellent numeracy, written and verbal communication skills
            (completely fluent written and spoken English)
          </li>
          <li>
            Attention to detail and demonstrable analytical, interpretative and
            problem-solving skills
          </li>
          <li>Strong team working and interpersonal skills</li>
          <li>
            Excellent time management with proven ability to multi-task and
            prioritise workload
          </li>
          <li>
            Knowledge of key issues and current developments in the health,
            social care and education sectors is desirable, but not required
          </li>
          <li>
            Adaptability and an ability to learn quickly and apply new knowledge
          </li>
          <li>
            Experience of working with MS Office (Word, Excel and PowerPoint)
          </li>
          <li>
            Experience of using Google apps or a good knowledge of UK geography,
            as our projects are mainly UK based
          </li>
          <li>Right to work in the UK</li>
        </ul>
      </div>

      <div className="mbottom-80 careers-buttons-wrapper  container-custom">
        <h1 className="title-regular">Choose perfect for you:</h1>
        <Row gutter={[20,30]}>
           <Col sm={24} md={12}>
              <Link to="graduates">
                  <button className="button-solid">Graduates recruitment</button>
                </Link>
           </Col>
           <Col sm={24} md={12}>
             <Link to="experienced-hires">
              <button className="button-solid">Experienced hires</button>
            </Link>
           </Col>
        </Row>
      </div>


      <h1 className="title-medium text-start container-custom">FAQ</h1>

      <List
      size="large"
      bordered={false}
      dataSource={data}
      renderItem={(item) => <List.Item className="faq-list ps-0  container-custom" style={{"display":"block"}}>
        <h6 className="title-regular text-start" style={{"color":"#111315", "marginBottom":"10px"}}>{item.question}</h6>
        <p className="mb-0 text-normal">{item.answer}</p>
      </List.Item>}
      className="mbottom-80"
    />

  
    </div>
  );
}

export default careers;
