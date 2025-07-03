import React from 'react'
import { motion } from 'framer-motion';

const Header = () => {
  return (
      <motion.div className='head-content'  
    initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}>
     <header className='head'>
       <img src="/src/devi.jpg" alt="My image" loading="lazy" style={{width:'280px', height:'350px',top:80,objectFit:'cover',borderRadius:'50%'}}></img>
       <h1>Hi, I'm <span className="animated-name"><i>
    {'DeviLakshmanan'.split('').map((char, index) => (
      <span key={index} className="letter" style={{ animationDelay: `${index * 0.1}s` }}>{char}</span>
    ))}</i></span></h1>
       <h2>Frontend Developer</h2>
       <p>I can build beautiful, responsive websites</p>
       <a href="#contact" className='btn'>Contact Me!</a>
       </header>
    </motion.div>
  )
}

export default Header
