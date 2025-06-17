import React from 'react'

const Footer = () => {
  return (
    <footer className='footer'>
    <div className='social-links'>
        <a href='https://github.com' target='_blank' rel='noopener noreferrer'>GitHub</a>
        <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'>LinkedIn</a>
    </div>
    <p>&copy; {new Date().getFullYear()} My Portfolio, All rights reserved</p>
    </footer>
  );
};

export default Footer;
