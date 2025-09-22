import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p>
        Feel free to reach out for collaborations, job opportunities, or just to
        say hi 
      </p>

      
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>

     
      <div className="contact-links">
        <a href="mailto:kubwayogerishom99@gmail.com"> Email</a>
        <a href="https://github.com/Kubs-g" target="_blank"> GitHub</a>
        <a href="https://www.linkedin.com/in/kubwayo-gerishom-35682b295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="_blank" rel="noopener noreferrer" > LinkedIn</a>
      </div>
    </div>
  );
}

export default Contact;
