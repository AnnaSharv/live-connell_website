import React, { useEffect, useState, useContext } from 'react'
import Authcontext from '../pages/context/Authcontext';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'

import Logo from '../assets/images/Connell-logo.svg'
import Twitter from '../assets/images/akar-icons_twitter-fill.svg'
import Linkedin from '../assets/images/akar-icons_linkedin-fill.svg'

import { Link, useLocation } from "react-router-dom";



function Navigation() {
  const location = useLocation()
  const [routeName, setRouteName] = useState("Home")
  const {userStatus, setUserStatus} = useContext(Authcontext)
  
  useEffect(() => {
    switch (location.pathname) {
      case "/clare/services":
        setRouteName("Services")
        break;
      case "/clare/sectors":
        setRouteName("Sectors")
        break;
      case "/clare/clients":
        setRouteName("Clients")
        break;
      case "/clare/news":
        setRouteName("News")
        break;
      case "/clare/news/all":
        setRouteName("News")
        break;
      case "/clare/news/awards":
        setRouteName("News")
        break;
      case "/clare/news/articles":
        setRouteName("News")
        break;
      case "/clare/news/deals":
        setRouteName("News")
        break;
      case "/clare/contact":
        setRouteName("Contact")
        break;
      case "/clare/transactions/all":
        setRouteName("Transactions")
        break;
      case "/clare/transactions/2024":
        setRouteName("Transactions")
        break;
      case "/clare/transactions/2023":
        setRouteName("Transactions")
        break;
      case "/clare/transactions/2022":
        setRouteName("Transactions")
        break;
      case "/clare/transactions/2021":
        setRouteName("Transactions")
        break;
      case "/clare/transactions/2019":
        setRouteName("Transactions")
        break;
      case "/clare/transactions/2018":
        setRouteName("Transactions")
        break;
      case "/clare/transactions/2017":
        setRouteName("Transactions")
        break;
      case "/clare/transactions/2016":
        setRouteName("Transactions")
        break;
      case "/clare/transactions/2014":
        setRouteName("Transactions")
        break;
      case "/clare/transactions/2013":
        setRouteName("Transactions")
        break;
      case "/clare/careers":
        setRouteName("Careers")
        break;
      case "/clare/careers/*":
        setRouteName("Careers")
        break;
      case "/clare/team":
        setRouteName("Team")
        break;
  
    
      default:
        setRouteName("Home")
        break;
    }
   
  }, [location.pathname])
  


  return (
    <div className='navigations'>

    <Navbar expand="lg">
        <Navbar.Brand href="/clare"><img src={Logo} width="100" alt="Connell_consulting"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='nav nav-top'>
          <Nav className="nav-left">
              <Link to="/clare/transactions/all"><li> Recent transactions </li></Link>  
              <Link to="/clare/careers"><li> Careers </li></Link>  
              <Link to="/clare/team"><li> Team </li></Link>  
          </Nav>
          <Nav className="nav-right">
                <li style={{"gridArea": "area-1"}}> info@connell-consulting.com </li>
                <li style={{"gridArea": "area-2"}}> +44 (0)20 7371 8142 </li>
                <li style={{"gridArea": "area-3"}}> <img src={Twitter}  alt="logo_connell_twitter"/> </li>
                <li style={{"gridArea": "area-4"}}> <img src={Linkedin}  alt="linkedin"/> </li>
                <Link to="/clare/login" onClick={() => {
                  userStatus === true && setUserStatus(null)
                 // localStorage.setItem("userStatus", false)
                }}><li> {userStatus == true ? "გამოსვლა" : "შესვლა"} </li></Link>  
          </Nav>
        </Navbar.Collapse>
    </Navbar>

    <Navbar expand="lg">
        <Navbar.Brand href="/clare" id="consulting">Consulting <span className='d-none title-in-mobileview'>{routeName}</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='nav nav-bottom'>
          <Nav className="nav-left"></Nav>
          <Nav className="nav-right">
            <Link to="/clare/"> <li> Home </li> </Link>
            <Link to="/clare/services"> <li> Services </li> </Link>
            <Link to="/clare/sectors"> <li> Sectors </li> </Link>
            <Link to="/clare/clients"> <li> Our clients </li> </Link>
            <Link to="/clare/news"> <li> News </li> </Link>
            <Link to="/clare/contact"> <li className='contact-button'> Contact </li> </Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>

    </div>
  )
}

export default Navigation