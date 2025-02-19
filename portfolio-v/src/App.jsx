import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import budgetTracker from "C:\Users\allen\portfolio\portfolio-p\portfolio-v\src\assets\budget-tracker-pic.png";

function Header() {
  return (
    <header>
      <nav aria-label="Main Navigation">
        <ul>
          <li>Jacob Von Ah</li>
          <li className="list">
            <Link to="/">About Me</Link>
          </li>
          <li className="list">
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className="list">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="list">
            <Link to="/resume">Resume</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function About() {
  return (
    <section className="about">
      <h1>About Me</h1>
      <p>
        Hi, my name is Jacob Von Ah. I am from Illinois, currently a student at
        The University of Wisconsin studying coding. The past few years I've
        been working as a line cook, but I've always had a passion for
        technology. I am excited to learn more about coding and web development.
      </p>
    </section>
  );
}

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      imageUrl: "budgetTracker",
      description: "This is a description of project 1.",
    },
    {
      id: 2,
      title: "Project 2",
      imageUrl: "",
      description: "This is a description of project 2.",
    },
    {
      id: 3,
      title: "Project 3",
      imageUrl: "",
      description: "This is a description of project 3.",
    },
    {
      id: 4,
      title: "Project 4",
      imageUrl: "",
      description: "This is a description of project 4.",
    },
    {
      id: 5,
      title: "Project 5",
      imageUrl: "",
      description: "This is a description of project 5.",
    
    },
    {
      id: 6,
      title: "Project 6",
      imageUrl: "",
      description: "This is a description of project 6.",
    }
  ];
  return (
    <section className="portfolio">
      <h1>Portfolio</h1>
      <p>Here are some projects I've worked on.</p>
      {/* Add your projects here */}
    </section>
  );
}

function Contact() {
  return (
    <section className="contact">
      <h1>Contact</h1>
      <p>Feel free to reach out to me through any of the methods below.</p>
      {/* Add your contact info here */}
    </section>
  );
}

function Resume() {
  return (
    <section className="resume">
      <h1>Resume</h1>
      <p>Here is my resume with all the relevant details about my work experience and education.</p>
      
    </section>
  );
}

function Footer() {
  return <footer><p>Created By Jacob Von Ah 2025</p></footer>;
}

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
