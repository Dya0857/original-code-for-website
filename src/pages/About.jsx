import React from 'react'
import { Link } from 'react-router-dom'
import "./About.css";
import vital from "../assets/Logo.png";
import Aniket from "../assets/Founder.png";
// import { FaLinkedin } from "react-icons/fa";
import linked from "../assets/linkedin.png";
import { FaXTwitter } from "react-icons/fa6";
function About() {
  return (
    <div className="about-us">
      <section className="about_hero-section">
        <h1 className='about-heading'>About us</h1>
        <p>Let's skip the How and What, and start with Why...</p>
      </section>

      <section className="intro-section">
        <h2>VITAL VISTARA</h2>
        <div className="intro-content">
          <div className="intro-logo">
            <img src={vital} alt="" />
          </div>
          <div className="intro-text">
            
            <p>
            We believe in supporting the start-up ecosystem at every step. <br />
            Our mission is to guide new-age start-ups by helping them build cutting-edge technology, and by assisting them 
            in marketing and positioning themselves as distinguished brands in the eyes of their customers. 
            Unlike others, we also provide access to our extensive network, enabling them to secure funding and grow.  <br />
            We are your one-stop solution for all start-up needs .
            </p>
          </div>
        </div>
      </section>

      <section className="details-section">
        <div className="details-content">
          <h2>About us</h2>
          <p>
          Vital Vistara is a brand under  <strong> ASM Cognitive Works Pvt Ltd </strong>, recognized by the Ministry of Corporate Affairs as an MSME.
          Our primary goal is to support and grow start-ups.  <br /> <br />
          <strong>Vision</strong>: To become a leading name in the start-up world by providing comprehensive solutions and fostering the growth of as many start-ups as possible.  <br /> <br />
          <strong>Mission</strong>: To deliver top-notch products and services that ensure an exceptional user experience for our clients' customers. <br /> <br />
          "Vital Vistara grows by helping the start-up ecosystem thrive." <br /> <br />
          Want to know more about us? Let's connect via email or  book a call. <br /> <br />
          Drop a note here or <Link to={"/contact"}> <span>book a call . </span></Link>
           
           </p>
        </div>

        <div className="details-logo">
          <img src={vital} alt="" />
        </div>
      </section>

      <section className="founders-section">
        <h3>Our Founder</h3>
        <div className="founders-content">
          <div className="founder">
            <img src={Aniket} alt="Aniket Singh"  />
            <h4>Aniket Singh</h4>
            <div className='icon'>
           <a href=" https://linkedin.com/in/aniketxzy" target='_blank'> <img src={linked} alt="" classname="linked" /> </a>
           {/* <a href="  https://x.com/Aniketxzy_" target='_blank'> <FaXTwitter size={32} className="Xicon"/> </a> */}
            </div>
            <p className='founder-tag'>Founder</p>
            <p>Chief Executive Officer</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
