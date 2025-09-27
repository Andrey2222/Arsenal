import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Footer = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  const footerVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.footer 
      ref={ref}
      className="footer"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={footerVariants}
    >
      <div className="container">
        <p>&copy; 2025 Copyright by Arsenal Minerals Limited | All rights reserved.</p>
      </div>
    </motion.footer>
  )
}

export default Footer











