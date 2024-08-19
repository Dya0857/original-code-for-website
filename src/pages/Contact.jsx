import React, { useState } from 'react'
import "./Contact.css";
function Contact() {
  const [user, setUser] =useState(
    {
      Name: '',
      Email:' ',
      Mobile:' ',
      Message:' '
    }
  )
  let name, value
  console.log(user)
  const data = (e) =>
    {
    name = e.target.name;
    value = e.target.value;
    setUser({...user, [name]: value});
    }
    const getdata = async (e) =>{
    const {Name,  Email, Mobile, Message}=user;
    e.preventDefault();
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        Name,  Email, Mobile, Message
      })
    }
    const res = await fetch('https://vital-vistara-form-default-rtdb.firebaseio.com/UserData.json' ,
      options
    )
    console.log(res)
    if(res){
      alert("Message Sent")
    }
    else{
      alert ("failed to send")
    }
    }
  return (
    <div className="contact-container">
    <div className="Contact_heading">
      <h1>Ask Us Anything</h1>
    <p>Anything related to our Projects, for everything else there's Google</p>
    </div>
    <div className="contact-form">
      <form method='POST'>
      <div className="form-group">
        <label htmlFor="name">What Should We Call You?</label>
        <input type="text" id="name" name="Name" placeholder="Name" value={user.Name} autoComplete='off' required onChange={data}/>
      </div>
      <div className="form-group">
        <label htmlFor="email">How do we reach you?</label>
        <input type="email" id="email" name="Email" placeholder="E-mail" value={user.Email} autoComplete='off' required onChange={data}/>
      </div>
      <div className="form-group">
        <label htmlFor="mobile">Want a call from us?</label>
        <input type="text" id="mobile" name="Mobile" placeholder="Mobile" value={user.Mobile} autoComplete='off' required  onChange={data}/>
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="Message" placeholder="Hi Vital Vistara team, we need a quotation for..."  autoComplete='off' value={user.Message} onChange={data} />
      </div>
      <div className="form-group">
        <label>Required Services</label>
        <div className="checkbox-group">
          <label><input type="checkbox" name="services" value="branding" /> Branding</label>
          <label><input type="checkbox" name="services" value="marketing" /> Marketing</label>
          <label><input type="checkbox" name="services" value="technology" /> Technology</label>
          <label><input type="checkbox" name="services" value="businessConsulting" /> Business Consulting</label>
          <label><input type="checkbox" name="services" value="other" /> Other</label>
        </div>
      </div>
      <button type="submit" className="submit-button" onClick={getdata}>Next</button>
      </form>
    </div>

    <div className="contact-info">
      <button className='btn'><p>+91 8076650354</p> </button>
      <button className='btn'><p>aniket@vitalvistara.com</p></button>
      <button className='btn'><p>+91 8384074925</p></button>
    </div>
  </div>
  )
}

export default Contact
