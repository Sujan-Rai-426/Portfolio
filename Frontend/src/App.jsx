import { useState } from 'react'

import './App.css'

import Navbar from './pages/Navbar.jsx'
import Home from'../src/pages/Home.jsx'
import Project from'../src/components/Project.jsx'
import Footer from './pages/Footer.jsx'
// import SkillAndService from './pages/Skill_Service.jsx'

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Skills_Services from './components/Skills_Services.jsx'
import Contact_Form from './email/Contact_Form.jsx'

function App() {


  const [mode, setMode] = useState({
    backgroundColor: '#171b46',
    color: 'white'    
  })

  const toggleMode = () => {
      if (mode.backgroundColor === '#171b46') {
          setMode({
              backgroundColor: 'rgba(189, 245, 244, 0.767)',
              color: 'black'
          })
      } else {
          setMode({
              backgroundColor: '#171b46',
              color: 'white'
          })
      }
  }


  return (
    <div style={{...mode, minHeight: '100vh'}}>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />

        <div className='container' style={{padding: '10vh 0'}}>
          <Routes >
              <Route exact path="/" element={<Home />} > </Route>
              {/* <Route exact path="/skill" element={<SkillAndService />} > </Route> */}
              <Route exact path="/skills-services" element={<Skills_Services />} > </Route>
              <Route exact path="/projects" element={<Project />} > </Route>
              <Route exact path="/contact" element={<Contact_Form />} > </Route>
          </Routes>
        </div>


          <Footer />
      </Router>
    </div>
  )
}

export default App
