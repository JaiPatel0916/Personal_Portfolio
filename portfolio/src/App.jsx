import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About'
import Skills from './components/Skills';
import CanvasCursor from './components/CanvasCursor';
import ExperienceTimeline from './components/ExperienceTimeline';


const App = () => {
  return (
    <div className="bg-black min-h-screen">
      <CanvasCursor />
      <Navbar />
      <Hero />
      <About />
      <ExperienceTimeline />
      <Skills />
    </div>
  )
}

export default App
