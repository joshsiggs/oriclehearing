import React, {useEffect} from 'react';
import './Contact.css';

const Contact = () => {

  useEffect(() => {
    // Manually attach the submit listener to the form
    const form = document.querySelector("form.contact-form");
    if (form) {
      form.addEventListener("submit", validateForm);
    }

    return () => {
      if (form) {
        form.removeEventListener("submit", validateForm);
      }
    };
  }, []);

  return (
    <main>
      <div className='contact-page'>
        <h2>Contact Us</h2>
      
        <p><strong>EMAIL:</strong> <a href="mailto:support@oriclehearing.com">support@oriclehearing.com</a></p>
        <p><strong>WORKING HOURS:</strong> <br />Monday - Sunday: 5 AM - 10:40 PM PST</p>
        <h4>We’re here to talk!</h4>
        <p>Oricle Hearing Aid prides ourselves in our customer service that goes above and beyond for our customers.  If you need to contact us at any time please use the provided contact methods to either email and call our team!</p>
        <p>Our email support is open 5 AM - 10:40 PM PST and is a great way to get ahold of us or request a call back!</p>
        
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              required 
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </main>
  );
}

export default Contact