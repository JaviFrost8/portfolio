import React from 'react'

export const Contact = () => {
  return (
    <div className='big-container'>
      <div className='contact-text'>
        <h2>¿Hablamos?</h2>
        <p>
          Estoy buscando una oportunidad para realizar prácticas en el mundo del desarrollo web o una oportunidad para mi primer puesto de trabajo como junior. Quiero seguir aprendiendo, aportar lo que sé y formar parte de un equipo que me ayude a seguir creciendo.
        </p>
        <p>
          Si crees que encajo en tu empresa o proyecto, dime donde puedo ponerme en contacto. Estoy motivado, con muchas ganas de dar lo mejor de mí, y totalmente abierto a nuevos retos.
        </p>
      </div>
      <div className='form-container'>
        <h2>Formulario de contacto</h2>
        <form action="https://formspree.io/f/manoywlo" method="POST">
          <input type="text" name="nombre" placeholder="Nombre" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="mensaje" placeholder="Escribe aquí tu mensaje..." required />
          <button className='formBtn' type="submit">Enviar</button>
        </form>
      </div>
      <div className='other-contact'>
        <p>También puedes escribirme directamente a mi email:</p>
        <p><strong>Email:</strong> jjaviergonzalez23@gmail.com</p>
      </div>
    </div>
  )
}
