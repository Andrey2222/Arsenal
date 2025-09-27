import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.section 
      id="main" 
      className="hero"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="hero-container">
        <div className="hero-content">
          <motion.h1 
            className="hero-title"
            variants={itemVariants}
          >
            ARSENAL MINERALS LIMITED
          </motion.h1>
          
          <motion.h2 
            className="hero-subtitle"
            variants={itemVariants}
          >
            Liability • Efficiency • Management
          </motion.h2>
          
          <motion.p 
            className="hero-description"
            variants={itemVariants}
          >
            An Innovative company in worldwide trading and service providing
          </motion.p>
          
          <motion.p 
            className="hero-text"
            variants={itemVariants}
          >
            We are an Innovative worldwide trade and service providing company operating with global sales and services network to deliver maximum value to all our customers.
          </motion.p>
          
          <motion.p 
            className="hero-text"
            variants={itemVariants}
          >
            A high level of expertise allows us to offer our customers a wide range of industrial minerals and fertilizers. We believe that Innovation should drive business results. In today's fast-paced and increasingly competitive marketplace our Innovative company is continually finding new ways to add value to our customers and make them benefit from our experience combined with new ideas.
          </motion.p>
          
          <motion.p 
            className="hero-text"
            variants={itemVariants}
          >
            We are committed to achieve our customers requirements and work together for constant improvement. We deliver high-quality and competitively priced products to our customers in time.
          </motion.p>
        </div>
        
        <motion.div 
          className="hero-images"
          variants={containerVariants}
        >
          <motion.div 
            className="image-item"
            variants={imageVariants}
            whileHover={{ 
              scale: 1.05, 
              y: -10,
              transition: { duration: 0.2 }
            }}
          >
            <i className="fas fa-industry"></i>
            <span>Industrial</span>
          </motion.div>
          
          <motion.div 
            className="image-item"
            variants={imageVariants}
            whileHover={{ 
              scale: 1.05, 
              y: -10,
              transition: { duration: 0.2 }
            }}
          >
            <i className="fas fa-building"></i>
            <span>Office</span>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Hero











