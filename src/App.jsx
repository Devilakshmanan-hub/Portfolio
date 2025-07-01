import React from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Header from './Components/Header';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
function App() {
         useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
       
 return (
    <>
       <Navbar />
       <Header />
       <About />
       <Skills />
       <Projects />
       <Contact />
       <Footer />
    </>
  )
}

export default App
