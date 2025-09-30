import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <CTA />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
