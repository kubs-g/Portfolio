import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Home.css";

const Home = () => {
  return (
    <>
    
    <section id="home" className="home">
      <div className="home-content">
        <h1>Hi, I’m <span className="highlight">Gerishom Kubwayo</span></h1>
        <h2>Full Stack Developer</h2>
        <p>
          I build modern, scalable web applications using React, Node.js,
          Tailwind, and PostgreSQL. Passionate about turning ideas into
          user-friendly products.
        </p>
        <div className="buttons">
          <a href="/project" className="btn-primary">View Projects</a>
          <a href="/contact" className="btn-secondary">Contact Me</a>
        </div>
      </div>
    </section>
    
    </>
  );
};

export default Home;
