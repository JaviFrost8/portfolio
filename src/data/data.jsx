import crudImg from '../../public/projects/Crud.png'
import toDo from '../../public/projects/ListaTareas.png'
import collector from '../../public/projects/Collector.png'
import commerce from '../../public/projects/E-commerce.png'
import landing from '../../public/projects/Landing.png'

export const projects = [
  {
    id: 0,
    nombre: 'CRUD de notas',
    descripcion: 'Aplicación desarrollada con React que permite crear, leer, actualizar y eliminar notas de forma sencilla e intuitiva. Ideal para organizar ideas, tareas o recordatorios.',
    imagen: crudImg,
    demo: 'https://crud-notas.vercel.app/',
    github: 'https://github.com/JaviFrost8/CRUD-notas',
  },
  {
    id: 1,
    nombre: 'ToDo List',
    descripcion: 'Aplicación de tareas con React, manejo de estado y filtros personalizados.',
    imagen: toDo,
    demo: 'https://todo-five-blush-87.vercel.app/',
    github:'https://github.com/JaviFrost8/toDo-list',
  },
  {
    id: 2,
    nombre: 'The Collector',
    descripcion: 'Aplicación para buscar mediante el consumo de una API películas y añadirlas a tu colección.',
    imagen: collector,
    demo: 'https://collectorvercel.vercel.app/',
    github: 'https://github.com/JaviFrost8/The-Collector',
  },
  {
    id: 3,
    nombre: 'E-commerce',
    descripcion: 'Este proyecto es una tienda online desarrollada con React, en la que los usuarios pueden navegar por distintos productos, filtrarlos por categoría y añadirlos a su carrito de compras.',
    imagen: commerce,
    demo: 'https://commerce-snowy-two-58.vercel.app/',
    github: 'https://github.com/JaviFrost8/e-commerce',
  },
  {
    id: 4,
    nombre: 'Landing Page',
    descripcion: 'Esta es una landing page desarrollada con React y diseñada para ser clara, moderna y atractiva desde el primer vistazo. Su objetivo es presentar de forma efectiva una marca o producto, guiando al usuario hacia una acción concreta.',
    imagen: landing,
    demo: 'https://landing-delta-swart.vercel.app/',
    github: 'https://github.com/JaviFrost8/landing-page',
  }
]