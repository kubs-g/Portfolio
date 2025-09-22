import React from "react";
import "./Project.css";

const projects = [
 
  {
    title: "WayFarer Travel Booking",
    description: "A travel booking platform to search and book trips. Built with HTML,CSS,JAVASCRIPT, Node.js,Express and MySQL.",
    image: "/public/images/way.jpg",
    github: "https://github.com/kubs-g/way_farer.git",
    live: " https://kubs-g.github.io/way_farer/"
  },
  {
    title: "Personal-Expense-Tracker",
    description: "A web app to track personal expenses with charts and reports. Built with React, Node.js, and PostgreSQL.",
    
    github: "https://github.com/kubs-g/personal-expense-tracker.git",
    live: " https://kubs-g.github.io/personal-expense-tracker/"
  },
  {
    title: "E-commerce Bag Store",
    description: "An online store where users can browse, add to cart, and checkout bags. Built with React, Node.js, PostgreSQL.",
    
    github: "https://github.com/kubs-g/E-Commerce.git",
    live: "https://yourproject1-demo.com"
  }
  
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} className="project-img" />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={project.live} target="_blank" rel="noopener noreferrer">Live Demo</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
