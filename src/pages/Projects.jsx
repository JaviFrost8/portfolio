import React from 'react';
import { projects } from '../data/data';
import { CardProject } from '../components/CardProject';

export const Projects = () => {

  return (
    <div className='big-container'>
      <h1 className='projects-title'>Mis proyectos hasta ahora</h1>
      <div className='projects-container'>
        {
          projects.map((project) => (
            <CardProject
              key={project.id}
              project={project}
            />
          ))
        }
      </div>
    </div>
  )
}
