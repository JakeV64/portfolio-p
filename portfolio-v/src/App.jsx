import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <header>
        <nav aria-label="Main Navigation">
          <ul>
            <li>Jacob Von Ah</li>
            <li className="list">About Me</li>
            <li className="list">Portfolio</li>
            <li className="list">Contact</li>
            <li className="list">Resume</li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="about">
          <h1>About Me</h1>
          <p>
            Hi, my name is Jacob Von Ah. I am from Illinois, currently a student
            at The University of Wisconsin studying coding.
          </p>
        </section>
      </main>
    </>
  )
}

export default App
