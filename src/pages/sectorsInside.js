import React from 'react'
import {useEffect, useState} from 'react'
import Header from '../components/Header' 
import Transactions from '../components/Transactions'
import { useLocation } from "react-router-dom";
import CountUp from 'react-countup';

import {Row, Col} from 'antd'

import Img from '../assets/images/banners/news.png'


import Img1 from '../assets/images/sectors/11 1.jpg'
import Img2 from '../assets/images/sectors/11 6.jpg'
import Img3 from '../assets/images/sectors/11 7.jpg'
import Img4 from '../assets/images/sectors/11 8.jpg'
import Img5 from '../assets/images/sectors/11 9.jpg'



function SectorsInside({piePercent}) {
  const location = useLocation();
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
            list: [
                'Brain injury rehabilitation and long term care',
                'Elderly care homes and specialist dementia centres',
                'Domiciliary care and supported living',
                'Staffing agencies for nurses and carers',
                'Fostering and adoption',
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
            paragraph: 'Connell Consulting has established a strong reputation within the social care sector, with the team highly regarded by investors and operators for their primary research driven approach. With unrivalled access to commissioners, supported by a wealth of industry expertise, Connell Consulting is able deliver real insight to ensure providers meet the rising demand for high quality social care provision.',
            list: [
                'Brain injury rehabilitation and long term care',
                'Elderly care homes and specialist dementia centres',
                'Domiciliary care and supported living',
                'Staffing agencies for nurses and carers',
                'Fostering and adoption',
                'Support services for people with ASD and learning disabilities'
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
            paragraph: 'Connell Consulting has established a strong reputation within the social care sector, with the team highly regarded by investors and operators for their primary research driven approach. With unrivalled access to commissioners, supported by a wealth of industry expertise, Connell Consulting is able deliver real insight to ensure providers meet the rising demand for high quality social care provision.',
            list: [
                'Brain injury rehabilitation and long term care',
                'Elderly care homes and specialist dementia centres',
                'Domiciliary care and supported living',
                'Staffing agencies for nurses and carers',
                'Fostering and adoption',
                'Support services for people with ASD and learning disabilities'
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
            paragraph: 'Connell Consulting has established a strong reputation within the social care sector, with the team highly regarded by investors and operators for their primary research driven approach. With unrivalled access to commissioners, supported by a wealth of industry expertise, Connell Consulting is able deliver real insight to ensure providers meet the rising demand for high quality social care provision.',
            list: [
                'Brain injury rehabilitation and long term care',
                'Elderly care homes and specialist dementia centres',
                'Domiciliary care and supported living',
                'Staffing agencies for nurses and carers',
                'Fostering and adoption',
                'Support services for people with ASD and learning disabilities'
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
            paragraph: 'Connell Consulting has established a strong reputation within the social care sector, with the team highly regarded by investors and operators for their primary research driven approach. With unrivalled access to commissioners, supported by a wealth of industry expertise, Connell Consulting is able deliver real insight to ensure providers meet the rising demand for high quality social care provision.',
            list: [
                'Brain injury rehabilitation and long term care',
                'Elderly care homes and specialist dementia centres',
                'Domiciliary care and supported living',
                'Staffing agencies for nurses and carers',
                'Fostering and adoption',
                'Support services for people with ASD and learning disabilities'
            ]
        })
    }











    let pieP = 1

    let element = document.querySelector(".pie");
    element.style.setProperty("--p", pieP);


    setInterval(() => {
        if(pieP < 60) {
            element.style.setProperty("--p", pieP++);
            setp(pieP)
        }
    }, 10);
  }, [])  

  return (
    <div className='sectors-inside'>
        <Header title={title} subheading={"Sectors"} image={content.image}/>

        <Row className='mblock-80 container-custom' gutter={[106, 0]}>
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
        </Row>

        <p className='text-medium p-large container-custom'>
            {content.paragraph}
        </p>

        <div className='ul container-custom'>
            <p className="text-regular mt-5"> The team is renowned for their specialist work in the following fields: </p>

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