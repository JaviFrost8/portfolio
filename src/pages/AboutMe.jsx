import React from 'react'
import image from '../../public/hands.svg';
import html from '../images/html.svg';
import css from '../images/css.svg';
import javascript from '../images/javascript.svg';
import react from '../images/react.svg';
import vscode from '../images/vscode.svg';
import git from '../images/git.svg';
import firebase from '../images/firebase.svg';

export const AboutMe = () => {

  return (
    <div className='big-container'>
      <div className='container2'>
        <div className='about fade-in'>
          <h2 className='about-tittle'>Más allá del código</h2>
          <p>Hola, mi nombre es Javi. Siempre me llamó la atención la programación, pero no fue hasta que descubrí
            que podía aprender <strong>por mi cuenta</strong> cuando decidí lanzarme de lleno a estudiarla.
            Lo que más me motiva es la posibilidad de crear desde cero: construir aplicaciones que ayuden a otros y que tengan una funcionalidad clara y precisa.
            Sé que aún me queda mucho por aprender, y precisamente por eso estoy totalmente enfocado en <strong>seguir creciendo como desarrollador.</strong></p>
          <p>Fuera del código, disfruto mucho del cine, la playa y pasar tiempo con mi familia y amigos. Creo que mantener un equilibrio entre lo personal
            y lo profesional me ayuda a seguir motivado y con la mente clara para seguir aprendiendo.</p>
        </div>
        <div className='ilustration'>
          <img src={image} alt='Coding' />
        </div>
      </div>
      <div className='tools'>
        <img src={html} title='HTML' alt='Logo HTML' />
        <img src={css} title='CSS' alt='Logo CSS' />
        <img src={javascript} title='Javascript' alt='Logo Javascript' />
        <img src={react} title='React' alt='Logo react' />
        <img src={vscode} title='Visual Studio Code' alt='Logo VsCode' />
        <img src={git} title='Git' alt='Logo GIT' />
        <img src={firebase} title='Firebase' alt='Logo firebase' />
      </div>
    </div>
  )
}
