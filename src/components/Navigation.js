import React, { useEffect, useState, useContext } from 'react'

import { getAuth, signOut } from "firebase/auth";
import Authcontext from '../pages/context/Authcontext';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'

import Logo from '../assets/images/Connell-logo.svg'
import Twitter from '../assets/images/akar-icons_twitter-fill.svg'
import Linkedin from '../assets/images/akar-icons_linkedin-fill.svg'

import { Link, Navigate, useNavigate, useLocation } from "react-router-dom";



function Navigation() {
  const auth = getAuth();
  let navigate = useNavigate();
  let user_status_localStorage = localStorage.getItem("userStatus") == "true"
  const location = useLocation()
  const [routeName, setRouteName] = useState("Home")
  const [activeRouteName, setActiveRouteName] = useState(routeName)
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
      case "/clare/careers/graduates":
        setRouteName("Careers")
        break;
      case "/clare/careers/experienced-hires":
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


  let handleSignOut = () => {
    if(user_status_localStorage) {
       signOut(auth).then(() => {
      // Sign-out successful.
       localStorage.setItem("userStatus", null)
   
       navigate("/clare")
    }).catch((error) => {console.log(error)});
    }
   
    navigate("/clare/login")
  }

  return (
    <div className='navigations'>

    <Navbar expand="lg">
        <Navbar.Brand href="/clare"><img src={Logo} width="232" height="100" alt="Connell_consulting"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='nav nav-top' style={{"justifyContent": "flex-end"}}>

          <Nav className="nav-right">
                <li style={{"gridArea": "area-1"}}> info@connell-consulting.com </li>
                <li style={{"gridArea": "area-2"}}> +44 (0)20 7371 8142 </li>
                <li style={{"gridArea": "area-3"}}> <img src={Twitter}  alt="logo_connell_twitter"/> </li>
                <li style={{"gridArea": "area-4"}}> <img src={Linkedin}  alt="linkedin"/> </li>
                <Link to="/clare/login" onClick={handleSignOut}>
                  <li> {user_status_localStorage == true ? "გამოსვლა" : "შესვლა"} </li>
                </Link>  
          </Nav>
        </Navbar.Collapse>
    </Navbar>

    <Navbar expand="lg">
        <Navbar.Brand href="/clare" id="consulting"> <span className='d-none title-in-mobileview'>{routeName}</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='nav nav-bottom'>
          <Nav className="nav-left"></Nav>
          <Nav className="nav-right">
            <Link to="/clare/"> <li className={routeName === 'Home' ? 'active-link' : undefined}> Home </li> </Link>
            <Link to="/clare/services"> <li className={routeName === 'Services' ? 'active-link' : undefined}> Services </li> </Link>
            <Link to="/clare/sectors"> <li className={routeName === 'Sectors' ? 'active-link' : undefined}> Sectors </li> </Link>
            <Link to="/clare/clients"> <li className={routeName === 'Clients' ? 'active-link' : undefined}> Our clients </li> </Link>
            <Link to="/clare/team"><li className={routeName === 'Team' ? 'active-link' : undefined}> Team </li></Link>  
            <Link to="/clare/news"> <li className={routeName === 'News' ? 'active-link' : undefined}> News </li> </Link>
            <Link to="/clare/careers"><li className={routeName === 'Careers' ? 'active-link' : undefined}> Careers </li></Link>  
            <Link to="/clare/contact"> <li className={routeName === 'Contact' ? 'active-link' : undefined}> Contact </li> </Link>
            <Link to="/clare/transactions/all"><li className='button-solid'> Recent transactions </li></Link>  
          </Nav>
        </Navbar.Collapse>
    </Navbar>

    </div>
  )
}

export default Navigation