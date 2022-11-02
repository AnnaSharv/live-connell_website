import React from "react";

import Header from "../components/Header";

//images
import img1 from '../assets/images/Saiyna-George-Charlotte-Lilya_WEB-RES_009 2.jpg'
import img2 from '../assets/images/Saiyna-George-Charlotte-Lilya_WEB-RES_009 1.jpg'

function Services() {
  return (
    <div className="services-container">
      <Header
        subheading={"Services"}
        title={"Maximise value at every stage of the business cycle."}
        paragraphs={[
          "Connell Consulting offers services to maximise value at every stage of the business cycle: Commercial Due Diligence, strategy, transformation and post-merger integration projects and operational improvement. Connell Consulting leads the market with our ability to obtain hard to get, insightful and granular information. Each new project requires fresh research: market and competitor dynamics are constantly shifting, rendering static databases rapidly out of date.",
          "As a team we have developed tried and tested methodologies that deliver real competitive value. We use our accumulated knowledge to hit the ground running with no need to spend your valuable time familiarising ourselves with the landscape. We are able to rapidly see the bigger picture and position your business within the market.",
        ]}
        padding={"90px"}
        imageplural={[img1, img2]}
        myClass={"smaller-padding-header"}
      />

      <h2 className="first">Commercial Due Diligence</h2>
      <section className="service section">
        <div className="section-left">
          <p>
            We advise corporate clients and investors to support M&A, expansion,
            refinancing and divestment of assets:
          </p>
          <p>SEE ALL THE RECENT TRANSACTIONS</p>
          <Link to="/clare/transactions/all"><button>Transactions</button></Link>
        </div>

        <div className="section-right">
          <ul>
            <li>Vendor commercial due diligence</li>
            <li>Investor commercial due diligence</li>
            <li>Commercial due diligence for refinancing purposes</li>
          </ul>

          <p>
            We specialise in delivering insightful primary market research
            incorporating competitor intelligence, funding and regulatory
            outlook, stakeholder interviews and supply/demand dynamics. We have
            an excellent relationship with the banks and institutional investors
            and our reports are viewed as honest, detailed and reliable.
          </p>
        </div>
      </section>

      <h2>Strategy</h2>
      <section className="service section">
        <div className="section-left">
          <p>
            Our team has worked with clients on many diverse strategy consulting
            projects from investment strategy to market entry, operations and
            portfolio optimisation.
          </p>
        </div>

        <div className="section-right">
          <p>
            We help clients assess reasons for sub-optimal performance of assets
            (property, IT, HR etc), competitor benchmarking and market
            opportunities. Across larger portfolios we might suggest a number of
            strategies for implementation to maximise return on investment or
            mitigate losses.
          </p>
        </div>
      </section>

      <h2>Operational Improvement</h2>
      <section className="service section">
        <div className="section-left">
          <p>
            We can also help clients fill their services by leveraging our
            commissioner contacts to introduce them to the relevant people in
            areas that require their services.
          </p>
        </div>

        <div className="section-right">
          <p>
            We do operational improvement projects for care homes and hospitals
            including cost cutting in the staff schedules, procurement
            optimisation and outsourcing non-core activities. We have experience
            of best practice in every process within a care business from the
            management of incidents and safeguarding to recruitment and
            training. As the recruitment market becomes increasingly competitive
            we can benchmark contracts, terms and pay rates across a local area
            to find out the optimal package required for each site to attract
            and retain the right staff and reduce or eliminate the use of agency
            staff. We have done this for a number of providers across different
            client groups and care settings and the whole of the UK.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Services;
