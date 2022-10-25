import React, {useEffect} from "react";

function Footer() {
  let currentYear = new Date().getFullYear() 

  return (
    <footer>
      <div className="footer-left">&copy; 2013-{currentYear} Connell Consulting</div>
      <ul className="footer-right m-0">
        <li>Privacy Policy</li>
        <li>Cookie Policy</li>
        <li>Terms & conditions</li>
      </ul>
    </footer>
  );
}

export default Footer;
