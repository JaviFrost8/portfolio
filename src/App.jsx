import './App.css'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { Index } from './pages/Index';
import { AboutMe } from './pages/AboutMe';
import { Contact } from './pages/Contact';
import { Projects } from './pages/Projects';

function App() {

  return (
    <BrowserRouter>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink
                to='/'
                className={({isActive}) => 
                  isActive ? 'active' : ''
              }
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/aboutme'
                className={({isActive}) => 
                  isActive ? 'active' : ''
                }
              >
                Sobre mí
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/projects'
                className={({isActive}) =>
                  isActive ? 'active' : ''
                }
              >
                Proyectos
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/contact'
                className={({isActive}) => 
                  isActive ? 'active' : ''
                }
              >
                Contáctame
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/aboutme' element={<AboutMe />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
