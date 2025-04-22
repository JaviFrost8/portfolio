import React from 'react'

export const CardProject = ({project}) => {

  return (
    <div className='project-card'>
      <h3>{project.nombre}</h3>
      <img src={project.imagen} alt='Imagen del proyecto' />
      <p>{project.descripcion}</p>
      <div className='btns'>
        <button><a href={project.demo} target='_blank'>Ver Demo</a></button>
        <button><a href={project.github} target='_blank'>Ver código</a></button>
      </div>
    </div>
  )
}
