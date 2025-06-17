import React from 'react'

const Skills = () => {
    const skills = [{ language: 'HTML/CSS', Rating : 95},
                    { language: 'JavaScript', Rating : 90},
                    { language: 'React Js', Rating : 85},
                    { language: 'SQL', Rating : 90},
                    { language: 'Bootstrap', Rating : 80},
                    { language: 'UNIX', Rating : 75},
                    { language: 'GitHub', Rating : 70}
                 ];
  return (
    <section id="skills" className='skills'>
        <h2>My Skills</h2>
    <div className='skills-container'>
        {skills.map((skill,index)=>(
          <div key={index} className='skill-item'>
            <h3>{skill.language}</h3>
            <div className='skill-bar'>
                <div className='skill-progress'
                  style={{width: `${skill.Rating}%`}}></div>
            </div>
            </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
