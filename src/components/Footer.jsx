import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
       
        <div className="social-links">
          <a href="https://github.com/Kubs-g" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/kubwayo-gerishom-35682b295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:kubwayogerishom99@gmail.com">
            Email
          </a>
          
        </div>
        <p>© {new Date().getFullYear()} Gerishom Kubwayo. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
