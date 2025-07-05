import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './components/Home'

function App() {


  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
     <Route path="sobre" element={<About/>}/>
    <Route path="projetos" element={<Projects/>}/>
     <Route path="contato" element={<Contact/>}/>
    
   </Routes>
   </BrowserRouter>
   
  )
}

export default App

