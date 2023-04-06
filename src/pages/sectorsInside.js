import React from 'react'
import {useEffect, useState} from 'react'
import Header from '../components/Header' 
import Transactions from '../components/Transactions'
import { useLocation } from "react-router-dom";
import CountUp from 'react-countup';

import {Row, Col} from 'antd'

import Img from '../assets/images/banners/news.png'


import Img1 from '../assets/images/sectors/11 1.jpg'
import Img2 from '../assets/images/sectors/careers.jpg'
import Img3 from '../assets/images/sectors/11 7.jpg'
import Img4 from '../assets/images/sectors/11 8.jpg'
import Img5 from '../assets/images/sectors/11 9.jpg'



function SectorsInside({piePercent}) {
  const location = useLocation();
  const [imgPosition, setImgPosition] = useState('center')
  const [title, setTitle] = useState("...")
  const [content, setContent] = useState({
    image: '',
    num1: '',
    text1: '',
    num2: '',
    text2: '',
    paragraph: '',
    list: []
  })
  const [p, setp] = useState(1)

  const data = JSON.parse(new URLSearchParams(location.search).get('data'));
  useEffect(() => {
    if(location.pathname.includes("/social-care")) {
        setTitle("Social Care")
        setContent({
            image: Img1,
            num1: '58',
            text1: 'of our assets under management are currently invested in the Consumer sector',
            num2: '2.3',
            text2: 'Invested in 20 deals in the Consumer sector in the last 10 years',
            paragraph: 'Connell Consulting has established a strong reputation within the social care sector, with the team highly regarded by investors and operators for their primary research driven approach. With unrivalled access to commissioners, supported by a wealth of industry expertise, Connell Consulting is able deliver real insight to ensure providers meet the rising demand for high quality social care provision.',
            ulHeader: "The team is renowned for their specialist work in the following fields:",
            list: [
                'Support services for people with mental health needs',
                'Brain injury rehabilitation and long term care',
                'Elderly care homes and specialist dementia centres',
                'Domiciliary care and supported living',
                'Staffing agencies for nurses and carers',
                'Support services for people with ASD and learning disabilities'
            ]
        })
    }
    if(location.pathname.includes("/pharma-and-life-sciences")) {
        setTitle("Pharma & Life Sciences");
        setContent({
            image: Img2,
            num1: '94',
            text1: 'of our assets under management are currently invested in the Consumer sector',
            num2: '2.3',
            text2: 'Invested in 20 deals in the Consumer sector in the last 10 years',
            ulHeader: "We have advised clients in:",
            paragraph: 'The team has a strong expertise doing both transactional and corporate work in the pharma space, across the value chain of the industry, from development and manufacturing to the end delivery of medicines.',
            list: [
                'Contract Development & Manufacturing (CDMO)',
                'Biologics & Biosimilars',
                'Generics',
                'Originators / Patented products',
                'Hospitals & Community pharmacies'
            ]
        })
    }
    if(location.pathname.includes("/healthcare")) {
        setTitle("Healthcare");
        setContent({
            image: Img3,
            num1: '79',
            text1: 'of our assets under management are currently invested in the Consumer sector',
            num2: '2.3',
            text2: 'Invested in 20 deals in the Consumer sector in the last 10 years',
            paragraph: 'Connell Consulting offer advice to investors and operators across a broad range of services in the healthcare sector. Based on our knowledge and expertise of the sector, the team have been asked to advise clients in the following areas:',
            list: [
                'Medical insurance services',
                'Private surgical hospitals',
                'Secure hospitals and rehabilitation for people with mental illness and personality disorders services',
                'Cancer treatment centres',
                'Cosmetic surgery',
                'Medical devices and consumables',
                'Dentistry'
            ]
        })
    }


    if(location.pathname.includes("/children-care-and-education")) {
        setTitle("Children’s Care & Education");
        setContent({
            image: Img4,
            num1: '94',
            text1: 'of our assets under management are currently invested in the Consumer sector',
            num2: '2.3',
            text2: 'Invested in 20 deals in the Consumer sector in the last 10 years',
            ulHeader: 'Specialist areas of expertise include:',
            paragraph: 'The team at Connell Consulting has recent experience of advising investors and operators on projects in the children’s services space, supporting the delivery of consistent, high quality services. We have also advised numerous companies in the education sector, providing targeted market reports and integrated solutions. The team’s expertise in the sector allows for effective navigation of the market, particularly in light of the recent policy changes.',
            list: [
                'Children’s residential care',
                'Children’s specialist residential schools and colleges',
                'Special schools and colleges',
                'Fostering and adoption',
                'Mainstream private schools and higher education colleges'
            ]
        })
    }
    if(location.pathname.includes("/student-accommodation")) {
        setTitle("Student Accommodation");
        setContent({
            image: Img5,
            num1: '58',
            text1: 'of our assets under management are currently invested in the Consumer sector',
            num2: '2.3',
            text2: 'Invested in 20 deals in the Consumer sector in the last 10 years',
            paragraph: 'Connell Consulting offers advice to investors, developers and operators across the strongly growing student accommodation sector. Based on a broad range of primary and secondary market research, the team delivers focused insights to support our clients in the following areas of the sector:',
            list: [
                'Private purpose-built student accommodation (PBSA)',
                'University-owned accommodation',
                'Operator selection',
                'Strategy',
                'Pricing',
                'Matching of developers and investors'
            ]
        })
    }











    // let pieP = 1

    // let element = document.querySelector(".pie");
    // element.style.setProperty("--p", pieP);


    // setInterval(() => {
    //     if(pieP < 60) {
    //         element.style.setProperty("--p", pieP++);
    //         setp(pieP)
    //     }
    // }, 10);
  }, [])  


  

  return (
    <div className='sectors-inside'>
        {/* <Header title={title} subheading={"Sectors"} image={content.image} imageposition={'object-position: center'}/> */}
        <Header title={title} subheading={"Sectors"} image={content.image} />

        {/* <Row className='mblock-80 container-custom' gutter={[106, 0]}>
            <Col sm={24} md={24} lg={12}>
                <Row  gutter={[{ xs:80, sm: 0, md: 30, lg:0 }, {xs:30, sm:30, md:30}]}>
                    <Col sm={24} md={6} lg={8} className="statisctics">
                        <div className="pie"> <span style={{"color": "white", "zIndex": "1111"}}>{p}%</span></div>
                    </Col>
                    <Col sm={24} md={18} lg={16} style={{"maxWidth": "90%"}}>
                        <div className='sectors-inside-text'>
                            <h2>At a glance </h2>
                            <p> {content.num1}% {content.text1}</p>
                        </div>
                    </Col>
                </Row>
            </Col>

            <Col sm={24} md={24} lg={12}>
                <Row   gutter={[{ xs:80, sm: 0, md: 30, lg:120 }, {xs:30, sm:30, md:30}]}>
                    <Col sm={24} md={6} lg={9} className="statisctics-num">
                        <div className='big-countup'><CountUp start={0} end={content.num2} prefix={"£"} duration={1} decimal={"."} decimals={1}/>bn </div>
                    </Col>
                    <Col sm={24} md={18} lg={15}  style={{"maxWidth": "90%"}}>
                        <div className='sectors-inside-text'>
                            <h2>At a glance</h2>
                            <p> {content.text2}</p>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row> */}

        <p className='text-medium p-large container-custom'>
            {content.paragraph}
        </p>

        <div className='ul container-custom'>
            <p className="text-regular mt-5"> {content.ulHeader} </p>

                <ul className='mt-2'>
                    {
                        content.list.length > 0 &&
                            content.list.map((li,i) => {
                                return  <li className="text-regular" key={i}>{li}</li>
                            })
                    }
                </ul>
        </div>
        

        <Transactions />
    </div>
  )
}

export default SectorsInside