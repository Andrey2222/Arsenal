import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Downloads = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const titleVariants = {
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

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95
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
      ref={ref}
      id="downloads" 
      className="downloads"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container">
        <motion.h2 
          className="section-title"
          variants={titleVariants}
        >
          Downloads
        </motion.h2>
        
        <div className="downloads-grid">
          <motion.div 
            className="download-item"
            variants={itemVariants}
            whileHover={{ 
              y: -10,
              scale: 1.03,
              transition: { duration: 0.3 }
            }}
          >
            <i className="fas fa-file-pdf"></i>
            <h4>Product Catalog for Zircon Materials</h4>
            <p>Arsenal_Catalog for Ceramic.pdf</p>
            <a href="Applications/Arsenal_Catalog for Ceramic.pdf" download className="btn btn-secondary">Download PDF</a>
          </motion.div>
          
          <motion.div 
            className="download-item"
            variants={itemVariants}
            whileHover={{ 
              y: -10,
              scale: 1.03,
              transition: { duration: 0.3 }
            }}
          >
            <i className="fas fa-file-pdf"></i>
            <h4>Product Catalog for Rutile, Fluorspar and Kyanite-Sillimanite Material</h4>
            <p>Arsenal_Catalog for Welding.pdf</p>
            <a href="Applications/Arsenal_Catalog for Welding.pdf" download className="btn btn-secondary">Download PDF</a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Downloads












