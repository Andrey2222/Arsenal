import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="nav-container">
        <motion.div 
          className="nav-logo"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <h2>ARSENAL MINERALS</h2>
        </motion.div>
        
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#main" className="nav-link" onClick={closeMenu}>Main</a>
          </li>
          <li className="nav-item">
            <a href="#products" className="nav-link" onClick={closeMenu}>Products</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={closeMenu}>About</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a>
          </li>
          <li className="nav-item">
            <a href="#downloads" className="nav-link" onClick={closeMenu}>Downloads</a>
          </li>
          <li className="nav-item dropdown">
            <a href="#" className="nav-link">EN <i className="fas fa-chevron-down"></i></a>
            <ul className="dropdown-menu">
              <li><a href="#">NL</a></li>
              <li><a href="#">FR</a></li>
            </ul>
          </li>
        </ul>
        
        <div className="hamburger" onClick={toggleMenu}>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar











