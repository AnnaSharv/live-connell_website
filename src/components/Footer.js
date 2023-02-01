import React from "react";
import {Link} from 'react-router-dom'
function Footer() {
  let currentYear = new Date().getFullYear() 

  return (
    <footer className="mtop-80 line container-custom">
      <div className="footer-left">&copy; 2013-{currentYear} Connell Consulting</div>
      <ul className="footer-right m-0 footer-nav">
       <Link to="/clare/policy"> <li>Privacy Policy</li> </Link>
       <Link to="/clare/cookies"> <li>Cookie Policy</li> </Link>
       <Link to="/clare/terms_and_conditions"> <li>Terms & conditions</li> </Link>
      </ul>
    </footer>
  );
}

export default Footer;
