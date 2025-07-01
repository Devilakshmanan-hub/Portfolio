import React from 'react'
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className='footer'>
    <motion.div className='social-links' 
    initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}> 
        <a href='https://github.com/Devilakshmanan-hub/Portfolio.git' target='_blank' rel='noopener noreferrer'> <i className="bi bi-github"></i>  GitHub</a>
        <a href='https://www.linkedin.com/in/devilakshmanan' target='_blank' rel='noopener noreferrer'> <i className="bi bi-linkedin"></i>  LinkedIn</a>
    </motion.div>
    <p>&copy; {new Date().getFullYear()} My Portfolio, All rights reserved</p>
    </footer>
  );
};

export default Footer;
