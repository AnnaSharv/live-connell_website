import React from 'react'
import Header from '../components/Header.js'
import {Row, Col, Carousel} from 'antd'
import CountUp from 'react-countup';

//components
import Banner from '../components/BannerCarousel'
import Services from '../components/OurServicesShort.js'
import News from '../components/News.js'
import Awards from '../components/Awards.js'
//image
import HeaderImg from '../assets/images/Header.svg'
import BannerImg from '../assets/images/banner_1_homepage.svg'

import BannerImg1 from '../assets/images/c_img_1.png'
import BannerImg2 from '../assets/images/c_img_2.png'
import BannerImg3 from '../assets/images/c_img_3.png'

import Arrow from "../assets/images/arrow.svg";


//team
import {team} from '../data/team'



function Home() {
  return (
    <div>
      <Header 
      title="Specialists in health, social care, education, pharma"
      subheading="Connell Consulting"
      paragraphs={[
        "Connell Consulting offer private equity firms and corporate clients detailed market knowledge combined with commercial insight. Our commercial due diligence and strategic reports provide granular and comprehensive analysis. Our reports are based upon fresh and targeted primary research, plus comprehensive interviews with commissioners and other stakeholders at both local and national levels.",
        "Produced commercial due diligence reports on over £7 billion of health and social care transactions in the last year"
      ]}
      highlight={true}
      imageplural={false}
      img={HeaderImg}
      statistics={true}
      carousel={true}
      />

      <img src={BannerImg} width="100%" className='banner_1_img'/>
      <h2 className='title-medium container-custom'>We offer detailed market knowledge combined with commercial insight</h2>
      <p className='banner_p container-custom'>Connell Consulting is a leading commercial due diligence specialist for private equity firms and corporate clients. Our reports are based upon fresh and targeted primary research, plus comprehensive interviews with commissioners and other stakeholders at both local and national levels.</p>
      <Row className='due-dilligence-banner container-custom'>
        <Col sm={11} md={11} className="text">Produced commercial due diligence reports on over <strong>£7 billion</strong>  of health and social care transactions in the last year</Col>
        <Col sm={12} md={13} className="numbers">
          <div>
            <span><CountUp start={480} end={500}  duration={1}/></span>
            <span>Engagments</span>
          </div>
          <div>
            <span><CountUp start={70} end={84} suffix="%" duration={1.2} /></span>
            <span>Repeat business</span>
          </div>
          <div>
            <span><CountUp start={0} end={7} suffix="bn" duration={1.2} /></span>
            <span>Transactions</span>
          </div>

        </Col>

      </Row>
      
      <Services />

      <h2 className="title-medium"><span className="highlight-text">Our</span> clients </h2>

      <Carousel className='home-carousel' autoplay dots={false}>
        <Row>
          <img alt="" src={BannerImg1} width="100%" />
        </Row> 
        <Row>
        <img alt="" src={BannerImg2} width="100%"/>
        </Row> 
        <Row>
        <img alt="" src={BannerImg3} width="100%"/>
        </Row> 
      </Carousel>

   
      <News />

      <Banner bg="#B4C7E760" customClass="c-alice-carousel"/>
    
      <Awards />

      <Row className='team-grid container-custom' gutter={[0,30]}>
        <Col sm={24} md={12} lg={9}> 
          <h1>Specialists in health, social care, education, pharma</h1> 
          <p className='text-regular'>Connell Consulting’s success is based on the wealth of experience of our people. We have a team of professionals with expertise across a wide variety of sectors, deal sizes, and transaction types.</p>
          <button>Meet our experts <img alt="" src={Arrow} style={{"marginBottom": "3px"}} /></button>
        </Col>
        <Col sm={24} md={12} lg={15} className="team-grid-img"> 
          {team && team.map((member, i) => {
            return <img src={Object.values(member.image)[0]} alt="" width="120px" key={i}/>
          })}
        </Col>
      </Row>
    </div>
  )
}

export default Home