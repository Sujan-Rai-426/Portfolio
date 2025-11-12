


import React from 'react'

// css stylesheet import
import '../assets/styles/Home_Hero.css'
import '../assets/styles/Utility.css'
import Education from '../components/Education';
import About from '../components/About';
import Home_Hero from '../components/Home_Hero';
import Skills_Services from '../components/Skills_Services'
import Project from '../components/Project';
import Contact_Form from '../email/Contact_Form';

function Home() {

    return (

        <div>

            {/* -------------------HOME HERO SECTION -------------------------------- */}
        <Home_Hero />



        {/* ----------------ABOUT SECTION ---------------------------------- */}
        <About />



        {/* ----------------Education Section--------------------------- */}
        <Education />
        
        
        {/* ----------------Skills_Services Section--------------------------- */}
        <Skills_Services />

        
        {/* ----------------Projects Section--------------------------- */}
        <Project />


        {/* ----------------Contact_Form Section--------------------------- */}
        <Contact_Form />



        </div>

    )
}

export default Home