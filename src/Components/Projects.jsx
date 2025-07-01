import React from 'react'

const Projects = () => {
    const projects = [{title: 'E-commerce Site',
                       description: 'Online store built with React',
                       tags:['React','Node.js']},
                    {title: 'Weather App',
                       description: 'Real-time weather application',
                       tags: ['JavaScript','API']}, ];
  return (
    <section id="projects" className='projects'>
        <h2>My Projects</h2>
    <div className='projects-grid'>
        {projects.map((project,index)=>(
          <div key={index} className='project-card'>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className='project-tags'>
             {project.tags.map((tag,i)=>(
                <span key={i}>{tag}</span>
             ))}
            </div>
        </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
