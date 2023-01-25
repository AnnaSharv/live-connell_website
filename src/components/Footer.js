import React from "react";
function Footer() {
  let currentYear = new Date().getFullYear() 

  return (
    <footer className="mtop-80 line container-custom">
      <div className="footer-left">&copy; 2013-{currentYear} Connell Consulting</div>
      <ul className="footer-right m-0 footer-nav">
        <li>Privacy Policy</li>
        <li>Cookie Policy</li>
        <li>Terms & conditions</li>
      </ul>
    </footer>
  );
}

export default Footer;
