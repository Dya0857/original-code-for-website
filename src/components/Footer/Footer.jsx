import React from 'react'
import { Link } from 'react-router-dom'
import vital from "../../assets/Logov.png";
import "./Footer.css";
function Footer() {
  return (
   <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <div className="vital_logo">
            <img src={vital} alt="" />
          </div>
        </div>
        <div className="footer-links">
          <div className="sitemap">
            <h4 className='footer-heading'>Sitemap</h4>
            <ul>
              <li><Link to ={"/"}>Home</Link></li>
              <li><Link to={"/about"}>About us </Link></li>
              <li><Link to={"/"}>Service</Link></li>
              <li>Terms & Condition</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="social">
            <h4 className='footer-heading'>Social Media</h4>
            <ul>
              <li><a href={" https://linkedin.com/company/vitalvistara"} target="_blank">LinkedIn</a></li>
              <li><a href ={" https://x.com/vitalvistara"} target="_blank">Twitter</a></li>
              <li><a href ={" https://www.instagram.com/vitalvistara/"} target="_blank" >Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>“Vital Vistara” is a brand name operates under <strong>ASM Cognitive Works Private Limited </strong></p> <br />
        <p>Registered Address: D-121/A, Lajpat Nagar, Sahibabad, Ghaziabad, Uttar Pradesh - 201005</p> <br />
        <p> <strong>GSTIN: 09ABACA2527L1ZN</strong></p>
      </div>
    </footer>
  )
}

export default Footer
