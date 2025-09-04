import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Contact = () => {
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

  const introVariants = {
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

  const formVariants = {
    hidden: { 
      opacity: 0, 
      x: -50
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const infoVariants = {
    hidden: { 
      opacity: 0, 
      x: 50
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')
    
    if (!name || !email || !message) {
      alert('Please fill in all fields')
      return
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address')
      return
    }
    
    alert('Thank you! Your message has been sent successfully.')
    e.target.reset()
  }

  return (
    <motion.section 
      ref={ref}
      id="contact" 
      className="contact"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container">
        <motion.p 
          className="contact-intro"
          variants={introVariants}
        >
          Feel free to contact us. We are ready to respond your requests 24/7
        </motion.p>
        
        <div className="contact-content">
          <motion.div 
            className="contact-form"
            variants={formVariants}
            whileHover={{ 
              y: -5,
              transition: { duration: 0.3 }
            }}
          >
            <h4>Send us a Message</h4>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="Name" 
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="Email" 
                  required 
                />
              </div>
              <div className="form-group">
                <textarea 
                  id="message" 
                  name="message" 
                  placeholder="Message" 
                  rows="5" 
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Request</button>
            </form>
          </motion.div>
          
          <motion.div 
            className="contact-info"
            variants={infoVariants}
            whileHover={{ 
              y: -5,
              transition: { duration: 0.3 }
            }}
          >
            <div className="info-item">
              <h4>Arsenal Minerals Limited</h4>
              <p><i className="fas fa-map-marker-alt"></i> 34 South Molton Street, W1K 5RG London, United Kingdom</p>
              <p><i className="fas fa-phone"></i> +44 0 2030007895</p>
              <p><i className="fas fa-envelope"></i> sales@arsenalmin.com</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact









