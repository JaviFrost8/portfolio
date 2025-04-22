import React from 'react'
import foto from '../../public/foto-portfolio.png'
import { Link } from 'react-router-dom';

export const Index = () => {

  return (
    <div className='big-container'>
      <div className='container'>
        <img src={foto} alt='Foto de portfolio' />
        <div className='text-container fade-in'>
          <h1 className='text1'>
            Autodidacta por pasión, frontend developer por vocación.
            Construyendo el futuro línea a línea.
          </h1>
          <p>Hola, mi nombre es Javier González, desarrollador frontend enfocado en React.</p>
          <button className='btn'><Link to='/projects'>Ver proyectos</Link></button>
        </div>
      </div>
    </div>
  )
}
