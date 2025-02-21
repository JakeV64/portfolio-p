import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


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
      title: "Budget Calculator",
      imageUrl: "/images/budget-tracker-pic.png",
      description: "Here is the first group project I worked on. We created a budget calculator that allows users to track their expenses and income also displaying users expenses in a pie chart.",
    },
    {
      id: 2,
      title: "First assignment",
      imageUrl: "/images/horisenP.png",
      description: "Here's my first assignment for the coding bootcamp. Was a homepage for a business.",
    },
    {
      id: 3,
      title: "Dark Mode assignment",
      imageUrl: "/images/loginP.png",
      description: "Here's another assignment I worked on. It was a simple login page with a dark mode feature.",
    },
    {
      id: 4,
      title: "Payroll Calculator Login",
      imageUrl: "/images/payrollT.png",
      description: "This project was another assignment I worked on. It was the login for payroll calculator.",
    },
    {
      id: 5,
      title: "Portfolio One",
      imageUrl: "/images/portOne.png",
      description: "Here is my first portfolio I created.",
    
    },
    {
      id: 6,
      title: "Washingtom Football",
      imageUrl: "/images/washF.png",
      description: "Here is a project I work on in my free time. It is a website for the Washington Commanders. My favorite football team.",
    }
  ];
  return (
    <section className="portfolio">
      <h1>Portfolio</h1>
      <p>Here are some projects I've worked on.</p>

      <div className="portfolio-grid">
        {projects.map((project) => (
          <div key={project.id} className="portfolio-item">
            {project.imageUrl && (
              <img src={project.imageUrl} alt={project.title} />
            )}
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
      
    </section>
  );
}

function Contact() {
  return (
    <section className="contact">
      <h1>Contact</h1>
      <p>Feel free to reach out to me through any of the methods below.</p>
      
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
