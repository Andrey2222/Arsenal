import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
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

  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 20
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.section 
      ref={ref}
      id="about" 
      className="about"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container">
        <motion.h2 
          className="section-title"
          variants={titleVariants}
        >
          About
        </motion.h2>
        
        <div className="about-content">
          <motion.h3 variants={textVariants}>
            Liability Efficiency Management CORE
          </motion.h3>
          
          <motion.p variants={textVariants}>
            Our main priorities - Liability, Efficiency and Management, are at the very CORE of our operation activity and the name of our company.
          </motion.p>
          
          <motion.p variants={textVariants}>
            Arsenal Minerals is based in the heart of Europe, in the Netherlands, the place which has been an unchangeable world trade center since ancient times. Concentrated on the prompt delivery with a quality control, our company performs the role of the bridge between suppliers and customers, by assuming all issues regarding languages, standards and time zones. We are connecting right customers with right goods.
          </motion.p>
          
          <motion.p variants={textVariants}>
            Arsenal Minerals is a performance-oriented company that strives for continuous improvement. We see ourselves as being cosmopolitan, which in turn implies a cross-cultural attitude, tolerance, as well as a decent and respectful demeanor.
          </motion.p>
        </div>
      </div>
    </motion.section>
  )
}

export default About









