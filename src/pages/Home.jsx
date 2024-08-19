import React from 'react'
import { Link } from 'react-router-dom'
import  AY from "../assets/AY.png";
import  Dose from "../assets/Dose.png";
import Faq from "../assets/FAQ.png";
import hero from "../assets/Hero.png";
import Nova from "../assets/Nova_Social.png";
import Qid from "../assets/Qid_logo.png";
import sytezo from "../assets/Sytezo_Logo.png";
import Telent from "../assets/Telent_potential.png";
import yerrington from "../assets/Yerrington.png";
import dottedline1 from "../assets/line.png";
import dottedline2 from "../assets/line_1.png";
import "./Home.css";
function Home() {
  return (
    <div className="collaborations-page">
    {/* Hero Section */}
    <section className="hero">
      <div className="hero-placeholder">
        <div className='hero-text'>
          <h1>Vital Vistara</h1>
          <p>We help Start-ups in everything from building there <strong>Technology </strong> to help them in 
           <strong> Marketing </strong> there product to help them raise <strong>Funding </strong>  to scale there start-up</p>
             <button className='btn'><Link to="/contact">Schedule Call </Link></button>

        </div>
       <img src={hero} alt=""  />
      </div>
      <div className='content'>
      <div className='content_heading'>
        <h2>How can we gain more traction</h2>
        
        </div>
        <div className='content_heading_2'>
        <h2>How to get our product out in market?</h2>
        
        </div>
         <div className='content_heading_3'>
        <h2>How Content Creation will help us?</h2>
        
        </div>
         <div className='content_heading_4'>
        <h2>How are we can integrate AI & ML in our Tech</h2>
        
        </div>  
      <img src={Faq} alt="" className='faq' /> 
      <h1>We've collaborated with <br />several cutting-edge startups.</h1>
      
      <div className="logos">
        <img src={Dose} alt="Logo 1" />
        <img src={Telent} alt="Logo 2" />
        <img src={Nova} alt="Logo 3" />
        <img src={Qid} alt="Logo 4" />
      </div>
      </div>
    </section>

    {/* What We Do Section */}
    <section className="what-we-do-section">
      <h2>What We Do</h2>
      <p>Thousands of other agencies are doing what we do, none of them know How We Do?
      </p>
      <div className="steps">
        <div className="step">
          <div className='index_1'>
          <h3>1</h3>
          <img src={dottedline1} alt="" className='dottedline1' />
          </div>
          <div className="step-content">
            <h2>Marketing & Design</h2>
            <p>We Don’t Just Support Start-Ups; We Make Them Stand Out and Succeed.</p>
            <div className="tags">
              <span>Strategy</span>
              <span>Ad Campaign</span>
              <span>Social Media</span>
            </div>
          </div>
        </div>
        <div className="step">
        <div className='index_2'>
          <h3>2</h3>
          <img src={dottedline1} alt="" className='dottedline2' />
          </div>
          <div className="step-content" id='step_2'>
            <h2>Technology</h2>
            <p>We take pride in our 3 core values that we deliver in Tech – Scalability, Speed, Security</p>
            <div className="tags">
              <span>Mobile App</span>
              <span>Web App</span>
              <span>Ai/ML</span>
            </div>
          </div>
        </div>
        <div className="step">
        <div className='index_3'>
          <h3>3</h3>
          </div>
          <div className="step-content" id='step_3'>
            <h2>Business Consulting</h2>
            <p>From Foundation to Funding: Empowering Your Growth Every Step of the Way</p>
            <div className="tags">
              <span>Funding</span>
              <span>Incubation</span>
              <span>Pitch Deck</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Partners Section */}
    <section className="partners-section">
      <h2>Our Partners</h2>
      <div className="partners-logos">
        <img src={yerrington} alt="Partner 1" />
        <img src={AY} alt="Partner 2" />
       
      </div>
    </section>

    {/* Footer Section */}
    <section className="last_section">
        <h2>More by People @Vital Vistara</h2>
      <div className='company_desc'>
      <div className='image_desc'>
        <img src={sytezo} alt="" />
        <h3>Sytezo</h3>
      </div>
      <div className='desc'>
      <p>A SaaS Platform designed especially for founders and their start-ups.
         Sytezo which is a platform for startup founders , helping them streamline all your tasks effortlessly. 
         Whether brainstorming for new ideas, managing marketing, tech, sales, or business development, Sytezo brings
          everything together under one roof, making your journey as a founder smoother and more efficient than before! 
        Plus, it's will be simple to use!</p>
      
      </div>
      <h4> Coming Soon</h4>
      </div>
    </section>
  </div>
  )
}

export default Home
