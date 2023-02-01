import React from 'react'
import {useEffect, useState} from 'react'
import Header from '../components/Header' 
import Transactions from '../components/Transactions'
import { useLocation } from "react-router-dom";
import CountUp from 'react-countup';

import {Row, Col} from 'antd'

function SectorsInside({piePercent}) {
  const location = useLocation();
  const [title, setTitle] = useState("...")
const [p, setp] = useState(1)
  useEffect(() => {
    location.pathname.includes("/social-care") && setTitle("Social Care");
    location.pathname.includes("/pharma-and-life-sciences") && setTitle("Pharma & Life Sciences");
    location.pathname.includes("/healthcare") && setTitle("Healthcare");
    location.pathname.includes("/children-care-and-education") && setTitle("Children’s Care & Education");
    location.pathname.includes("/student-accommodation") && setTitle("Student Accommodation");

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
        <Header title={title} subheading={"Sectors"} />

        <Row className='mblock-80 container-custom' gutter={[106, 0]}>
            <Col sm={24} md={24} lg={12}>
                <Row  gutter={[{ xs:80, sm: 0, md: 30, lg:0 }, {xs:30, sm:30, md:30}]}>
                    <Col sm={24} md={6} lg={8} className="statisctics">
                        <div className="pie"> <span style={{"color": "white", "zIndex": "1111"}}>{p}%</span></div>
                    </Col>
                    <Col sm={24} md={18} lg={16} style={{"maxWidth": "90%"}}>
                        <div className='sectors-inside-text'>
                            <h2>At a glance</h2>
                            <p> {p}% of our assets under management are currently invested in the Consumer sector</p>
                        </div>
                    </Col>
                </Row>
            </Col>

            <Col sm={24} md={24} lg={12}>
                <Row   gutter={[{ xs:80, sm: 0, md: 30, lg:120 }, {xs:30, sm:30, md:30}]}>
                    <Col sm={24} md={6} lg={9} className="statisctics-num">
                        <div className='big-countup'><CountUp start={0} end={2.6} prefix={"£"} duration={1} decimal={"."} decimals={1}/>bn </div>
                    </Col>
                    <Col sm={24} md={18} lg={15}  style={{"maxWidth": "90%"}}>
                        <div className='sectors-inside-text'>
                            <h2>At a glance</h2>
                            <p> Invested in 20 deals in the Consumer sector in the last 10 years</p>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>

        <p className='text-medium p-large container-custom'>
            Connell Consulting has established a strong reputation within the social care sector, with the team highly regarded by investors and operators for their primary research driven approach. With unrivalled access to commissioners, supported by a wealth of industry expertise, Connell Consulting is able deliver real insight to ensure providers meet the rising demand for high quality social care provision.
        </p>

        <div className='ul container-custom'>
            <p className="text-regular mt-5"> The team is renowned for their specialist work in the following fields: </p>

                <ul className='mt-2'>
                    <li className="text-regular">Brain injury rehabilitation and long term care</li>
                    <li className="text-regular">Elderly care homes and specialist dementia centres</li>
                    <li className="text-regular">Domiciliary care and supported living</li>
                    <li className="text-regular">Staffing agencies for nurses and carers</li>
                    <li className="text-regular">Fostering and adoption</li>
                    <li className="text-regular">Support services for people with ASD and learning disabilities</li>
                </ul>
        </div>
        

        <Transactions />
    </div>
  )
}

export default SectorsInside