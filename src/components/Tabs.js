import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Row, Col, Spin } from 'antd'
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import {db} from '../firebase.js'


import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

function TabsCustom({transactionsfull}) {
  const param = useParams();
  const [routeName, setRouteName] = useState("all");
  const [transactions, setTransactions] = useState([])
  const [years, setYears] = useState([])

  let currentYear = new Date().getFullYear() 
  let y;
  let list = []

  useEffect(() => {
    // async function getData() {
    //   const list = []
    //   const q = query(collection(db, "transactions"), orderBy("transactions_year", "desc"));
    //   const querySnapshot = await getDocs(q);
    //   querySnapshot.forEach((doc) => {
    //     // doc.data() is never undefined for query doc snapshots
    //     list.push({id: doc.id, data: doc.data()})
    //   });
    //   setTransactions(list)
    // }
    // getData() 

    for (let i = 0; i <= 25; i++) {
      y = currentYear--
      if (y >= 2013) {
        list.push(y)
      } 
    }
    setYears(list)

 document.querySelector("body").addEventListener("click", () => {
    "nav nav-bottom navbar-collapse collapse show"

    let dropdown = document.querySelector(".chosen-year-menu .nav")
    if(dropdown) {
        dropdown.classList.contains("show") && dropdown.classList.remove("show")
    }
  
  })


    
  }, [])

 
  
  useEffect(() => {
    setRouteName(Object.values(param)[0]);
  }, [param]);

  return (
    <>
      <Navbar expand="lg" className="p-0 chosen-year-menu" >
        <div className="chosen-year">{routeName}</div>
        <Navbar.Brand href="#home" id="consulting" className="m-0">
          <span className="d-none title-in-mobileview m-0"> {routeName} </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="nav nav-bottom">
          <Nav className="nav-left">
          <Nav className="nav-left">
            <Link to={"all"}>
              <li className={routeName.includes("all") ? 'active-link' : ""}> All  </li>
            </Link>
             {
              years.length > 0 ?
                years.reverse().map((year,i) => {
                  if (year !== 2015) {
                    return (
                    <Link to={year.toString()} key={i}>
                      <li className={routeName.includes(year.toString()) ? 'active-link' : ""}> {year} </li>
                    </Link>
                    )
                  }
                }) : 
                <Spin size="large" />
             }

          </Nav>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Row className="transactions-image-container" gutter={[20, 30]}>
        {transactionsfull.length > 0 ? transactionsfull.map((tr,i) => {
        
          if (routeName === "all" && tr.data.transactions_status === 'active') {
            return (
              <Col xs={12} sm={8} md={6} title={"tr.header"} key={i}>
                {/* <img src={image} loading="lazy" width="100%"/> */}
                {
                  tr.data?.transactions_title?.length > 0 ?
                  <Link to={`/news/blogs/${tr.data?.blog_title?.toLowerCase().split(" ").join("-").substring(0, 50)}?id=${tr.data?.draft_id}`} >
                    <LazyLoadImage src={tr.data.transactions_image} width="100%" effect="blur" style={{"maxHeight": "413px", "objectFit": "contain"}} />
                  </Link>
                  :  <LazyLoadImage src={tr.data.transactions_image} width="100%" effect="blur" style={{"maxHeight": "413px", "objectFit": "contain"}}/>
                }
              </Col>
            );
          }
          if (tr.data.transactions_year.toString() === routeName.toString() && tr.data.transactions_status === 'active') {
            return (
              <Col xs={12} sm={8} md={6} title={"tr.header"} key={i}>
                {/* <img src={image} loading="lazy" width="100%"/> */}
                {/* <LazyLoadImage src={tr.data.transactions_image} width="100%" effect="blur" style={{"maxHeight": "413px", "objectFit": "contain"}} /> */}


                  {
                  tr.data?.blog_title?.length > 0 ?
                  <a href={`#/news/blogs/${tr.data.blog_title?.toLowerCase().split(" ").join("-").substring(0, 50)}?id=${tr.data?.draft_id}`}>
                    <LazyLoadImage src={tr.data.transactions_image} width="100%" effect="blur" style={{"maxHeight": "413px", "objectFit": "contain"}} />
                  </a>
                  :  <LazyLoadImage src={tr.data.transactions_image} width="100%" effect="blur" style={{"maxHeight": "413px", "objectFit": "contain"}} />
                }
              </Col>
            );
          }
        }) 
        : <Spin size="large" />
        }
    </Row>
    </>
  );
}

export default TabsCustom;
