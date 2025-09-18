import crudImg from '../../public/projects/Crud.png'
import toDo from '../../public/projects/ListaTareas.png'
import collector from '../../public/projects/Collector.png'
import commerce from '../../public/projects/E-commerce.png'
import landing from '../../public/projects/Landing.png'
import toDoRedux from '../../public/projects/ToDo-Redux.png'
import vicio from '../../public/projects/vicio.png'

export const projects = [
  {
    id: 0,
    nombre: 'Vicio',
    descripcion: 'Aplicación interactiva desarrollada en React que busca concienciar sobre los efectos y consecuencias del consumo de diferentes drogas. El usuario puede interactuar con distintas escenas y ver cómo las decisiones afectan a la salud, la apariencia y la vida del personaje.',
    imagen: vicio,
    demo: 'https://vicioapp-z9b8.vercel.app/',
    github: 'https://github.com/JaviFrost8/vicio'
  },
  {
    id: 1,
    nombre: 'To-Do App con Redux',
    descripcion: 'Aplicación de tareas realizadas con React y Redux, añade y borra herramientas y mantenlas filtradas por completadas o pendientes.',
    imagen: toDoRedux,
    demo: 'https://todoreduxvercel.vercel.app/',
    github: 'https://github.com/JaviFrost8/toDo-Redux',
  },
  {
    id: 2,
    nombre: 'E-commerce',
    descripcion: 'Este proyecto es un e-commerce para un negocio local de mi ciudad sobre tratamientos corporales y cuidado personal.',
    imagen: commerce,
    demo: 'https://stetticfinish.vercel.app/',
    github: 'https://github.com/JaviFrost8/stettic',
  },
  {
    id: 3,
    nombre: 'Landing Page',
    descripcion: 'Esta es una landing page desarrollada con React y diseñada para ser clara, moderna y atractiva desde el primer vistazo. Su objetivo es presentar de forma efectiva una marca o producto, guiando al usuario hacia una acción concreta.',
    imagen: landing,
    demo: 'https://landing-delta-swart.vercel.app/',
    github: 'https://github.com/JaviFrost8/landing-page',
  },
  {
    id: 4,
    nombre: 'The Collector',
    descripcion: 'Aplicación para buscar mediante el consumo de una API películas y añadirlas a tu colección.',
    imagen: collector,
    demo: 'https://collectorvercel.vercel.app/',
    github: 'https://github.com/JaviFrost8/The-Collector',
  },
  {
    id: 5,
    nombre: 'CRUD de notas',
    descripcion: 'Aplicación desarrollada con React que permite crear, leer, actualizar y eliminar notas de forma sencilla e intuitiva. Ideal para organizar ideas, tareas o recordatorios.',
    imagen: crudImg,
    demo: 'https://crud-notas.vercel.app/',
    github: 'https://github.com/JaviFrost8/CRUD-notas',
  },
  {
    id: 6,
    nombre: 'ToDo List',
    descripcion: 'Aplicación de tareas con React, manejo de estado y filtros personalizados.',
    imagen: toDo,
    demo: 'https://todo-five-blush-87.vercel.app/',
    github:'https://github.com/JaviFrost8/toDo-list',
  },
]