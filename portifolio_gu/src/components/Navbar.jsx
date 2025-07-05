import './Navbar.css'
import {FaGithub,FaLinkedin,FaInstagram,} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1 className='log'>Dev Gustavo</h1>
      <ul className='nav-center'>
         <li><Link to="/">Inicio</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
        <li><Link to="projetos">Projetos</Link></li>
        <li><Link to="contato">Contato</Link></li>

      </ul>
      <div className='nav-right'>
        <a href="https://github.com/Gustaavo01" target='_blank' rel='noopener noreferrer' >
        <FaGithub/>
        </a>
        <a href="https://www.linkedin.com/in/gustavo-Gonzaga-2481b3277" target='_blank' rel='noopener noreferrer' >
        <FaLinkedin/>
        </a>
         <a href="https://instagram.com/gonzagaa.22/profilecard/?igsh=cDU1OXlhMXlo" target='_blank' rel='noopener noreferrer' >
        <FaInstagram/>
        </a>
        


      </div>
       
    </nav>
    
  )
}

export default Navbar
