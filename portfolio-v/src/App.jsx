import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
      {/* Add resume info here */}
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
