import React from "react";
import Header from "../components/Header";
import { Link } from 'react-router-dom'
import {Row, Col} from 'antd'


import  Transactions  from "../components/Transactions";

//images
import img1 from '../assets/images/banners/service.jpg'
import img2 from '../assets/images/services/team_1.jpg'
import img3 from '../assets/images/services/Team_hi-res_015.jpg'
import { LazyLoadImage } from "react-lazy-load-image-component";

function Services() {
  return (
    <div className="services-container">
      <Header
        subheading={"Services"}
        title={"Maximise value at every stage of the business cycle."}
        paragraphs={[
          "Connell Consulting offers services offers services to maximise value at every stage of the business cycle, specialising in commercial due diligence, strategy consulting, financial analysis and operational improvement.",
          "As a team we have developed tried and tested methodologies that deliver real competitive value. We use our accumulated knowledge to hit the ground running with no need to spend your valuable time familiarising ourselves with the landscape. We are able to rapidly see the bigger picture and position your business within the market.",
        ]}
        padding={"90px"}
        image={img1}
        myClass={"smaller-padding-header"}
      />

      <Row
        gutter={[20, 30]}
        className="paragraphs container-custom-margin  mblock-80"
      >
        <Col sm={24} md={12} className="text-decor">
          <strong>Connell Consulting</strong> offers services to maximise value
          at every stage of the business cycle, specialising in commercial due
          diligence, strategy consulting, financial analysis and operational
          improvement.
          <br /> <br />
          Connell Consulting leads the market with our ability to obtain hard to
          get, insightful and granular information. Each new project requires
          fresh research: market and competitor dynamics are constantly
          shifting, rendering static databases rapidly out of date.
        </Col>
        <Col sm={24} md={12}>
          As a team we have developed tried and tested methodologies that
          deliver real competitive value. We use our accumulated knowledge to
          hit the ground running with no need to spend your valuable time
          familiarising ourselves with the landscape. We are able to rapidly see
          the bigger picture and position your business within the market.
        </Col>
      </Row>

      <Row gutter={[90, 30]} className="container-custom">
        <Col sm={24} md={12}>
          <LazyLoadImage
            effect="blur"
            src={img2}
            alt=""
            className="image-with-box-shadow"
            width={"95%"}
          />
        </Col>
        <Col sm={24} md={12}>
          <h2 className="title-medium text-start">Commercial Due Diligence</h2>
          <section className="service section ul">
            <div className="section-left">
              <p>
                We specialise in providing buy-side and vendor commercial due
                diligence to corporate clients, investors, and operators. Our
                reports are used for a variety of transaction scenarios,
                including sales processes, acquisitions, refinancing and
                divestment of assets.
              </p>
            </div>

            <div
              className="what-differentiates-us"
              style={{ marginBottom: 10 }}
            >
              What differentiates us
            </div>
            <ul>
              <li>
                We specialise in delivering insightful primary market research
                incorporating competitor intelligence, funding and regulatory
                outlook, stakeholder interviews and supply/demand dynamics
              </li>
              <li>
                As a team we have unrivalled access to an extensive network of
                stakeholders
              </li>
              <li>
                We use our deep sector knowledge to analyse the attractiveness
                and sustainability of a company’s business model, and evaluate
                performance outlook
              </li>
              <li>
                Our sector expertise means we can work with clients at pace
                (within standard transaction timelines of two to six weeks)
                without compromising on quality and can respond to the specific
                needs of the transaction
              </li>
              <li>
                Our independent approach ensures we identify upside potential
                and mitigate risk
              </li>
              <li>
                We have an excellent relationship with banks and institutional
                investors. Our reports are used to raise debt and support
                refinancing because they are viewed as honest, detailed, and
                reliable
              </li>
              <li>
                We think like investors and prioritise our work based on what
                will make or break a deal.
              </li>
            </ul>

            {/* <p
              className="text-regular text-regular-bold"
              style={{ fontFamily: "'MonserratMedium'" }}
            >
              We specialise in delivering insightful primary market research
              incorporating competitor intelligence, funding and regulatory
              outlook, stakeholder interviews and supply/demand dynamics. We
              have an excellent relationship with the banks and institutional
              investors and our reports are viewed as honest, detailed and
              reliable.
            </p> */}

            <Link to="/transactions/all" state={{ scrolltop: true }}>
              <button className="button-solid mt-5">
                SEE ALL OUR RECENT TRANSACTIONS
              </button>
            </Link>
          </section>
        </Col>
      </Row>

      <LazyLoadImage
        effect="blur"
        src={img3}
        alt=""
        className="full-width-img mblock-109"
        width={"100vw"}
      />

      <h2 className="title-medium text-start container-custom">
        Strategy Consulting
      </h2>
      <section className="service section container-custom">
        <div className="section-left ul">
          <p>
            Our highly experienced team of sector experts have worked with
            clients on many diverse strategy consulting projects from investment
            strategy to market entry, operations and portfolio optimisation.
          </p>

          <div
            className="what-differentiates-us"
            style={{ marginBottom: 10, fontFamily: "MonserratBold" }}
          >
            Growth
          </div>

          <ul>
            <li>
              There are vast opportunities for expansion and diversification
              across health and care
            </li>
            <li>
              We help our clients identify what services to offer in which
              geographies to support successful expansion
            </li>
            <li>
              We can leverage our extensive network to achieve this, introducing
              clients to the relevant stakeholder in areas that require their
              services.
            </li>
          </ul>

          <div
            className="what-differentiates-us"
            style={{ marginBottom: 10, fontFamily: "MonserratBold", marginTop: 20 }}
          >
            Portfolio optimisation
          </div>

          <ul>
            <li>We support our clients to:</li>
            <ul className="sub-list">
                <li>
                  Assess reasons for sub-optimal performance of assets, e.g.,
                  type of provision, competition, quality, property type, fees,
                  IT, HR etc.
                </li>
                <li>
                  Conduct competitor benchmarking to gauge performance versus
                  other players in the market and new market entrants
                </li>
                <li>Identify market opportunities to optimise returns.</li>
              </ul>

            <li>
              We can suggest strategies for implementation to maximise return on
              investment or mitigate losses.
            </li>
          </ul>
        </div>

        <div className="section-right">
          {/* <p
            className="text-regular text-regular-bold"
            style={{ marginBottom: "30px" }}
          >
            We help clients assess reasons for sub-optimal performance of assets
            (property, IT, HR etc), competitor benchmarking and market
            opportunities. Across larger portfolios we might suggest a number of
            strategies for implementation to maximise return on investment or
            mitigate losses.
          </p> */}
        </div>
      </section>

      <h2 className="title-medium text-start container-custom">
        Operational Improvement
      </h2>
      <section className="service section container-custom">
        <div className="section-left">
          <p>
          We also conduct operational improvement projects across health and care portfolios. We have
          extensive experience of best practice within the sector, from effective governance to
          recruitment and training.
          </p>
        </div>

        <div className="section-right ul">
        <div
            className="what-differentiates-us"
            style={{ marginBottom: 10, fontFamily: "MonserratBold" }}
          >
            Quality
          </div>

          <ul>
            <li>
            With the health and care sector highly regulated by external bodies (e.g., CQC, Care
            Inspectorate and Ofsted) we can review the quality of an asset or portfolio
            </li>
            <li>
            We can comment on ‘red flags’ and assess the impact poor quality, incidents and
safeguarding concerns will have on business performance. We can also suggest strategies to
mitigate business losses
            </li>
            <li>
            Our approach includes extensive interviews with commissioning stakeholders to identify the
true risk to the business.
            </li>
          </ul>



          <div
            className="what-differentiates-us"
            style={{ marginBottom: 10, fontFamily: "MonserratBold" }}
          >
            Stakeholder relations
          </div>

          <ul>
            <li>
            We can help clients improve occupancy levels by leveraging our commissioner contacts,
making introductions to the relevant stakeholders in areas that require their services.
            </li>
          </ul>


          <div
            className="what-differentiates-us"
            style={{ marginBottom: 10, fontFamily: "MonserratBold" }}
          >
            Pricing
          </div>

          <ul>
            <li>
            We can conduct competitor benchmarking to optimise pricing across a portfolio
            </li>

            <li>Our approach includes extensive competitor mystery shopping, supported by interviews with
commissioning stakeholders and internal data.</li>
          </ul>


          <div
            className="what-differentiates-us"
            style={{ marginBottom: 10, fontFamily: "MonserratBold" }}
          >
            Staffing
          </div>

          <ul>
            <li>
            As the recruitment market becomes increasingly competitive, we can benchmark contracts,
terms and pay rates across a micro-market to find out the optimal package required for each
site to attract and retain the right staff and reduce or eliminate the use of agency staff.
            </li>

            <li>We have done this for a number of providers across different client groups and care settings,
and across the whole of the UK.</li>
          </ul>
        </div>
      </section>

      <Transactions />
    </div>
  );
}

export default Services;
