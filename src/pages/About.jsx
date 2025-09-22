import React from "react";
import "./About.css"; 
function About() {
  return (
    <div className="about-container">
      <section className="about-section">
        <h1>About Me</h1>
        <p>
          Hi, I’m <strong>Gerishom Kubwayo</strong>, a passionate Full Stack
          Developer with experience building modern web applications. I enjoy
          solving real-world problems with clean and efficient code.
        </p>
        <p>
          My career goal is to grow as a software engineer and contribute to
          impactful projects in tech, while continuously learning and improving
          my skills.
        </p>
      </section>

      <section className="skills-section">
        <h2>My Skills</h2>
        <ul className="skills-list">
        <li>JavaScript (ES6+)</li>
        <li>Node.js</li>
        <li>PostgreSQL</li>
        <li>Tailwind CSS</li>
        <li>React.js</li>
        <li>HTML & CSS</li>
        
        </ul>
      </section>
    </div>
  );
}

export default About;
