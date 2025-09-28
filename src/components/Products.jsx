import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Products = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
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

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
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
      id="products" 
      className="products"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container">
        <motion.h2 
          className="section-title"
          variants={titleVariants}
        >
          Products
        </motion.h2>
        
        <div className="products-grid">
          <motion.div 
            className="product-card"
            variants={cardVariants}
            whileHover={{ 
              y: -15,
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <div className="product-icon">
              <i className="fas fa-gem"></i>
            </div>
            <h3>Minerals</h3>
            <p>We offer a comprehensive range of minerals including Ukrainian origin and African collective concentrate processed in China:</p>
            <ul className="minerals-list">
              <li>Ilmenite concentrate</li>
              <li>Rutile sand</li>
              <li>Zircon sand</li>
              <li>Kyanite-sillimanite sand</li>
            </ul>
            <button className="btn btn-primary">Learn More</button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Products












