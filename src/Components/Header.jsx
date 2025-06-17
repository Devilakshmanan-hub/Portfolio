import React from 'react'

const Header = () => {
  return (
     <header className='head'>
    <div className='head-content'>
       <img src="/src/devi.jpg" alt="My image" style={{width:'280px', height:'350px',top:20,objectFit:'cover',borderRadius:'50%'}}></img>
       <h1>Hi, I'm <span><i>DeviLakshmanan</i></span></h1>
       <h2>Frontend Developer</h2>
       <p>I can build beautiful, responsive websites</p>
       <a href="#Contact" className='btn'>Contact Me!</a>
    </div>
    </header>
  )
}

export default Header
