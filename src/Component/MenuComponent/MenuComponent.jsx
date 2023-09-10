import React from 'react'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import './MenuComponent.css'
import HomeComponent from '../HomeComponent/HomeComponent'
import AboutComponent from '../AboutComponent/AboutComponent'
import ContactComponent from '../ContactComponent/ContactComponent'
import ProjectComponent from '../ProjectComponent/ProjectComponent'
import ResumeComponent from '../ResumeComponent/ResumeComponent'
const MenuComponent = () => {
  return (
    
      <Router>
        <div className='nav-container'>
        <nav className='nav-header'>
          <Link to = '/' className='nav-item'>Home</Link>
          <Link to = '/about' className='nav-item'>About</Link>
          <Link to = '/contact' className='nav-item'>Contact</Link>
          <Link to = '/resume' className='nav-item' >Resume</Link>
          <Link to ='/project' className='nav-item'>Project</Link>
        </nav>
        </div>
        <div>
          <Routes>
            <Route excat path='/' element = {<HomeComponent/>} />
            <Route path='/about' element = {<AboutComponent/>} />
            <Route path='/contact' element = {<ContactComponent/>} />
            <Route path='/project' element = {<ProjectComponent/>} />
            <Route path='/resume' element = {<ResumeComponent/>} />
          </Routes>
        </div>
      </Router>
    
  )
}

export default MenuComponent