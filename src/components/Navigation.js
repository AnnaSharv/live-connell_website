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
  // let navigate = useNavigate();
  // let user_status_localStorage = localStorage.getItem("userStatus") == "true"
  const location = useLocation()
  const [routeName, setRouteName] = useState("Home")
  const [activeRouteName, setActiveRouteName] = useState(routeName)
  const {userStatus, setUserStatus} = useContext(Authcontext)
  const [expanded, setExpanded] = useState(false);
  useEffect(() => {
    switch (true) {
      
      case location.pathname.includes("services"):
        setRouteName("Services")
        break;
      case location.pathname.includes("sectors"):
        setRouteName("Sectors")
        break;
   
      case location.pathname.includes("clients"):
        setRouteName("Clients")
        break;
   
      case location.pathname.includes("news"):
        setRouteName("News")
        break;
      case location.pathname.includes("contact"):
        setRouteName("Contact")
        break;
      case location.pathname.includes("transactions"):
        setRouteName("Transactions")
        break;
      case location.pathname.includes("careers"):
        setRouteName("Careers")
        break;
      case location.pathname.includes("team"):
        setRouteName("Team")
        break;
      case location.pathname.includes("policy") || location.pathname.includes("cookies") || location.pathname.includes("terms_and_conditions"):
        setRouteName("footer")
        break;
    
      default:
        setRouteName("Home")
        break;
    }
    setExpanded(false)
  }, [location.pathname])


  const handleToggle = () => setExpanded(!expanded);


  return (
    <div className='navigations'>

    <Navbar expand="lg" className='nav-up container-custom' onToggle={handleToggle} expanded={expanded} >
        <Navbar.Brand href="/"><img src={Logo} width="232" height="100" alt="Connell_consulting" className='logo' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='nav nav-top' >

          <Nav className="nav-right">
                <Link to="/"> <li className={routeName === 'Home' ? 'active-link navlink_upper' : "navlink_upper navlink_upper"}> Home </li> </Link>
                <Link to="/services"> <li className={routeName === 'Services' ? 'active-link navlink_upper' : "navlink_upper"}> Services </li> </Link>
                <Link to="/sectors"> <li className={routeName === 'Sectors' ? 'active-link navlink_upper' : "navlink_upper"}> Sectors </li> </Link>
                <Link to="/clients"> <li className={routeName === 'Clients' ? 'active-link navlink_upper' : "navlink_upper"}> Our clients </li> </Link>
                <Link to="/team"><li className={routeName === 'Team' ? 'active-link navlink_upper' : "navlink_upper"}> Team </li></Link>  
                <Link to="/news/all"> <li className={routeName === 'News' ? 'active-link navlink_upper' : "navlink_upper"}> News </li> </Link>
                <Link to="/careers"><li className={routeName === 'Careers' ? 'active-link navlink_upper' : "navlink_upper"}> Careers </li></Link>  
                <Link to="/contact"> <li className={routeName === 'Contact' ? 'active-link navlink_upper' : "navlink_upper"}> Contact </li> </Link>
                <Link to="/transactions/all"><li className='button-solid navlink_upper'> Recent transactions </li></Link>  

                <li style={{"gridArea": "area-1"}}> info@connell-consulting.com </li>
                <li style={{"gridArea": "area-2"}}> +44 (0)20 7371 8142 </li>
                <li style={{"gridArea": "area-3"}}> <img src={Twitter}  alt="logo_connell_twitter"/> </li>
                <li style={{"gridArea": "area-4"}} className="linkedinlogo"> <img src={Linkedin}  alt="linkedin"/> </li>
          </Nav>
        </Navbar.Collapse>
    </Navbar>

    <Navbar expand="lg" className='line nav-down container-custom'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='nav nav-bottom'>
          <Nav className="nav-left"></Nav>
          <Nav className="nav-right">
            <Link to="/"> <li className={routeName === 'Home' ? 'active-link' : "navlink_down"}> Home </li> </Link>
            <Link to="/services"> <li className={routeName === 'Services' ? 'active-link' : "navlink_down"}> Services </li> </Link>
            <Link to="/sectors"> <li className={routeName.includes('Sectors') ? 'active-link' : "navlink_down"}> Sectors </li> </Link>
            <Link to="/clients"> <li className={routeName === 'Clients' ? 'active-link' : "navlink_down"}> Our clients </li> </Link>
            <Link to="/team"><li className={routeName === 'Team' ? 'active-link' : "navlink_down"}> Team </li></Link>  
            <Link to="/news/all"> <li className={routeName === 'News' ? 'active-link' : "navlink_down"}> News </li> </Link>
            <Link to="/careers"><li className={routeName === 'Careers' ? 'active-link' : "navlink_down"}> Careers </li></Link>  
            <Link to="/contact"> <li className={routeName === 'Contact' ? 'active-link' : "navlink_down"}> Contact </li> </Link>
            <Link to="/transactions/all"><li className='button-solid'> Recent transactions </li></Link>  
          </Nav>
        </Navbar.Collapse>
    </Navbar>

    </div>
  )
}

export default Navigation