import React from 'react'
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaDatabase, FaLinux, FaGithub } from 'react-icons/fa'; 
import './Skills.css'


const Skills = () => {
    const skills = [{ language: 'HTML/CSS', icon: <FaHtml5 />},
                    { language: 'JavaScript', icon: <FaJs />},
                    { language: 'React Js',  icon: <FaReact />},
                    { language: 'SQL',  icon: <FaDatabase /> },
                    { language: 'Bootstrap',  icon: <FaCss3Alt />},
                    { language: 'UNIX',   icon: <FaLinux /> },
                    { language: 'GitHub',  icon: <FaGithub />}
                 ];
  return (
  //     <motion.div  initial={{ opacity: 0, y: -50 }}
  // animate={{ opacity: 1, y: 0 }}
  // transition={{ duration: 1 }}>
  //   <section id="skills" className='skills'>
  //       <h2>My Skills</h2>
  //   <div className='skills-container'>
  //       {skills.map((skill,index)=>(
  //         <div key={index} className='skill-item'>
  //            <div className="skill-header">
  //               <span className="skill-icon">{skill.icon}</span>
  //           <h3>{skill.language}</h3>
  //           </div>
  //            <div className='skill-bar'> 
  //               <div className='skill-progress'
  //                 style={{width: `${skill.Rating}%`}}>
  //                    <span className="skill-label">{skill.Rating}%</span>
  //                 </div>
  //           </div> 
  //           </div>
  //       ))}
  //     </div>
  //   </section>
  //   </motion.div>
  <section id="skills" className="skills-circle-section">
      <div className="circle-container">
        <div className="circle-center">
          <h2>My Skills</h2>
        </div>
        {skills.map((skill, index) => (
          <div key={index} className={`circle-item item-${index}`}>
            <div className="icon">{skill.icon}</div>
            <div className="label">{skill.language}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
