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

  useEffect(() => {
    location.pathname.includes("/social-care") && setTitle("Social Care");
    location.pathname.includes("/pharma-and-life-sciences") && setTitle("Pharma & Life Sciences");
    location.pathname.includes("/healthcare") && setTitle("Healthcare");
    location.pathname.includes("/children-care-and-education") && setTitle("Children’s Care & Education");
    location.pathname.includes("/student-accommodation") && setTitle("Student Accommodation");
  }, [])  

  return (
    <div className='sectors-inside'>
        <Header title={title} subheading={"Sectors"} />

        <Row className='mblock-80 container-custom'>
            <Col sm={24} md={12}>
                <Row gutter={[20,30]}>
                    <Col sm={24} md={8} className="statisctics">
                        <div className='pie'></div>
                    </Col>
                    <Col sm={24} md={12}>
                        <div className='sectors-inside-text'>
                            <h2>At a glance</h2>
                            <p><CountUp start={0} end={15} suffix={"%"} duration={1}/> of our assets under management are currently invested in the Consumer sector</p>
                        </div>
                    </Col>
                </Row>
            </Col>

            <Col sm={24} md={12}>
               

                <Row gutter={3}>
                    <Col sm={24} md={10}>
                        <div className='big-countup'><CountUp start={0} end={2.6} prefix={"£"} duration={1} decimal={"."} decimals={1}/>bn </div>
                    </Col>
                    <Col sm={24} md={12}>
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