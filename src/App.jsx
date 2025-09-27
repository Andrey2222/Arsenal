import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import About from './components/About'
import Contact from './components/Contact'
import Downloads from './components/Downloads'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Products />
      <About />
      <Contact />
      <Downloads />
      <Footer />
    </div>
  )
}

export default App











